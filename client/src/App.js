import React, { useEffect } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserProfile from "./containers/UserProfile/UserProfile";

import { auth } from "./configFB";
import { setUser } from "./redux/user/userAction";

const App = () => {
	console.log(auth.currentUser);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				history.replace("/");
				dispatch(setUser(user.email));
			} else {
				history.replace("/login");
				dispatch(setUser(user));
			}
		});
	}, [dispatch, history]);

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Phonebook} />
				<Route path="/login" component={LoginForm} />
				<Route path="/signUp" component={RegisterForm} />
				<Route path="/profile" component={UserProfile} />
			</Switch>
		</div>
	);
};

export default App;
