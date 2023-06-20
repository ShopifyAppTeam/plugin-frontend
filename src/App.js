import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiousConfig.js';

import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFound from './components/notfound/NotFound';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Orders from './components/orders/Orders';
import Settings from './components/settings/Settings';
import RequireAuth from './components/requireAuth/RequireAuth';
import useAuth from './hooks/useAuth';

function App() {
	const { setAuth } = useAuth();
	useEffect(() => {
		const userKey = "plugin-user";
		async function fetchData() {
			if (localStorage.getItem(userKey) == null) {
				try {
					const response = await api.get("/user/check");
					const data = response.data;
					// if response.status == OK ....
					alert("/");
					localStorage.setItem(userKey, response.data);
					console.log(response.data);

				} catch (exc) {
					console.log(exc);
				}
			}
			setAuth(localStorage.getItem(userKey));
		};
		fetchData();

	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<SignIn />}></Route>
					<Route path="/register" element={<SignUp />}></Route>


					<Route element={<RequireAuth />}>
						<Route path="/orders" element={<Orders />} />
					</Route>

					<Route element={<RequireAuth />}>
						<Route path="/settings" element={<Settings />} /></Route>
					<Route path="*" element={<NotFound />}></Route>

				</Route>
			</Routes>

		</div >
	);


}

export default App;
