import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { FlgEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.FLG_URLS.EDITOR}`} element={<FlgEditorPage />} />
		</Route>
	)
}