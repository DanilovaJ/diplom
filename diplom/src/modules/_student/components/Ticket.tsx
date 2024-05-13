import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { student, TTicket } from "../models";
import { VButton } from "../../../mvvm/Button/VButton";
import { Status } from "./Status";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
	main: {
		width: '95%',
		padding: 10,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,
	},
	info: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	}
}));

export const Ticket: React.FC<TTicket> = observer(({ place_name, date, time, status, id }) => {
	const { openModal } = student;

	const buttonHandler = () => {
		openModal(id);
	}
	
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.info}>
				<Typography variant="body1">{place_name}</Typography>
				<Typography variant="body1">{date}</Typography>
				<Typography variant="body1">{time.slice(0, time.length - 3)}</Typography>
				<Status status={status} />
			</div>
			{status === 'active' ? <VButton model={{text: 'Отменить', onClick: buttonHandler, isDisabled: false}} /> : null}
		</Paper>	
	)
});