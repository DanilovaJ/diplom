import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { BoxEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.BOX_URLS.EDITOR}`} element={<BoxEditorPage />} />
		</Route>
	)
}