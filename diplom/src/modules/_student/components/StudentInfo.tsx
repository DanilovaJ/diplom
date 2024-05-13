import { makeStyles } from "@material-ui/styles";
import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TStoreUserData } from "../../../utils/user/types";
import { getUserData } from "../../../utils/user/userData";
import { TicketsList } from "./TicketsList";
import { observer } from "mobx-react-lite";
import { student } from "../models";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 588,
		minWidth: 200,
		width: '100%',
		padding: 10,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: 10,
		margin: '0 0 16px 0',
	}
}));

export const StudentInfo: React.FC = observer(() => {
	const { isPending } = student;
	const [userData, setUserData] = useState<TStoreUserData | undefined>();
	
	useEffect(() => {
		setUserData(() => getUserData());
	}, []);
	
	const styles = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.content}>
			<Typography variant="h5">Добро пожаловать, {userData?.name} {userData?.second_name}</Typography>
			</div>
			{isPending ? <CircularProgress /> : <TicketsList />}
		</div>
	)
});