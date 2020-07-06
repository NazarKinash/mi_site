import { combineReducers } from "redux";
import contacts from "./contacts/contactsReducer";
import filter from "./filter/filterRedecer";
import loader from "./loader/loaderReducer";
import error from "./error/errorReducer";
import user from "./user/userReducer";
import token from "./tokenSlece";
import todoList from "./todoList/toDoSlice";
import todoFilter from "./filterTodoSlice/filterTodoSlice";

const rootReducer = combineReducers({
	contacts,
	filter,
	loader,
	error,
	user,
	token,
	todoList,
	todoFilter,
});

export default rootReducer;
