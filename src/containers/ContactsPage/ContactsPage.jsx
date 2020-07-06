import React, { useState } from "react";
import styles from "./ContactsPage.module.css";
import { useFormik } from "formik";

const ContactsPage = () => {
	const [img, setImg] = useState([]);
	const formik = useFormik({
		initialValues: {
			file: null,
		},
		onSubmit: (values) => {
			if (values.file) {
				setImg(values.file);
			}
		},
	});
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className={styles.Wrapper}>
					<input
						type="file"
						name="file"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<input type="submit" />
			</form>
			{!!img.length && <img src={img} alt="" />}
		</>
	);
};

export default ContactsPage;
