import React from "react";
import { useFormik } from "formik";
import { validate } from "./validate";

import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import formStyles from "../Form.module.css";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			login: "",
			password: "",
		},

		onSubmit: () => {},
		validate,
	});

	return (
		<>
			<form
				className={formStyles["contact-form"]}
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="email"
					name="login"
					placeholder="user@email.com"
					labelText="Login"
				/>
				{formik.touched.login && formik.errors.login ? (
					<div className={formStyles.Notification}>{formik.errors.login}</div>
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
