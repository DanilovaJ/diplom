import { addDisposer, types } from "mobx-state-tree";
import { VMDatePicker } from "../../../../../mvvm/DatePicker/VMDatePicker";
import { VMButton } from "../../../../../mvvm/Button/VMButton";
import { TOption } from "../../../../../mvvm/Options/VMOption";
import { reaction } from "mobx";
import { VMOptionsGroup } from "../../../../../mvvm/Options/VMOptionsGroup";
import { getUserData } from "../../../../../utils/user/userData";
import { api } from "../../../../../api";

const CODE = 'msg_disinsection';

export const disinsection = types.model('disinsection')
.volatile(() => ({
	datePicker: VMDatePicker.create({label: 'Дата записи', disablePast: true}),
	tickets: VMOptionsGroup.create({}),
	confirmButton: VMButton.create({text: 'Записаться', isDisabled: true,}),
	errorMessage: '',
}))
.actions((self) => ({
	setErrorMessage(value: string) {
		self.errorMessage = value;
	}
}))
.views((self) => ({
	get selectedTicket() {
		return self.tickets.selected[0];	
	}
}))
.actions((self) => ({
	afterCreate() {
		addDisposer(
			self,
			reaction(
				() => self.tickets.selected.length,
				(isSelected) => {
					self.confirmButton.setIsDisabled(!isSelected);
				}
			)
		)

		addDisposer(
			self, 
			reaction(
				() => self.datePicker.value, 
				async (date) => {
					const { data } = await api.getSlotsByDateToStudent({
						place_id: CODE,
						date: date,
					});
					const options: TOption[] = data.map(({ time }: { time: string }) => ({ value: time, isSelected: false }))
					self.tickets.setOptions(options)
				}
			)
		)

		self.confirmButton.setOnClick(async () => {
			try {
				self.confirmButton.setIsDisabled(true);
				const userData = getUserData();
				await api.createTicket({
					user_id: Number(userData?.id),
					place_id: CODE,
					date: self.datePicker.value,
					time: self.selectedTicket.value,
				});
				self.setErrorMessage('');
				window.location.replace('/');
			} catch (e) {
				self.setErrorMessage(e.response?.data?.message || 'Неизвестная ошибка');
			} finally {
				self.confirmButton.setIsDisabled(false);
			}
		});
	}
})).create({});