import { makeStyles } from "@material-ui/styles";
import { Alert } from "@mui/material";
const useStyles = makeStyles(() => ({
	status: {
		'& > div': {
			borderRadius: 20,
		}
	}
}));

type props = {
	status: string;
}

export const Status: React.FC<props> = ({status}) => {
	const styles = useStyles();

	if (status === 'active') {
		return (
			<div className={styles.status}>
				<Alert icon={false} severity="info">Активна</Alert>
			</div>
		);
	}
	if (status === 'accepted') {
		return (
			<div className={styles.status}>
				<Alert icon={false} severity="success">Пройдена</Alert>
			</div>
		);
	}
	if (status === 'canceled_by_student') {
		return (
			<div className={styles.status}>
				<Alert icon={false} severity="warning">Отменена студентом</Alert>
			</div>
		);
	}
	if (status === 'canceled_by_admin') {
		return (
			<div className={styles.status}>
				<Alert icon={false} severity="error">Отменена администратором</Alert>
			</div>
		);
	}
}