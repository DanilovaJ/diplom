import { makeStyles } from "@material-ui/styles";
import { Alert, Paper, Typography } from "@mui/material";
import { VDatePicker } from "../../../../mvvm/DatePicker/VDatePicker";
import { swimmingPool } from "./models";
import { VOptionsGroup } from "../../../../mvvm/Options/VOptionsGroup";
import { VButton } from "../../../../mvvm/Button/VButton";
import { observer } from "mobx-react-lite";

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
	},
	tickets: {
		display: 'flex',
		padding: '0 24px',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}));

export const SwimmingPoolPage: React.FC = observer(() => {
	const { datePicker, tickets, confirmButton, errorMessage } = swimmingPool;

	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
			<Typography variant="h4">Бассейн</Typography>
				<Typography variant="h5">Выберите дату и время записи</Typography>
				<VDatePicker model={datePicker}/>	
				{
					tickets.options.length 
					? 
					<>
						<div className={styles.tickets}>
							<VOptionsGroup model={tickets} />
						</div>
						{errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
						<div className={styles.content}>
						<VButton model={confirmButton}/>
						</div>
					</>
					:
					<Typography variant="body1">Нет свободных мест для записи</Typography>
				}
				</div>
		</Paper>
	)
});