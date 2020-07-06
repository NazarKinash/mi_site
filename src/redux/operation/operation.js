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
import { setToken } from "../tokenSlece";
import {
	addTodo,
	getTodo,
	removeTodo,
	updateTodo,
} from "../todoList/toDoSlice";

export const registerUser = (userInfo) => async (dispatch) => {
	const { email, password, displayName, photoURL } = userInfo;
	try {
		const resalt = {
			...(await auth.createUserWithEmailAndPassword(email, password)),
			...(await auth.currentUser.updateProfile({
				displayName,
				email,
				photoURL,
			})),
		};
		console.log(resalt);
		const authUser = {
			displayName: resalt.user.displayName,
			email: resalt.user.email,
			photoURL: resalt.user.photoURL,
		};
		dispatch(setUser(authUser));
		dispatch(setToken(resalt.user.refreshToken));
	} catch (error) {
		console.log(error);
	}
};

export const loginUser = (user) => async (dispatch) => {
	const { email, password } = user;
	try {
		const resalt = await auth.signInWithEmailAndPassword(email, password);
		const authUser = {
			displayName: resalt.user.displayName,
			email: resalt.user.email,
			photoURL: resalt.user.photoURL,
		};
		dispatch(setUser(authUser));
		dispatch(setToken(resalt.user.refreshToken));
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

export const asyncAddTodo = (dbName, data) => async (dispatch) => {
	// dispatch(addContactLoaderOn());

	try {
		const resalt = await db.collection(dbName).add(data);
		const item = { ...data, id: resalt.id };
		dispatch(addTodo(item));
	} catch (error) {
		dispatch(postSetError(`${error.message} - not added`));
	} finally {
		// dispatch(addContactLoaderOff());
	}
};

export const asyncGetTodo = (dbName) => async (dispactch) => {
	// dispactch(getContactsLoaderOn());
	try {
		const resalt = await db.collection(dbName).get();
		const resaltData = resalt.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		dispactch(getTodo(resaltData));
	} catch (error) {
		dispactch(getSetError(error.message));
	} finally {
		// dispactch(getContactsLoaderOff());
	}
};

export const asyncRemoveTodo = (dbName, id) => async (dispactch) => {
	// dispactch(deleteContactsLoaderOn());
	try {
		await db.collection(dbName).doc(id).delete();
		dispactch(removeTodo(id));
	} catch (error) {
		dispactch(deleteSetError(`${error.message} - not deleted!`));
	} finally {
		// dispactch(deleteContactsLoaderOff());
	}
};

export const asyncUpdateTodo = (dbName, id) => async (dispactch) => {
	try {
		await db.collection(dbName).doc(id).update({ status: true });
		dispactch(updateTodo(id));
	} catch (error) {
		dispactch(deleteSetError(`${error.message}`));
	}
};
