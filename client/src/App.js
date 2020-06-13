import React, { useEffect } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import { Switch, Route, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";
import { useSelector } from "react-redux";
import { isAuth } from "./redux/user/selectors";

const App = () => {
	const isAuthUser = useSelector((state) => isAuth(state));
	const history = useHistory();
	console.log(history);

	useEffect(() => {
		if (isAuthUser) {
			history.replace("/");
		}
	}, [isAuthUser]);

	return (
		<div className="App">
			<Header />
			<Switch>
				<PrivateRoute exact path="/" component={Phonebook} />
				<Route path="/login" component={LoginForm} />
				<Route path="/signUp" component={RegisterForm} />
			</Switch>
		</div>
	);
};

export default App;
