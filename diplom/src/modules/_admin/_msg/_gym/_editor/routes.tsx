import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { GymEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.GYM_URLS.EDITOR}`} element={<GymEditorPage />} />
		</Route>
	)
}