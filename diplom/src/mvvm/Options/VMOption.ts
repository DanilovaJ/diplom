import { Instance, types } from "mobx-state-tree";

export type TOption = {
	value: string;
	isSelected: boolean;
}

export type TVMOptionInstance = Instance<typeof VMOption>;

export const VMOption = types.model('VMOption', {
	value: types.optional(types.string, ''),
	isSelected: types.optional(types.boolean, false),
})
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
	setIsSelected(value: boolean) {
		self.isSelected = value;
	},
	toggleSelected() {
		self.isSelected = !self.isSelected;
	},
}))