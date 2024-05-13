import { Route } from "react-router-dom"
import { URLS } from "../constants/URLS";
import { StretchingPage } from ".";

export const stretching = () => {
	return (
		<Route>
			<Route path={`${URLS.MSG}/${URLS.MSG_URLS.STRETCHING}`} element={<StretchingPage />} />
		</Route>
	)
};