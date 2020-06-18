// import axios from "axios";
import { setUser } from "../user/userAction";
// import { setToken } from "../token/tokenAction";
import { auth, db } from "../../configFB";
import {
	addContact,
	getContacts,
	removeContact,
} from "../contacts/contactsAction";
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
	getSetError,
	deleteSetError,
} from "../error/errorAction";

export const registerUser = (user) => async (dispatch) => {
	const { email, password } = user;
	try {
		const resalt = await auth.createUserWithEmailAndPassword(email, password);
		const authUser = { email: resalt.user.email };
		console.log(resalt);
		dispatch(setUser(authUser));
	} catch (error) {
		console.log(error);
	}
};

export const loginUser = (user) => async (dispatch) => {
	const { email, password } = user;
	try {
		const resalt = await auth.signInWithEmailAndPassword(email, password);
		const authUser = { email: resalt.user.email };
		console.log(resalt);
		dispatch(setUser(authUser));
	} catch (error) {
		console.log(error);
	}
};

export const asyncAddContact = (dbName, data) => async (dispatch) => {
	dispatch(addContactLoaderOn());

	try {
		const resalt = await db.collection(dbName).add(data);
		const item = { ...data, id: resalt.id };
		dispatch(addContact(item));
	} catch (error) {
		dispatch(postSetError(`${error.message} - not added`));
	} finally {
		dispatch(addContactLoaderOff());
	}
};

export const asyncGetContacts = (dbName) => async (dispactch) => {
	dispactch(getContactsLoaderOn());
	try {
		const resalt = await db.collection(dbName).get();
		const resaltData = resalt.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		dispactch(getContacts(resaltData));
	} catch (error) {
		dispactch(getSetError(error.message));
	} finally {
		dispactch(getContactsLoaderOff());
	}
};

export const asyncRemoveContact = (dbName, id) => async (dispactch) => {
	dispactch(deleteContactsLoaderOn());
	try {
		await db.collection(dbName).doc(id).delete();
		dispactch(removeContact(id));
	} catch (error) {
		dispactch(deleteSetError(`${error.message} - not deleted!`));
	} finally {
		dispactch(deleteContactsLoaderOff());
	}
};

// const options = {
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// };

// export const signUp = (formData) => async (dispatch) => {
// 	const resalt = await axios.post(
// 		"http://localhost:4000/register",
// 		formData,
// 		options
// 	);
// 	try {
// 		const { id, email, token } = resalt.data.user;
// 		dispatch(setUser({ id, email }));
// 		dispatch(setToken(token));
// 		console.log(resalt);
// 	} catch (r) {
// 		console.log(resalt.data.error);
// 	}
// };
