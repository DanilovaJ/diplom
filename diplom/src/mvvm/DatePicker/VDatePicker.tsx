
import { DatePicker } from "@mui/x-date-pickers"
import { TVMDatePickerInstance } from "./VMDatePicker";

type props = {
	model: TVMDatePickerInstance;
}

export const VDatePicker: React.FC<props> = ({model}) => {
	const { label, onChange, disablePast } = model
	return (
		<DatePicker 
			label={label}
			onChange={onChange} 
			disablePast={disablePast}
		/>				
	)
};