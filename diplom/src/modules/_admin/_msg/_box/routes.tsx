import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { BoxPage } from ".";
import { editor } from "./_editor/routes";

export function box() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.BOX}`}>
			<Route index element={<BoxPage />} />
			{editor()}
		</Route>
	)
}