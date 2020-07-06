import { createSlice } from "@reduxjs/toolkit";

const filterTodoSlice = createSlice({
	name: "todoFilter",
	initialState: "uncompleted",
	reducers: {
		setAll: (state, { payload }) => "all",
		setCompleted: (state, { payload }) => "complete",
		setUncompleted: (state, { payload }) => "uncompleted",
	},
});

export const { setAll, setCompleted, setUncompleted } = filterTodoSlice.actions;
export const todoFilter = (state) => state.todoFilter;
export default filterTodoSlice.reducer;
