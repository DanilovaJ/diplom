import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { HousesList } from "./components/HousesList";
import { StudentInfo } from "./components/StudentInfo";
import { VModal } from "../../mvvm/Modal/VModal";
import { student } from "./models";
import { observer } from "mobx-react-lite";
import { VButton } from "../../mvvm/Button/VButton";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 900,
		minWidth: 400,
		margin: '100px auto 0',
		padding: 10,
	},
	content: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: 10,
	},
	modalContent: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
	},
	modalActions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10, 
	},
	decline: {
		backgroundColor: 'rgba(0,0,0,0.26)',
	},
}));

export const StudentPage: React.FC = observer(() => {
	const { modal, accept, decline } = student;

	const styles = useStyles();
	return (
		<Paper elevation={1} className={styles.main}>
			<div className={styles.content}>
				<StudentInfo />
				<HousesList />
			</div>
			<VModal model={modal}>
				<div className={styles.modalContent}>
					<Typography variant="body1">
							Вы уверены, что хотите отменить запись?
					</Typography>
					<div className={styles.modalActions}>
						<VButton model={accept} />
						<VButton model={decline} className={styles.decline}/>
					</div>
				</div>
			</VModal>
		</Paper>
	)
});