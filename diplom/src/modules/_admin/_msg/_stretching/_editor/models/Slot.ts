import { Instance, types } from "mobx-state-tree";
import { editor } from ".";

export type TSlotInstance = Instance<typeof Slot>;

export const Slot = types.model('VMOption', {
	label: types.optional(types.string, ''),
	value: types.optional(types.string, ''),
})
.actions((self) => ({
	onClick() {
		editor.setIdToDelete(self.value);
		editor.openModal();
	}
}))