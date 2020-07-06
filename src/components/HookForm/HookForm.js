import React from "react";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../../../redux/actions/todo";
import "./HookForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoList/toDoSlice";
import { asyncAddTodo } from "../../redux/operation/operation";
const HookForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
			priority: "",
			agree: false,
		},
		onSubmit: (values) => {
			if (!values.agree) {
				return;
			}
			dispatch(asyncAddTodo("todo", values));
			formik.resetForm();
		},
	});

	return (
		<form
			className="NewTodoForm"
			autoComplete="off"
			onSubmit={formik.handleSubmit}
		>
			<input
				value={formik.values.title}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="NewTodoForm__name"
				type="text"
				name="title"
				placeholder="New Todo"
				autoFocus
			/>
			<input
				value={formik.values.description}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className="NewTodoForm__name"
				type="text"
				name="description"
				placeholder="Description"
				autoFocus
			/>
			<select
				name="priority"
				className="NewTodoForm__select"
				value={formik.values.priority}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			>
				<option value="Priority" disabled hidden>
					Priority
				</option>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>
			<label htmlFor="agree" className="confirm">
				<input
					type="checkbox"
					id="agree"
					name="agree"
					checked={formik.values.agree}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				Agree with our policy
			</label>
			<button className="NewTodoForm__submit" type="submit">
				Add Todo
			</button>
		</form>
	);
};

export default HookForm;
