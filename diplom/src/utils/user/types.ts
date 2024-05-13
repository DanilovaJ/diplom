type TUserData = {
	id: number;
	name: string;
	second_name: string;
	password: string;
	house_id: string;
	role: string;
}

export type TStoreUserData = Omit<TUserData, 'password'>;