import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
// import { auth } from "../../../configFB";

import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import { validate } from "./validate";
import { registerUser } from "../../../redux/operation/operation";

import formStyles from "../Form.module.css";
// import { setUser } from "../../../redux/user/userAction";

function RegisterForm({ inputHandler }) {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			// userName: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(values);
			sub(values);
		},
		validate,
	});

	const sub = (val) => {
		dispatch(registerUser(val));
	};

	return (
		<>
			<form
				className={formStyles["form"]}
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				{/*	<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					type="text"
					name="userName"
					placeholder="User Name"
					labelText="User Name"
				/>
				{formik.touched.userName && formik.errors.userName ? (
					<div className={formStyles.Notification}>
						{formik.errors.userName}
					</div>
				) : null} */}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					type="email"
					name="email"
					placeholder="user@email.com"
					labelText="Email"
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className={formStyles.Notification}>{formik.errors.email}</div>
				) : null}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					type="password"
					name="password"
					placeholder="Password"
					labelText="Password"
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className={formStyles.Notification}>
						{formik.errors.password}
					</div>
				) : null}
				<Button type="submit" title="Register" />
			</form>
		</>
	);
}

export default RegisterForm;
