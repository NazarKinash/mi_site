import React from "react";
import styles from "./ToDoPage.module.css";
import ToDoForm from "../../components/Forms/ToDoForm/ToDoForm";
import TodoList from "../../components/TodoList/TodoList";

const ToDoPage = () => {
	return (
		<div className={styles.ToDoWrapper}>
			<TodoList />
		</div>
	);
};

export default ToDoPage;
