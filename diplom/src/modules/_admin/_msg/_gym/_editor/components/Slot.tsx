import { makeStyles } from "@material-ui/styles";
import { Button, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TSlotInstance } from "../models/Slot";

const useStyles = makeStyles(() => ({
	main: {
		padding: 4,
		minHeight: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			boxShadow: '0 0 5px #666666'
		}
	},	
	selected: {
		padding: 4,
		minHeight: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			boxShadow: '0 0 5px #666666'
		},
		backgroundColor: 'BBBBB'
	},	
}));

type props = {
	model: TSlotInstance;
}

export const Slot: React.FC<props> = observer(({model}): JSX.Element => {
	const { label, onClick } = model;
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<Button onClick={onClick}><Typography variant="h4" style={{color: '#05336E'}}>{label.slice(0, label.length - 3)}</Typography></Button>
		</Paper>
		)
});