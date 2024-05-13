import { types } from "mobx-state-tree";
import { getUserData } from "../../../utils/user/userData";
import { api } from "../../../api";
import { VMModal } from "../../../mvvm/Modal/VMModal";
import { VMButton } from "../../../mvvm/Button/VMButton";

export type TTicket = {
	id: number;
	user_id: number;
	place_name: string;
	date: string;
	time: string;
	status: string;
}

export const student = types.model('student')
.volatile(() => ({
	tickets: [] as TTicket[],
	isPending: false,
	modal: VMModal.create({}),
	accept: VMButton.create({ text: 'Да' }),
	decline: VMButton.create({ text: 'Нет' }),
	idToCancel: 0,
}))
.actions((self) => ({
	setTickets(value: TTicket[]) {
		self.tickets = value; 
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
	setIdToCancel(value: number) {
		self.idToCancel = value;
	},
}))
.actions((self) => ({
	async fetchTickets() {
		self.setIsPending(true);
		const userData = getUserData();
		const res = await api.getTicketsByUser({
			user_id: userData?.id || 0,
		});
		await self.setTickets(res.data.map((ticket) => ({...ticket, date: `${new Date(ticket.date).toLocaleDateString()}`})));
		self.setIsPending(false);
	}	
}))
.actions((self) => ({
  openModal(id: number) {
		self.modal.setIsOpen(true);
		self.setIdToCancel(id);
	},
	closeModal() {
		self.modal.setIsOpen(false);
	},
	async cancel() {
		await api.cancelTicketByUser({
			ticket_id: self.idToCancel,
		});
		self.fetchTickets();
	}
}))
.actions((self) => ({
	async afterCreate() {
		self.accept.setOnClick(() => {
			self.cancel();
			self.closeModal();
		});
		self.decline.setOnClick(self.closeModal);

		self.fetchTickets();
	}
}))
.create({});