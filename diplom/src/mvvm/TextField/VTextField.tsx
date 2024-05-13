import { TextField, TextFieldVariants } from "@mui/material";
import { TVMTextFieldInstance } from "./VMTextField";
import { observer } from "mobx-react-lite";
import { TVMNumberTextFieldInstance } from "./VMNumberTextField";

type props = {
	model: TVMTextFieldInstance | TVMNumberTextFieldInstance;
}

export const VTextField: React.FC<props> = observer(({model}) => {
	const { label, value, variant, isError, helperText, isPassword, onChange } = model
	return (
		<TextField 
			onChange={(event) => onChange(event.target.value)}
			label={label}
			variant={variant as TextFieldVariants}
			error={isError}
			value={value}
			focused={!!value}
			helperText={helperText}
			type={isPassword ? 'password' : null}
		/>				
	)
});