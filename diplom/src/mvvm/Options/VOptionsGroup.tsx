import { makeStyles } from "@material-ui/styles"
import { VOption } from "./VOption";
import { observer } from "mobx-react-lite";
import { TVMOptionsGroupInstance } from "./VMOptionsGroup";

const useStyles = makeStyles(() => ({
	content: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: 10,
	},
}))

type props = {
	model: TVMOptionsGroupInstance;
}

export const VOptionsGroup: React.FC<props> = observer(({model}): JSX.Element => {
	const { options } = model
	
	const styles = useStyles();
	return (
		<div className={styles.content}>
			{options.map((option, index) => <div key={index}><VOption model={option} /></div>)}	
		</div>
	)
});