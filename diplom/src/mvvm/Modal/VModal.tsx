
import { Modal } from "@mui/material";
import { TVMModalInstance } from "./VMModal";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	modal: {
		width: 500,
		padding: 10,
		margin: '200px auto 0',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
	},
}));

type props = {
	model: TVMModalInstance;
	children: React.ReactNode;
}

export const VModal: React.FC<props> = observer(({model, children}) => {
	const { isOpen } = model

	const styles = useStyles();
	return (
		<Modal
			open={isOpen}
		>
			<div className={styles.modal}>
			{children}
			</div>
		</Modal>				
	)
});