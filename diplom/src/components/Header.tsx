import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { VButton } from "../mvvm/Button/VButton";
import { clearUserData } from "../utils/user/userData";

const useStyles = makeStyles(() => ({
	header: {
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
		backgroundColor: '#05336E',
		zIndex: 10000,
	},
	logout: {
		color: '#FFFFFF',
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		padding: 15
	},
	link: {
		color: '#FFFFFF',
		textDecoration: 'none',
	},
}));

export const Header: React.FC = () => {
	const styles = useStyles();

	if (location.pathname === '/') {
		return <div className={styles.header}>
		<div/>
		<div className={styles.logout}>
		<VButton model={{text: 'Выйти', onClick: () => { clearUserData(); location.reload(); }}} />
		</div>
	</div>
	}

		return (
			<div className={styles.header}>
				<div className={styles.flex}>
					<a className={styles.link} href={'/'} ><Typography variant="body2">Профиль</Typography></a>
					<a className={styles.link} href={'./'} ><Typography variant="body2">Назад</Typography></a>
				</div>
				<div className={styles.logout}>
				<VButton model={{text: 'Выйти', variant: 'text', onClick: () => { clearUserData(); location.reload(); }}} />
				</div>
			</div>
		)

};