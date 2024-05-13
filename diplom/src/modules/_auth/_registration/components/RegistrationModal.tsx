import { makeStyles } from "@material-ui/styles";
import { Alert, Paper, Typography } from "@mui/material";
import { VTextField } from "../../../../mvvm/TextField/VTextField";
import { registration } from "../models";
import { VButton } from "../../../../mvvm/Button/VButton";
import { VSelect } from "../../../../mvvm/Select/VSelect";
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
	select: {
		width: 220,
	},
	button: {
		width: 220,
	},
}));

export const RegistrationModal: React.FC = observer(() => {
	const { 
		login, 
		name, 
		secondName, 
		password, 
		house, 
		room,
		confirmButton, 
		toLogin,
		errorMessage,
	} = registration;
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
				<Typography variant="h5">Регистрация</Typography>
				<VTextField model={login} />
				<VTextField model={name} />
				<VTextField model={secondName} />
				<VTextField model={password} />
				<VTextField model={room} />
				<Typography>Выберите общежитие:</Typography>
				<div className={styles.select}>
				<VSelect model={house} />
				</div>
				{errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
				<VButton className={styles.button} model={confirmButton}/>
				<VButton className={styles.button} model={toLogin}/>
			</div>
		</Paper>
	)
});