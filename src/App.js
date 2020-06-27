import React, { useEffect } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./containers/UserProfile/UserProfile";
import PrivatRoute from "./components/PrivatRoute/PrivateRoute";

import { auth } from "./configFB";
import { setUser } from "./redux/user/userAction";
import { isAuth } from "./redux/user/selectors";
import { token } from "./redux/tokenSlece";
import { hydrate } from "react-dom";

const App = () => {
	const isAuthUser = useSelector((state) => isAuth(state));
	const isTocken = useSelector((state) => token(state));
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (!!isTocken) {
			auth.onAuthStateChanged((user) => dispatch(setUser(user)));
			// dispatch(setUser(auth.currentUser));
		}
	}, [dispatch, history, isTocken]);

	useEffect(() => {
		if (isAuthUser) {
			history.replace("/");
		}
	}, [isAuthUser, history]);

	return (
		<div className="App">
			<Header />
			<Switch>
				<PrivatRoute exact path="/" component={Phonebook} />
				<Route path="/login" component={LoginForm} />
				<Route path="/signUp" component={RegisterForm} />
				<PrivatRoute path="/profile" component={UserProfile} />
			</Switch>
		</div>
	);
};

export default App;
