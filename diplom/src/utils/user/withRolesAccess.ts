import { hasRoles } from "./hasRoles";

export function withRolesAccess(item: unknown, roles: string[]) {
	return hasRoles(roles) ? item : null;
}