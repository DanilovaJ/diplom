import { Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TVMButtonGroupInstance } from "./VMButtonGroup";

type props = {
	model: TVMButtonGroupInstance;
};

export const VButtonGroup: React.FC<props> = observer(({ model }) => {
	const {
		variant,
		options,
		onChange,
	} = model;
	return (
		<ButtonGroup variant={variant} style={{backgroundColor: 'rgba(0,0,0,0)'}} fullWidth>
			{options.map((option) => 
				<Button 
					style={{
						backgroundColor: option.isSelected ? 'rgba(0, 0, 0, 0.26)' : '#05336E',
						borderColor: '#05336E',
					}} 
					onClick={() => onChange(option.value)} 
					disabled={option.isSelected}
					>
						{option.label}
				</Button>
			)}
		</ButtonGroup>
	)
});