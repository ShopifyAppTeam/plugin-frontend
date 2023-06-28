import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';
import api from "../../api/axiousConfig";
import { HttpStatusCode } from 'axios';

export const userKey = "plugin-user";

export const isAuthenticated = () => {
	return sessionStorage.getItem(userKey) != null;
}

export const logout = () => {

	function call() {
		try {
			const response = api.get("/user/logout");
			sessionStorage.removeItem(userKey);
			if (response.status == StatusCodes.METHOD_NOT_ALLOWED) {
				return;
			}
		}
		catch (e) {
			console.log(e);
		}

	}
	call();
	window.location.reload(false);
}

export function checkAuth() {
	console.log("checking auth");
	sessionStorage.removeItem(userKey);
	if (sessionStorage.getItem(userKey) == null) {

		api.get("/user/check").catch().then((response) => {
			if (response.status == (HttpStatusCode.Ok)) {
				sessionStorage.setItem(userKey, response.data);
				console.log(response.data);
				return;
			}
		}).catch((error) => {
			console.log(error);
		});
	}
}

const RequireAuth = () => {
	const location = useLocation();
	return (
		isAuthenticated()
			? <Outlet />
			: <Navigate to="/login" state={{ from: location }} replace />
	);

}

export default RequireAuth;
