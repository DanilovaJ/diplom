import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";
import { VDatePicker } from "../../../../mvvm/DatePicker/VDatePicker";
import { swimmingPool } from "./models";
import { VOptionsGroup } from "../../../../mvvm/Options/VOptionsGroup";
import { VButton } from "../../../../mvvm/Button/VButton";
import { observer } from "mobx-react-lite";
import { TicketsList } from "./components/TicketsList";
import { URLS } from "./constants/URLS";
import { VModal } from "../../../../mvvm/Modal/VModal";

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
	datePicker: {
		margin: '0 0 10px 0',
	},
	slots: {
		display: 'flex',
		padding: '0 24px',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 0 10px',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
	buttons: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	}
}));

export const SwimmingPoolPage: React.FC = observer(() => {
	const { openButton, isOpen, datePicker, slots, showButton, confirmButton, modal, modalAccept, modalDecline } = swimmingPool;

	const styles = useStyles();
	return (
		<>
			<VModal model={modal}>
				<div className={styles.modalContent}>
					<Typography variant="body1">
						Вы уверены, что хотите отменить запись?
					</Typography>
					<div className={styles.modalActions}>
						<VButton model={modalAccept} />
						<VButton model={modalDecline} />
					</div>
				</div>
			</VModal>
			<Paper elevation={1} className={styles.main}>
				<div className={styles.content}>
					<Typography variant="h4">Бассейн</Typography>
					<div className={styles.buttons}>
						<VButton model={openButton} />
						<VButton model={{onClick: () => location.replace(`./${URLS.SWIMMING_POOL}/editor`), text: 'Редактировать'}} />
					</div>
					{
						isOpen 
						? 
						<>
							<Typography variant="h6">Выберите дату и время записи</Typography>
							<div className={styles.datePicker}>
								<VDatePicker model={datePicker}/>	
							</div>
						</>
						: 
						null
					}	 
					{
						slots.options.length 
						? 
						<>
							<div className={styles.slots}>
								<VOptionsGroup model={slots} />
							</div>
							<div className={styles.content}>
								{showButton ? <VButton model={confirmButton}/> : null}
							</div>
						</>
						:
						null
					}
					{
						datePicker.value && !showButton
						? 
						<TicketsList />
						: 
						null
					}
					</div>
			</Paper>
		</>
	)
});