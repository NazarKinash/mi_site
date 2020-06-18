import { ADD_CONTACT, REMOVE_CONTACT, GET_CONTACTS } from "../types";

export const addContact = (data) => ({
	type: ADD_CONTACT,
	payload: data,
});

export const removeContact = (id) => ({
	type: REMOVE_CONTACT,
	payload: id,
});

export const getContacts = (contacts) => ({
	type: GET_CONTACTS,
	payload: contacts,
});
