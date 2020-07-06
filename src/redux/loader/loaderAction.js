import {
	CONTACT_REQUEST_START,
	CONTACT_REQUEST_SUCSSES,
	GET_CONTACTS_START,
	GET_CONTACTS_SUCSSES,
	DELETE_CONTACTS_START,
	DELETE_CONTACTS_SUCSSES,
	START,
	SUCSSES,
} from "../types";

export const addContactLoaderOn = () => ({
	type: CONTACT_REQUEST_START,
});

export const addContactLoaderOff = () => ({
	type: CONTACT_REQUEST_SUCSSES,
});

export const getContactsLoaderOn = () => ({
	type: GET_CONTACTS_START,
});

export const getContactsLoaderOff = () => ({
	type: GET_CONTACTS_SUCSSES,
});

export const deleteContactsLoaderOn = () => ({
	type: DELETE_CONTACTS_START,
});

export const deleteContactsLoaderOff = () => ({
	type: DELETE_CONTACTS_SUCSSES,
});

export const LoaderOn = () => ({
	type: START,
});

export const LoaderOff = () => ({
	type: SUCSSES,
});
