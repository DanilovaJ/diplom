import { addDisposer, types } from "mobx-state-tree";
import { VMButtonGroup } from "../../../../../../mvvm/ButtonGroup/VMButtonGroup";
import { reaction } from "mobx";
import { api } from "../../../../../../api";
import { CODE } from "../../constants/CODE";
import { Slot, TSlotInstance } from "./Slot";
import VMNumberTextField from "../../../../../../mvvm/TextField/VMNumberTextField";
import { VMTimePicker } from "../../../../../../mvvm/TimePicker/VMTimePicker";
import { VMButton } from "../../../../../../mvvm/Button/VMButton";
import { VMModal } from "../../../../../../mvvm/Modal/VMModal";

export const editor = types.model('editor')
.volatile(() => ({
	week: VMButtonGroup.create({
		variant: 'contained',
		options: [
			{
				label: 'Понедельник',
				value: 'Mon',
				isSelected: false,
			},
			{
				label: 'Вторник',
				value: 'Tue',
				isSelected: false,
			},
			{
				label: 'Среда',
				value: 'Wed',
				isSelected: false,
			},
			{
				label: 'Четверг',
				value: 'Thu',
				isSelected: false,
			},
			{
				label: 'Пятница',
				value: 'Fri',
				isSelected: false,
			},
			{
				label: 'Суббота',
				value: 'Sat',
				isSelected: false,
			},
			{
				label: 'Воскресенье',
				value: 'Sun',
				isSelected: false,
			},
		]
	}),
	slots: [] as TSlotInstance[],
	isPending: false,
	limitField: VMNumberTextField.create({ label: 'Лимит участников' }),
	saveLimitButton: VMButton.create({ text: 'Сохранить' }),
	newSlotTimePicker: VMTimePicker.create({ label: 'Время записи' }),
	saveNewSlotButton: VMButton.create({ text: 'Сохранить' }),
	errorMessage: '',
	modal: VMModal.create({}),
	accept: VMButton.create({ text: 'Да' }),
	decline: VMButton.create({ text: 'Нет' }),
	idToDelete: 0,
}))
.views((self) => ({
	get selectedWeekday() {
		return self.week.options.filter((day) => day.isSelected)[0].value || '';
	},
	get newSlotTime() {
		const value = new Date(self.newSlotTimePicker.value); 
		const hours = value.getHours();
		const minutes = value. getMinutes();
		return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:00`;
	}
}))
.actions((self) => ({
	setSlots(slots: TSlotInstance[]) {
		self.slots = slots;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
	setErrorMessage(value: string) {
		self.errorMessage = value;
	},
	setIdToDelete(value: number) {
		self.idToDelete = value;
	},
	openModal() {
		self.modal.setIsOpen(true);
	},
	closeModal() {
		self.modal.setIsOpen(false);
	},
}))
.actions((self) => ({
	async fetchSlots() {
		const { data } = await api.getSlotsByWeekday({ place_id: CODE, weekday: self.selectedWeekday });
		self.setSlots(data.map((option) => (Slot.create({ value: option.id.toString(), label: option.time }))));
	},
	async deleteSlot() {
		self.setIsPending(true);
		await api.deleteSlot({ id: Number(self.idToDelete) });
		await this.fetchSlots();
		self.setIsPending(false);
	},
}))
.actions((self) => ({
	afterCreate() {
		self.saveLimitButton.setOnClick(async () => {
			self.saveLimitButton.setIsDisabled(true);
			await api.setPlaceLimit({ place_id: CODE, limit: Number(self.limitField.value) });
			self.saveLimitButton.setIsDisabled(false);
		});

		self.saveNewSlotButton.setOnClick(async () => {
			try {
				self.saveNewSlotButton.setIsDisabled(true);
				self.setIsPending(true);
				await api.createSlot({
					place_id: CODE,
					weekday: self.selectedWeekday,
					time: self.newSlotTime,
				})
				self.fetchSlots();
				self.setErrorMessage('');
			} catch(e) {
				self.setErrorMessage(e.response?.data?.message || 'Неизвестная ошибка');
			} finally {
				self.saveNewSlotButton.setIsDisabled(false); 
				self.setIsPending(false) ;
			}
		});

		self.accept.setOnClick(() => {
			self.closeModal();
			self.deleteSlot();
		});

		self.decline.setOnClick(() => {
			self.closeModal();
		});

		addDisposer(
			self, 
			reaction(
				() => self.week.selected, 
				async () => {
					self.setIsPending(true);
					await self.fetchSlots();
					self.setIsPending(false);
				}
			)
		);

		addDisposer(
			self, 
			reaction(
				() => self.newSlotTimePicker.value, 
				async () => {
					if (self.slots.map((slot) => slot.label).includes(self.newSlotTime)) {
						self.saveNewSlotButton.setIsDisabled(true);
						self.setErrorMessage('Такое время уже существует');
					} else {
						self.saveNewSlotButton.setIsDisabled(false);
						self.setErrorMessage('');
					}
				}
			)
		);
	},
	async start() {
		const { data: { students_limit } } = await api.getPlaceLimit({ place_id: CODE });
		self.limitField.onChange(students_limit.toString());
	}
})).create({});