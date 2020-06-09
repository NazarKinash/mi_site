import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CreateForm from "../Forms/CreateForm/CreateForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import { asyncgetContacts } from "../../redux/contacts/contactsAction";
import { contactsSelector } from "../../redux/contacts/contactsSelectors";

import styles from "./Phonebook.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const Phonebook = ({ inputHandler }) => {
	const contactsList = useSelector((state) => contactsSelector(state));
	const dispatch = useDispatch();
	// const [logo, setLogo] = useState(false);

	// useEffect(() => {
	// 	setLogo(true);
	// }, [logo]);

	// useEffect(() => {
	// 	return () => {
	// 		setLogo(false);
	// 	};
	// }, [logo]);

	useEffect(() => {
		dispatch(asyncgetContacts());
	}, [dispatch]);

	return (
		<div className={styles.Phonebook}>
			{/* <TransitionWrapper action={logo} time={500} clases="logo">
				<h1 className={styles["logo"]}>Phonebook</h1>
			</TransitionWrapper> */}
			<CreateForm inputHandler={inputHandler} />
			<TransitionWrapper
				action={contactsList.length >= 2}
				clases="filter"
				time={250}
			>
				<Filter />
			</TransitionWrapper>
			<ContactList />
		</div>
	);
};

export default Phonebook;
