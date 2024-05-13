import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { DisinsectionPage } from ".";
import { editor } from "./_editor/routes";

export function disinsection() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.DISINSECTION}`}>
			<Route index element={<DisinsectionPage />} />
			{editor()}
		</Route>
	)
}