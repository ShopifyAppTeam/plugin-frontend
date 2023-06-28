import './App.css';
import { useLayoutEffect, useState } from 'react';

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

import { checkAuth } from './components/requireAuth/RequireAuth';
import RedirectHandler from './components/settings/RedirectHandler';

function App() {
	useLayoutEffect(() => {
		checkAuth();
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<SignIn />}></Route>
					<Route path="/register" element={<SignUp />}></Route>
					<Route path="/redirect_handler" element={<RedirectHandler />}></Route>

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
