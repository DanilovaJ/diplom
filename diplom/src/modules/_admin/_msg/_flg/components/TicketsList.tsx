import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { Ticket } from "./Ticket";
import { observer } from "mobx-react-lite";
import { flg } from "../models";

const useStyles = makeStyles(() => ({
	main: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
	},
}));

export const TicketsList: React.FC = observer(() => {
	const { tickets } = flg;

	const styles = useStyles();
	return (
		<div className={styles.main}>
			{tickets.length ? tickets.map((ticket, index) => <Ticket key={index} {...ticket}/>) : <Typography className={styles.main} variant='body1'>Нет записей</Typography>}
		</div>
	)
});
