import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import formStyles from "../Form.module.css";

function RegisterForm({ inputHandler }) {
	const formik = useFormik({
		initialValues: {
			userName: "",
			userEmail: "",
			userPassword: "",
		},
		onSubmit: () => {},
	});

	// console.log(formik);

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
					type="text"
					name="userName"
					placeholder="User Name"
					labelText="User Name"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="email"
					name="userEmail"
					placeholder="user@email.com"
					labelText="Email"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="password"
					name="userPassword"
					placeholder="Password"
					labelText="Password"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Button type="submit" title="Register" />
			</form>
		</>
	);
}

export default RegisterForm;
