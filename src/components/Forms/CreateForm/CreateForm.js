//Code
import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

//Components
import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";
//Instruments
import { validate } from "./validate";
import { asyncAddContact } from "../../../redux/operation/operation";
//Styles
import formStyles from "../Form.module.css";

const CreateForm = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			name: "",
			number: "",
		},
		onSubmit: (values) => {
			dispatch(asyncAddContact("contacts", values));
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
					onBlur={formik.handleBlur}
					type="text"
					name="name"
					placeholder="Name"
					labelText="Name"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Input
					value={formik.values.number}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					type="tel"
					name="number"
					placeholder="Number"
					labelText="Number"
				/>
				{formik.touched.number && formik.errors.number ? (
					<div className={formStyles.Notification}>{formik.errors.number}</div>
				) : null}
				<Button type="submit" title="Add contact" />
			</form>
		</>
	);
};

export default CreateForm;
