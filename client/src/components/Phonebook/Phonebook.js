import React from "react";
import { useSelector } from "react-redux";

import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import { contactsSelector } from "../../redux/contacts/contactsSelectors";

import styles from "./Phonebook.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const Phonebook = ({ inputHandler }) => {
	const contactsList = useSelector((state) => contactsSelector(state));

	return (
		<div className={styles.Phonebook}>
			{/* <TransitionWrapper action={logo} time={500} clases="logo">
				<h1 className={styles["logo"]}>Phonebook</h1>
			</TransitionWrapper> */}
			{/* <CreateForm inputHandler={inputHandler} /> */}
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
