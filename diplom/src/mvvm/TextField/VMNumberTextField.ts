import { Instance } from "mobx-state-tree";
import { VMTextField } from "./VMTextField";

export type TVMNumberTextFieldInstance = Instance<typeof VMNumberTextField>;

const VMNumberTextField = VMTextField.named('VMNamedTextField')
.actions((self) => ({
	onChange(value: string) {
		if (!value) {
			self.setValue('1');
			return;
		}
		if (Number.isNaN(Number(value)) || Number(value) < 1) {
			self.setIsError(true);
			self.setHelperText('Можно вводить только положительные числа');
			return;
		}
		self.setIsError(false);
		self.setHelperText('');
		self.setValue(value);

	}
}));
export default VMNumberTextField;