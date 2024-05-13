import { Instance, types } from "mobx-state-tree";
import { MButtonGroupOption } from "./MButtonGroupOption";

export type TVMButtonGroupInstance = Instance<typeof VMButtonGroup>;

export const VMButtonGroup = types.model('VMButtonGroup', {
	variant: types.string,
	options: types.array(MButtonGroupOption),
})
.views((self) => ({
	get selected(): string {
		return self.options.filter((option) => option.isSelected)[0]?.value || '';
	},
}))
.actions((self) => ({
	onChange(value) {
		self.options.forEach((option) => {
			if (value === option.value) {
				option.setIsSelected(true);
			} else {
				option.setIsSelected(false);
			}
		})
	}
}))