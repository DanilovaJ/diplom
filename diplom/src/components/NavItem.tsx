import { makeStyles } from "@material-ui/styles";
import { Link, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
	main: {
		padding: 4,
		minHeight: 64,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			boxShadow: '0 0 5px #666666'
		},
		backgroundColor: '#05336E',
		boxShadow: '1px 1px 1px grey',
		borderRadius: 5,
		color: '#FFFFFF',
	},	
}));

type props = {
	path: string;
	title: string;
}

export const NavItem: React.FC<props> = ({path, title}): JSX.Element => {
	const styles = useStyles();
	return (
		<Link href={path} underline="none">
			<div className={styles.main}>
				<Typography variant="h6">{title}</Typography>
			</div>
		</Link>
		)
};