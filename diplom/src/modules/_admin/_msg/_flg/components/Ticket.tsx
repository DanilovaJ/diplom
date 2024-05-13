import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { flg, TTicket } from "../models/index";
import { VButton } from "../../../../../mvvm/Button/VButton";
import { Status } from "./Status";

const useStyles = makeStyles(() => ({
	main: {
		width: '100%',
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
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	}
}));

export const Ticket: React.FC<TTicket> = ({ user_name, user_second_name, status, id }) => {
	const { accept, openModal } = flg;
	
	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.info}>
				<Typography variant="body1">{user_name} {user_second_name}</Typography>
				<Status status={status} />
			</div>
			{status === 'active' 
				? <div className={styles.buttons}>
					<VButton model={{text: 'Отменить', onClick: () => openModal(id), isDisabled: false}} /> 
					<VButton model={{text: 'Принять', onClick: () => accept(id), isDisabled: false}} />
					</div>
				: null}
		</Paper>	
	)
};