import { makeStyles } from "@material-ui/styles";
import { Alert, Paper, Typography } from "@mui/material";
import { VTextField } from "../../../../mvvm/TextField/VTextField";
import { login as loginModel } from "../models";
import { VButton } from "../../../../mvvm/Button/VButton";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 500,
		minWidth: 400,
		padding: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
	},
	button: {
		width: 220,
	},
}));

export const LoginModal: React.FC = observer(() => {
	const { login, password, errorMessage, confirmButton, toRegistration } = loginModel;
	const styles = useStyles();
	return (
		<Paper elevation={12} className={styles.main}>
			<div className={styles.content}>
				<Typography variant="h5">Вход</Typography>
				<VTextField model={login} />
				<VTextField model={password} />
				{errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
				<VButton className={styles.button} model={confirmButton}/>
				<VButton className={styles.button} model={toRegistration}/>
			</div>
		</Paper>
	)
});