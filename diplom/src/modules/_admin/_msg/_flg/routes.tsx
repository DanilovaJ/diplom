import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { FlgPage } from ".";
import { editor } from "./_editor/routes";

export function flg() {
	return (
		<Route path={`${URLS.MSG}/${URLS.MSG_URLS.FLG}`}>
			<Route index element={<FlgPage />} />
			{editor()}
		</Route>
	)
}