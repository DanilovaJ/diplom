import { MenuItem, Select } from "@mui/material";
import { TVMSelectInstance } from "./VMSelect";
import { TMSelectOptionInstance } from "./MSelectOption";
import { observer } from "mobx-react-lite";

type props = {
	model: TVMSelectInstance;
}

export const VSelect: React.FC<props> = observer(({model}) => {
	const { label, selected, onChange, options } = model
	return (
  <Select
		fullWidth={true}
    value={selected}
    onChange={onChange}
		label={label}
  >
		{options.map((option: TMSelectOptionInstance) => (
			<MenuItem 
				key={option.value}
				value={option.value} 
				disabled={option.isDisabled}
			>{option.label}</MenuItem>
		))}
  </Select>	
	)
});