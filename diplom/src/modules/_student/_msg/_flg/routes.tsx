import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { FlgPage } from ".";

export const flg = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.FLG}`} element={<FlgPage />} />
		</Route>
	)
};