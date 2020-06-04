import axios from "axios";
import { ADD_CONTACT, REMOVE_CONTACT, GET_CONTACTS } from "../types";
import {
	addContactLoaderOn,
	addContactLoaderOff,
	getContactsLoaderOn,
	getContactsLoaderOff,
	deleteContactsLoaderOn,
	deleteContactsLoaderOff,
} from "../loader/loaderAction";
import {
	postSetError,
	postResetError,
	getResetError,
	getSetError,
	deleteResetError,
	deleteSetError,
} from "../error/errorAction";

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

const options = { headers: { "Content-Type": "application/json" } };

export const asyncAddContact = ({ name, number }) => async (dispactch) => {
	dispactch(addContactLoaderOn());
	const contact = { name, number };
	try {
		dispactch(postResetError());
		const resalt = await axios.post(
			"http://localhost:5001/contacts",
			contact,
			options
		);
		dispactch(addContact(resalt.data));
	} catch (error) {
		dispactch(postSetError(`${error.message} - not added`));
	} finally {
		dispactch(addContactLoaderOff());
	}
};

export const asyncgetContacts = () => async (dispactch) => {
	dispactch(getContactsLoaderOn());
	try {
		dispactch(getResetError());
		const resalt = await axios.get("http://localhost:5001/contacts");
		dispactch(getContacts(resalt.data));
	} catch (error) {
		dispactch(getSetError(error.message));
	} finally {
		dispactch(getContactsLoaderOff());
	}
};

export const asyncRemoveContact = (id) => async (dispactch) => {
	dispactch(deleteContactsLoaderOn());
	try {
		dispactch(deleteResetError());
		const resalt = await axios.delete(`http://localhost:5001/contacts/${id}`);
		Number(resalt.status) === 200 && dispactch(removeContact(id));
	} catch (error) {
		dispactch(deleteSetError(`${error.message} - not deleted!`));
	} finally {
		dispactch(deleteContactsLoaderOff());
	}
};
