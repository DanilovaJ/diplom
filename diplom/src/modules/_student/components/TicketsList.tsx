import { makeStyles } from "@material-ui/styles";
import { student } from "../models";
import { Ticket } from "./Ticket";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
	main: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: 10,
	},
}));

export const TicketsList: React.FC = observer(() => {
	const { tickets } = student;

	const styles = useStyles();
	return (
		<div className={styles.main}>
			{tickets.length ? tickets.map((ticket, index) => <Ticket key={index} {...ticket}/>) : <div>Нет записей</div>}
		</div>
	)
});