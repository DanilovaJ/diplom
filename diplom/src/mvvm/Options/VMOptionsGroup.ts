import { Instance, addDisposer, types } from "mobx-state-tree";
import { VMOption, TOption } from "./VMOption";
import { reaction } from "mobx";

export type TVMOptionsGroupInstance = Instance<typeof VMOptionsGroup>;

export const VMOptionsGroup = types.model('VMOptionsGroup', {
	options: types.optional(types.array(VMOption), []),
})
.views((self) => ({
	get selected() {
		return self.options.filter((option) => option.isSelected);
	}
}))
.actions((self) => ({
	setOptions(value: TOption[]) {
		self.options = value.map((option) => VMOption.create(option));
	},
	afterCreate() {
		addDisposer(self, reaction(() => self.selected, (selectedOptions, prev) => {
			if (selectedOptions.length === 2) {
				prev[0].setIsSelected(false);
			}
		}))
	}
}))