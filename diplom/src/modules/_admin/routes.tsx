import { Route } from "react-router-dom"
import { AdminPage } from ".";
import { msg } from "./_msg/routes";

export const admin = () => {
	return (
		<Route>
			<Route path='/' element={<AdminPage />} />
			{msg()}
		</Route>
	)
}