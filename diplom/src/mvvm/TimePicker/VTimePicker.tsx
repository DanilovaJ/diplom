
import { MobileTimePicker } from "@mui/x-date-pickers"
import { TVMTimePickerInstance } from "./VMTimePicker";

type props = {
	model: TVMTimePickerInstance;
}

export const VTimePicker: React.FC<props> = ({model}) => {
	const { label, onChange } = model
	return (
		<MobileTimePicker  
			label={label}
			onChange={onChange} 
			views={['hours', 'minutes']}
			localeText={{ cancelButtonLabel: 'Отменить', okButtonLabel: 'Принять' }}
		/>				
	)
};