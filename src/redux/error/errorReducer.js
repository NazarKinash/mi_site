import {
	POST_CONTACT_ERROR,
	POST_CONTACT_ERROR_RESET,
	GET_CONTACT_ERROR,
	GET_CONTACT_ERROR_RESET,
	DELETE_CONTACT_ERROR,
	DELETE_CONTACT_ERROR_RESET,
} from "../types";
const initialState = "";

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case POST_CONTACT_ERROR:
		case GET_CONTACT_ERROR:
		case DELETE_CONTACT_ERROR:
			return payload;
		case POST_CONTACT_ERROR_RESET:
		case GET_CONTACT_ERROR_RESET:
		case DELETE_CONTACT_ERROR_RESET:
			return "";
		default:
			return state;
	}
};
