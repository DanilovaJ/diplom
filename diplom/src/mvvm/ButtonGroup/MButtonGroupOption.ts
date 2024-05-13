import { Instance, types } from "mobx-state-tree";

export type TMButtonGroupOptionInstance = Instance<typeof MButtonGroupOption>;

export const MButtonGroupOption = types.model('MButtonGroupOption', {
	label: types.string,
	value: types.string,
	isSelected: types.boolean,
}).actions((self) => ({
	setIsSelected(value: boolean) {
		self.isSelected = value;
	},
}))