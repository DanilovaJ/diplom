import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { StretchingPage } from ".";
import { editor } from "./_editor/routes";

export function stretching() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.STRETCHING}`}>
			<Route index element={<StretchingPage />} />
			{editor()}
		</Route>
	)
}