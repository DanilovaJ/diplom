import { makeStyles } from "@material-ui/styles";
import { Button, Paper, Typography } from "@mui/material";
import { TVMOptionInstance } from "./VMOption";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
	main: {
		padding: 1,
		minHeight: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			boxShadow: '0 0 5px #666666'
		}
	},	
	selected: {
		padding: 1,
		minHeight: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			boxShadow: '0 0 5px #666666'
		},
		backgroundColor: '#BBBBBB'
	},	
	text: {
		color: '#05336E',
	},
	disabledText: {
		color: 'rgba(0,0,0,0.26)',
	}
}));

type props = {
	model: TVMOptionInstance;
}

export const VOption: React.FC<props> = observer(({model}): JSX.Element => {
	const { value, isSelected, toggleSelected } = model;
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<Button onClick={toggleSelected} disabled={isSelected}><Typography variant="h4" className={isSelected ? styles.disabledText : styles.text}>{value.slice(0, value.length - 3)}</Typography></Button>
		</Paper>
		)
});