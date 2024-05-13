import { hasHouses } from "./hasHouses";

export function withHouseAccess(item: unknown, houses: string[]) {
	return hasHouses(houses) ? item : null;
}