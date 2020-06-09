import React from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Phonebook />
			<RegisterForm />
			<LoginForm />
		</div>
	);
};

export default App;
