import { combineReducers } from "redux";
import contacts from "./contacts/contactsReducer";
import filter from "./filter/filterRedecer";
import loader from "./loader/loaderReducer";
import error from "./error/errorReducer";
import user from "./user/userReducer";
import token from "./tokenSlece";

const rootReducer = combineReducers({
	contacts,
	filter,
	loader,
	error,
	user,
	token,
});

export default rootReducer;
