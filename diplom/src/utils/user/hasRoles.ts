import { getUserData } from "./userData";

export function hasRoles(roles: string[]) {
	const userData = getUserData();
	return userData ? roles.includes(userData.role) : false;
}