import { makeStyles } from "@material-ui/styles";
import { Alert, CircularProgress, Paper, Typography } from "@mui/material";
import { editor } from "./models";
import { observer } from "mobx-react-lite";
import { VButtonGroup } from "../../../../../mvvm/ButtonGroup/VButtonGroup";
import { SlotsList } from "./components/SlotsList";
import { VTextField } from "../../../../../mvvm/TextField/VTextField";
import { VTimePicker } from "../../../../../mvvm/TimePicker/VTimePicker";
import { VButton } from "../../../../../mvvm/Button/VButton";
import { useEffect } from "react";
import { VModal } from "../../../../../mvvm/Modal/VModal";

const useStyles = makeStyles(() => ({
	main: {
		maxWidth: 900,
		minWidth: 400,
		margin: '100px auto 0',
		padding: 30,
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
	},
	flex: {
		display: 'flex',
		alignItems: 'start',
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
}));

export const SwimmingPoolEditorPage: React.FC = observer(() => {
	const { 
		week,
		slots, 
		isPending, 
		limitField, 
		newSlotTimePicker, 
		saveLimitButton, 
		saveNewSlotButton,
		errorMessage,
		start,
		modal,
		accept,
		decline
	} = editor;

	useEffect(() => {
		start();
	}, []);

	const styles = useStyles();
	return (
		<>
			<VModal model={modal}>
				<div className={styles.modalContent}>
					<Typography variant="body1">
						Вы уверены, что хотите удалить слот?
					</Typography>
					<div className={styles.modalActions}>
						<VButton model={accept} />
						<VButton model={decline} />
					</div>
				</div>
			</VModal>
			<Paper elevation={1} className={styles.main}>
				<div className={styles.flex}>
					<VTextField model={limitField} />
					<VButton model={saveLimitButton}/>
				</div>
				<VButtonGroup model={week}/>
				{
					week.selected
					? 
						<>
						{!isPending 
							?
								<>
									<div className={styles.flex}>
										<VTimePicker model={newSlotTimePicker} />
										<VButton model={saveNewSlotButton}/>
									</div>
									{errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
									{slots.length 
										? <SlotsList models={slots} /> 
										: <Typography variant="body1">Нет сессий</Typography>
									}
								</>
							: 
							<CircularProgress />
						}
						</>
					: 
					<Typography variant="body1">Выберите день недели</Typography>
				}
			</Paper>
		</>
	)
});