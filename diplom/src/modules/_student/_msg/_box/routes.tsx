import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { BoxPage } from ".";

export const box = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.BOX}`} element={<BoxPage />} />
		</Route>
	)
};