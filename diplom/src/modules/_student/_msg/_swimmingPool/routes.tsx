import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { SwimmingPoolPage } from ".";

export const swimmingPool = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.SWIMMING_POOL}`} element={<SwimmingPoolPage />} />
		</Route>
	)
};