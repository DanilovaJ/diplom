import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { SwimmingPoolPage } from ".";
import { editor } from "./_editor/routes";

export function swimmingPool() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.SWIMMING_POOL}`}>
			<Route index element={<SwimmingPoolPage />} />
			{editor()}
		</Route>
	)
}