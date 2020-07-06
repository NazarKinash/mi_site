import React from "react";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo/Todo";
import {
	setAll,
	setCompleted,
	setUncompleted,
} from "../../redux/filterTodoSlice/filterTodoSlice";
import { todoFilterSelector } from "../../redux/filterTodoSlice/todoFileterSelector";
import { useEffect } from "react";
import { asyncGetTodo } from "../../redux/operation/operation";

const TodoList = () => {
	const dispatch = useDispatch();

	const todoList = useSelector((state) => todoFilterSelector(state));

	useEffect(() => {
		dispatch(asyncGetTodo("todo"));
	}, [dispatch]);
	return (
		<div className="TodoList">
			<h1 className="TodoList__title">Todo List</h1>

			<HookForm />
			<div className="filters">
				<button
					className="NewTodoForm__submit"
					onClick={() => dispatch(setAll())}
				>
					All
				</button>
				<button
					className="NewTodoForm__submit"
					onClick={() => dispatch(setCompleted())}
				>
					Completed
				</button>
				<button
					className="NewTodoForm__submit"
					onClick={() => dispatch(setUncompleted())}
				>
					Uncompleted
				</button>
			</div>
			<ul className="TodoList__todos">
				{todoList.length ? (
					todoList.map((todo, index) => (
						<li key={todo.id}>
							<Todo {...todo} index={index} />
						</li>
					))
				) : (
					<li>No tasks</li>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
