import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
import { HousesList } from "./components/HousesList";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 900,
		minWidth: 400,
		margin: '100px auto 0',
		padding: 10,
	},
	content: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: 10,
	}
}));

export const AdminPage: React.FC = () => {
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
				<HousesList />
			</div>
		</Paper>
	)
};