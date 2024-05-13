import { Instance, types } from "mobx-state-tree";

export type TMSelectOptionInstance = Instance<typeof MSelectOption>;

export const MSelectOption = types.model('MSelectOption', {
	label: types.string,
	value: types.string,
	isSelected: types.boolean,
	isDisabled: types.boolean,
}).actions((self) => ({
	setIsSelected(value: boolean) {
		self.isSelected = value;
	},
	setIsDisabled(value: boolean) {
		self.isDisabled = value;
	},
}))