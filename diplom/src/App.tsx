import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { admin } from "./modules/_admin/routes";
import { student } from "./modules/_student/routes";
import { ErrorPage } from "./modules/_error";
import { getUserData } from "./utils/user/userData";
import { Header } from "./components/Header";
import { auth } from "./modules/_auth/routes";
import './app.css';

export const App: React.FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [role, setRole] = useState<string>();
	useEffect(() => {
		const userData = getUserData();
		if (userData?.id) {
			setIsAuth(true);
		}
		if (userData?.role) {
			setRole(userData.role as string);
		}
	}, []);

	return (
		<>
			{
				isAuth ? <Header /> : null
			}
			<BrowserRouter>
				<Routes>
				{
					isAuth 
					? 
					<>
						{role === 'STUDENT' && <>{student()}</>}
						{role === 'ADMIN' && <>{admin()}</>}
						<Route path="*" element={<ErrorPage />} />			
					</> 
					:
					<>
						{auth()}
					</>
				}
			</Routes>
			</BrowserRouter>
		</>
	)
}