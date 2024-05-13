import { makeStyles } from "@material-ui/styles";
import { LoginModal } from "./components/LoginModal";

const useStyles = makeStyles(() => ({
	main: {
		width: '100vw',
		height: '100vh',
		backgroundColor: 'rgba(5, 51, 110, 0.90)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export const LoginPage: React.FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.main}>
			<LoginModal />
		</div>
		)
};