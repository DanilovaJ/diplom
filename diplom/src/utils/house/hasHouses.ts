import { getUserData } from "../user/userData";

export function hasHouses(houses: string[]) {
	const userData = getUserData();
	return userData ? houses.includes(userData.house_id) : false;
}