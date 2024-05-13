import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TVMButtonInstance } from "./VMButton";

type props = {
	model: TVMButtonInstance;
	className?: string;
}

export const VButton: React.FC<props> = observer(({model, className}): JSX.Element => {
	const { onClick, isDisabled, text } = model;
	return (
			<Button
				className={className}
				style={{
					backgroundColor: isDisabled ? 'rgba(0,0,0,0.26)' : '#05336E',
					textTransform: 'none',
					fontSize: 16,
				}}
				onClick={onClick} 
				disabled={isDisabled} 
				variant={'contained'}
			>{text}</Button>
		)
});