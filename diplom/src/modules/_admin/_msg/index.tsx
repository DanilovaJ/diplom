import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { PAGES_LIST } from "./constants/PAGES_LIST";
import { NavList } from "../../../components/NavList";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 900,
		minWidth: 400,
		margin: '100px auto 0',
		padding: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
	}
}));

export const MSGPage: React.FC = () => {
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
				<Typography variant="h5">Выберите место для записи</Typography>
				<NavList navList={PAGES_LIST}/>
			</div>
		</Paper>
	)
};