import { Instance, types } from "mobx-state-tree";

export type TVMModalInstance = Instance<typeof VMModal>;

export const VMModal = types.model('VMModal', {
	isOpen: types.optional(types.boolean, false),
})
.actions((self) => ({
	setIsOpen(value: boolean) {
		self.isOpen = value;
	},
}));