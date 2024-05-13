import { makeStyles } from "@material-ui/styles"
import { observer } from "mobx-react-lite";
import { TSlotInstance } from "../models/Slot";
import { Slot } from "./Slot";

const useStyles = makeStyles(() => ({
	content: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: 10,
	},
}))

type props = {
	models: TSlotInstance[];
}

export const SlotsList: React.FC<props> = observer(({ models }): JSX.Element => {	
	const styles = useStyles();
	return (
		<div className={styles.content}>
			{models.map((model, index) => <div key={index}><Slot model={model} /></div>)}	
		</div>
	)
});