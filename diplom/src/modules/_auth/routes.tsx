import { Route } from "react-router-dom"
import { LoginPage } from "./_login";
import { RegistrationPage } from "./_registration";

export const auth = () => {
	return (
			<Route>
				<Route path={"/registration"} element={<RegistrationPage />}/>
				<Route path={"*"} element={<LoginPage />} />
			</Route>
	)
}