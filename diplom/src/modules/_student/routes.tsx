import { Route } from "react-router-dom";
import { msg } from "./_msg/routes";
import { StudentPage } from ".";

export const student = () => {
	return (
		<Route path={'/'}>
			<Route index element={<StudentPage />} />
			{msg()}
		</Route>
	)
}