import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { GymPage } from ".";
import { editor } from "./_editor/routes";

export function gym() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.GYM}`}>
			<Route index element={<GymPage />} />
			{editor()}
		</Route>
	)
}