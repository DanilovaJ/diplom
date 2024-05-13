import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { DisinsectionPage } from ".";

export const disinsection = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.DISINSECTION}`} element={<DisinsectionPage />} />
		</Route>
	)
};