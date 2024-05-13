import { Instance, types } from "mobx-state-tree";

export type TVMButtonInstance = Instance<typeof VMButton>;

export const VMButton = types.model('VMButton', {
	variant: types.optional(types.string, 'contained'),
	text: types.optional(types.string, ''),
	isDisabled: types.optional(types.boolean, false),
}).actions(() => ({
	onClick() {},
})).actions((self) => ({
	setOnClick(callback: () => void) {
		self.onClick = callback;
	},
	setText(value: string) {
		self.text = value;
	},
	setIsDisabled(value: boolean) {
		self.isDisabled = value;
	},
	toggleIsDisabled() {
		self.isDisabled = !self.isDisabled;
	}
}));