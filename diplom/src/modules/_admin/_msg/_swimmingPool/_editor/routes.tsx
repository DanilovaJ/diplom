import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { SwimmingPoolEditorPage } from ".";

export function editor() {
	return (
		<Route>
			<Route path={`${URLS.SWIMMING_POOL_URLS.EDITOR}`} element={<SwimmingPoolEditorPage />} />
		</Route>
	)
}