import { AxiosResponse } from 'axios';
import { apiPost } from './api';
import { TStoreUserData } from '../utils/user/types';

export const URLS = {
	login: "auth/login",
	registration: "auth/registration",
	getTicketsByUser: "tickets/get_by_user",
  getTicketsByAdmin: "tickets/get_by_admin",
	createTicket: "tickets/create",
	cancelTicketByUser: "tickets/cancel_by_user",
	cancelTicketByAdmin: "tickets/cancel_by_admin",
	acceptTicketByAdmin: "tickets/accept_by_admin",
	getSlotsByDateToStudent: "slots/get_by_date_to_student",
	getSlotsByDateToAdmin: "slots/get_by_date_to_admin",
	getSlotsByWeekday: "slots/get_by_weekday",
	deleteSlot: "slots/delete",
	createSlot: "slots/create",
	getPlaceLimit: "slots/get_place_limit",
	setPlaceLimit: "slots/set_place_limit",
};

type TLoginParams = {
	authData: {
		login: string;
		password: string;
	}
}

type TLoginResponse = TStoreUserData;

type TRegistrationParams = {
	authData: {
		login: string;
		password: string;
		name: string;
		second_name: string;
		house_id: string;
		room: number;
	}
}

type TRegistrationResponse = TStoreUserData;

type TGetTicketsByUserParams = {
	user_id: number;
};

type TGetTicketsByUserResponse = {
	id: number;
	date: string; 
	time: string;
	user_id: number;
	status: string;
	place_name: string;
}[];

type TGetTicketsByAdminParams = {
	place_id: string;
	date: string;
	time: string;
};

type TGetTicketsByAdminResponse = {
	id: number;
	status: string;
	user_name: string;
	user_second_name: string;
	room: number;
}[];

type TCreateTicketParams = {
	user_id: number;
	place_id: string;
	date: string;
	time: string;
};

type TCancelTicketByUserParams = {
	ticket_id: number;
};

type TCancelTicketByAdminParams = {
	ticket_id: number;
};

type TAcceptTicketByAdminParams = {
	ticket_id: number;
};

type TGetSlotsByDateParams = {
	place_id: string;
	date: string;
};

type TGetSlotsByDateResponse = {
	id: number;
	time: string;
}[];

type TGetSlotsByWeekdayParams = {
	place_id: string;
	weekday: string;
};

type TGetSlotsByWeekdayResponse = {
	id: number;
	time: string;
}[];

type TDeleteSlotParams = {
	id: number;
};

type TCreateSlotParams = {
	place_id: string;
	weekday: string;
	time: string;
}

type TGetPlaceLimitParams = {
	place_id: string;
};

type TGetPlaceLimitResponse = {
	students_limit: number;
};

type TSetPlaceLimitParams = {
	place_id: string;
	limit: number;
};

export const api = {
	login: (params: TLoginParams): Promise<AxiosResponse<TLoginResponse>> => {
		return apiPost(URLS.login, params);
	},

	registraion: (params: TRegistrationParams): Promise<AxiosResponse<TRegistrationResponse>> => {
		return apiPost(URLS.registration, params);
	},

	getTicketsByUser: (params: TGetTicketsByUserParams): Promise<AxiosResponse<TGetTicketsByUserResponse>> => {
		return apiPost(URLS.getTicketsByUser, params);
	},
	
	getTicketsByAdmin: (params: TGetTicketsByAdminParams): Promise<AxiosResponse<TGetTicketsByAdminResponse>> => {
		return apiPost(URLS.getTicketsByAdmin, params);
	},

	createTicket: (params: TCreateTicketParams): Promise<AxiosResponse> => {
		return apiPost(URLS.createTicket, params);
	},

	cancelTicketByUser: (params: TCancelTicketByUserParams): Promise<AxiosResponse> => {
		return apiPost(URLS.cancelTicketByUser, params);
	},

	cancelTicketByAdmin: (params: TCancelTicketByAdminParams): Promise<AxiosResponse> => {
		return apiPost(URLS.cancelTicketByAdmin, params);
	},
	
	acceptTicketByAdmin: (params: TAcceptTicketByAdminParams): Promise<AxiosResponse> => {
		return apiPost(URLS.acceptTicketByAdmin, params);
	},
	
	getSlotsByDateToStudent: (params: TGetSlotsByDateParams): Promise<AxiosResponse<TGetSlotsByDateResponse>> => {
		return apiPost(URLS.getSlotsByDateToStudent, params);
	},

	getSlotsByDateToAdmin: (params: TGetSlotsByDateParams): Promise<AxiosResponse<TGetSlotsByDateResponse>> => {
		return apiPost(URLS.getSlotsByDateToAdmin, params);
	},

	getSlotsByWeekday: (params: TGetSlotsByWeekdayParams): Promise<AxiosResponse<TGetSlotsByWeekdayResponse>> => {
		return apiPost(URLS.getSlotsByWeekday, params);
	},
	
	deleteSlot: (params: TDeleteSlotParams): Promise<AxiosResponse> => {
		return apiPost(URLS.deleteSlot, params);
	},
	
	createSlot: (params: TCreateSlotParams): Promise<AxiosResponse> => {
		return apiPost(URLS.createSlot, params);
	},
	
	getPlaceLimit: (params: TGetPlaceLimitParams): Promise<AxiosResponse<TGetPlaceLimitResponse>> => {
		return apiPost(URLS.getPlaceLimit, params);
	},

	setPlaceLimit: (params: TSetPlaceLimitParams): Promise<AxiosResponse> => {
		return apiPost(URLS.setPlaceLimit, params);
	},
};