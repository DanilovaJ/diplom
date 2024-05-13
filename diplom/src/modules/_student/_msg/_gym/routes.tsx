import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { GymPage } from ".";

export const gym = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.GYM}`} element={<GymPage />} />
		</Route>
	)
};