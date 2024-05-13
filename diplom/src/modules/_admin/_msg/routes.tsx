import { Route } from "react-router-dom"
import { URLS } from "./constants/URLS"
import { MSGPage } from ".";
import { swimmingPool } from "./_swimmingPool/routes";
import { gym } from "./_gym/routes";
import { stretching } from "./_stretching/routes";
import { box } from "./_box/routes";
import { flg } from "./_flg/routes";
import { disinsection } from "./_disinsection/routes";

export function msg() {
	return (
		<Route>
			{swimmingPool()}
			{gym()}
			{stretching()}
			{box()}
			{flg()}
			{disinsection()}
			<Route path={URLS.MSG} element={<MSGPage />} />
		</Route>
	)
}