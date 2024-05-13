import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { StretchingEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.STRETCHING_URLS.EDITOR}`} element={<StretchingEditorPage />} />
		</Route>
	)
}