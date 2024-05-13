import { makeStyles } from "@material-ui/styles"
import { NavItem } from "./NavItem"

const useStyles = makeStyles(() => ({
	content: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: 10,
	},
}))

export type navItem = {
	url: string;
	title: string;
}

type props = {
	navList: navItem[];
}

export const NavList: React.FC<props> = ({navList}): JSX.Element => {
	const styles = useStyles();
	return (
		<div className={styles.content}>
			{navList.map((navItem) => <div key={navItem.url}><NavItem title={navItem.title} path={navItem.url} /></div>)}	
		</div>
	)
}