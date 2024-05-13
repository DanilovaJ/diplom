import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { DisinsectionEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.DISINSECTION_URLS.EDITOR}`} element={<DisinsectionEditorPage />} />
		</Route>
	)
}