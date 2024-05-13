import { Instance, types } from "mobx-state-tree";

export type TVMDatePickerInstance = Instance<typeof VMDatePicker>;

export const VMDatePicker = types.model('VMDatePicker', {
	label: types.optional(types.string, ''),
	value: types.optional(types.string, ''),
	disablePast: types.optional(types.boolean, false),
})
.volatile(() => ({
	minDate: null as Date | null,
}))
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
	setLabel(value: string) {
		self.label = value;
	},
}))
.actions((self) => ({
	onChange(value) {
		self.setValue(value.format());
	}
}))