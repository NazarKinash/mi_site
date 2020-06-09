import React from "react";
import { useFormik } from "formik";

import formStyles from "../Form.module.css";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			login: "",
			password: "",
		},

		onSubmit: () => {},
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
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="password"
					name="password"
					placeholder="Your password."
					labelText="Password"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Button type="submit" title="Log in" />
			</form>
		</>
	);
};

export default LoginForm;
