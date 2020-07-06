const { createSlice } = require("@reduxjs/toolkit");

const toDoSlice = createSlice({
	name: "todoList",
	initialState: [],
	reducers: {
		getTodo: (state, { payload }) => [...payload],
		addTodo: (state, { payload }) => [payload, ...state],
		removeTodo: (state, { payload }) =>
			state.filter((todo) => todo.id !== payload),
		updateTodo: (state, { payload }) => {
			return state.forEach((el) => {
				if (el.id === payload) {
					el.status = true;
				}
			});
		},
	},
});

export const { getTodo, addTodo, removeTodo, updateTodo } = toDoSlice.actions;
export const todoList = (state) => state.todoList;
export default toDoSlice.reducer;
