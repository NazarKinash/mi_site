import React from "react";
import { useFormik } from "formik";
import { validate } from "./validate";
import { useDispatch } from "react-redux";

import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import formStyles from "../Form.module.css";
import { loginUser } from "../../../redux/operation/operation";

const LoginForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		onSubmit: (values) => {
			dispatch(loginUser(values));
		},
		validate,
	});

	return (
		<>
			<form
				className={formStyles["form"]}
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="email"
					name="email"
					placeholder="user@email.com"
					labelText="Login"
				/>
				{formik.touched.email && formik.errors.enail ? (
					<div className={formStyles.Notification}>{formik.errors.enail}</div>
				) : null}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					type="password"
					name="password"
					placeholder="Your password."
					labelText="Password"
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className={formStyles.Notification}>
						{formik.errors.password}
					</div>
				) : null}
				<Button type="submit" title="Log in" />
			</form>
		</>
	);
};

export default LoginForm;
