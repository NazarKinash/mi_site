import { createSlice } from "@reduxjs/toolkit";

const createForm = createSlice({
	name: "isCreateForm",
	initialState: false,
	reducers: {
		setIsCreateForm: (state, action) => !state,
	},
});

export const { setIsCreateForm } = createForm.actions;
export const isCreateForm = (state) => state.isCreateForm;
export default createForm.reducer;
