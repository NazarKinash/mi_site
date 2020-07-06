import { createSelector } from "reselect";
import { todoList } from "../todoList/toDoSlice";
import { todoFilter } from "./filterTodoSlice";

export const todoFilterSelector = createSelector(
	[todoList, todoFilter],
	(arr, filter) => {
		switch (filter) {
			case "all":
				return arr;
			case "complete":
				return arr.filter((el) => el.status);
			case "uncompleted":
				return arr.filter((el) => !el.status);
			default:
				break;
		}
	}
);
