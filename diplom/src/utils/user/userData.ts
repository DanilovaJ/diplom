import { TStoreUserData } from "./types";

export function setUserData(userData: TStoreUserData): void {
	localStorage.setItem("userData", JSON.stringify(userData));
}

export function getUserData(): TStoreUserData | undefined {
	const dataFromStorage = localStorage.getItem("userData"); 
	try {
		return dataFromStorage ? JSON.parse(dataFromStorage) : undefined;
	} catch {
		return undefined;
	}
}

export function clearUserData() {
	localStorage.setItem('userData', '');
}