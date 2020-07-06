import React from "react";
import { useDispatch } from "react-redux";

import "./Todo.css";
import { updateTodo } from "../../redux/todoList/toDoSlice";
import {
	asyncRemoveTodo,
	asyncUpdateTodo,
} from "../../redux/operation/operation";
const Todo = ({ status, title, description, priority, id, index }) => {
	const dispatch = useDispatch();

	const deleteItem = () => {
		dispatch(asyncRemoveTodo("todo", id));
	};

	const updateItem = () => {
		console.log(id);
		// dispatch(updateTodo(id));
		dispatch(asyncUpdateTodo("todo", id));
	};

	return (
		<div className="Todo">
			<div onClick={updateItem}>
				<p className={`Todo__name ${status && "done"}`}>{title}</p>
				<p className={`Todo__priority ${status && "done"}`}>
					{priority} priority
				</p>
				<p className={`Todo__description ${status && "done"}`}>{description}</p>
			</div>
			<span className="Todo__remove" onClick={deleteItem}>
				<i className="fas fa-trash" />
			</span>
		</div>
	);
};

export default Todo;
