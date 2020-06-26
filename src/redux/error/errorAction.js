import {
	POST_CONTACT_ERROR,
	POST_CONTACT_ERROR_RESET,
	GET_CONTACT_ERROR,
	GET_CONTACT_ERROR_RESET,
	DELETE_CONTACT_ERROR,
	DELETE_CONTACT_ERROR_RESET,
} from "../types";

export const postSetError = (error) => ({
	type: POST_CONTACT_ERROR,
	payload: error,
});

export const postResetError = () => ({
	type: POST_CONTACT_ERROR_RESET,
});

export const getSetError = (error) => ({
	type: GET_CONTACT_ERROR,
	payload: error,
});

export const getResetError = () => ({
	type: GET_CONTACT_ERROR_RESET,
});

export const deleteSetError = (error) => ({
	type: DELETE_CONTACT_ERROR,
	payload: error,
});

export const deleteResetError = () => ({
	type: DELETE_CONTACT_ERROR_RESET,
});
