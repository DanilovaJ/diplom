import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { NavList, navItem } from "../../../components/NavList";
import { HOUSES_LIST } from "../constants/HOUSES_LIST";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 288,
		minWidth: 200,
		width: '100%',
		padding: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: 10,
	}
}));

export const HousesList: React.FC = () => {
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
			<Typography variant="h5">Выберите общежитие</Typography>
				<NavList navList={HOUSES_LIST as navItem[]}/>
			</div>
		</Paper>
	)
};