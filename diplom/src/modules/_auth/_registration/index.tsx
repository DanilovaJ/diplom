import { makeStyles } from "@material-ui/styles";
import { RegistrationModal } from "./components/RegistrationModal";

const useStyles = makeStyles(() => ({
	main: {
		width: '100vw',
		minHeight: '100vh',
		backgroundColor: 'rgba(5, 51, 110, 0.90)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export const RegistrationPage: React.FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.main}>
			<RegistrationModal />
		</div>
		)
};