import { Instance, types } from "mobx-state-tree";

export type TVMTimePickerInstance = Instance<typeof VMTimePicker>;

export const VMTimePicker = types.model('VMDatePicker', {
	label: types.optional(types.string, ''),
	value: types.optional(types.string, ''),
})
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