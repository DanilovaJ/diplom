import { types } from "mobx-state-tree";
import { getUserData } from "../../../utils/user/userData";
import { api } from "../../../api";

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
}))
.actions((self) => ({
	setTickets(value: TTicket[]) {
		self.tickets = value; 
	},
	setIsPending(value: boolean) {
		self.isPending = value;
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
	async cancel(ticket_id: number) {
		await api.cancelTicketByUser({
			ticket_id,
		});
		self.fetchTickets();
	}
}))
.actions((self) => ({
	async afterCreate() {
		self.fetchTickets();
	}
}))
.create({});