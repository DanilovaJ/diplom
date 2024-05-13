import { addDisposer, types } from "mobx-state-tree";
import { VMDatePicker } from "../../../../../mvvm/DatePicker/VMDatePicker";
import { VMButton } from "../../../../../mvvm/Button/VMButton";
import { TOption } from "../../../../../mvvm/Options/VMOption";
import { reaction } from "mobx";
import { VMOptionsGroup } from "../../../../../mvvm/Options/VMOptionsGroup";
import { api } from "../../../../../api";
import { CODE } from "../constants/CODE";
import { VMModal } from "../../../../../mvvm/Modal/VMModal";

export type TTicket = {
	id: number;
	user_name: string;
	user_second_name: string;
	status: string;
}

export const flg = types.model('flg')
.volatile(() => ({
	tickets: [] as TTicket[],
	openButton: VMButton.create({
		text: 'Просмотреть записи'
	}),
	isOpen: false,
	datePicker: VMDatePicker.create({label: 'Дата записи'}),
	slots: VMOptionsGroup.create({}),
	confirmButton: VMButton.create({text: 'Выбрать'}),
	showButton: false,
	errorMessage: '',
	modal: VMModal.create({}),
	modalAccept: VMButton.create({ text: 'Да' }),
	modalDecline: VMButton.create({ text: 'Нет' }),
	idToCancel: 0,
}))
.views((self) => ({
	get selectedSlot() {
		return self.slots.selected[0];	
	}
}))
.actions((self) => ({
	setIsOpen(value: boolean) {
		self.isOpen = value;
	},
	setTickets(value: TTicket[]) {
		self.tickets = value; 
	},
	setErrorMessage(value: string) {
		self.errorMessage = value;
	},
	setShowButton(value: boolean) {
		self.showButton = value;
	},
	setIdToCancel(value: number) {
		self.idToCancel = value;
	},
	openModal(id: number) {
		self.modal.setIsOpen(true);
		this.setIdToCancel(id);
	},
	closeModal() {
		self.modal.setIsOpen(false);
	},
}))
.actions((self) => ({
	async cancel() {
		try {
			await api.cancelTicketByAdmin({
				ticket_id: self.idToCancel,
			});
			self.setTickets(self.tickets.map((ticket) => {
				if (ticket.id === self.idToCancel) {
					return {...ticket, status: 'canceled_by_admin'}
				}  
				return {...ticket} 
			}))
		} catch {}
	},
	async accept(ticket_id: number) {
		try {
			await api.acceptTicketByAdmin({
				ticket_id,
			});
			self.setTickets(self.tickets.map((ticket) => {
				if (ticket.id === ticket_id) {
					return {...ticket, status: 'accepted'}
				}  
				return {...ticket} 
			}))
		} catch {}
	}
}))
.actions((self) => ({
	afterCreate() {
		self.openButton.setOnClick(() => {
			self.setIsOpen(true);
			self.openButton.setIsDisabled(true);
		});
		self.modalAccept.setOnClick(() => {
			self.cancel();
			self.closeModal();
		});
		self.modalDecline.setOnClick(self.closeModal);

		addDisposer(
			self,
			reaction(
				() => self.slots.selected,
				() => {
					self.setShowButton(true);
				}
			)
		)

		addDisposer(
			self, 
			reaction(
				() => self.datePicker.value, 
				async (date) => {
					const { data } = await api.getSlotsByDateToAdmin({
						place_id: CODE,
						date: date,
					});
					const options: TOption[] = data.map(({ time }: { time: string }) => ({ value: time, showButton: false }))
					self.slots.setOptions(options);
					self.setTickets([]);
				}
			)
		)

		self.confirmButton.setOnClick(async () => {
			try {
				self.setShowButton(false);
				self.confirmButton.setIsDisabled(true);
				const { data } = await api.getTicketsByAdmin({
					place_id: CODE,
					date: self.datePicker.value,
					time: self.selectedSlot.value,
				});
				await self.setTickets(data.map((ticket) => ({...ticket })));
				self.setErrorMessage('');
			} catch (e) {
				self.setErrorMessage(e.response?.data?.message || 'Неизвестная ошибка');
			} finally {
				self.confirmButton.setIsDisabled(false);
			}
		});
	}
})).create({});