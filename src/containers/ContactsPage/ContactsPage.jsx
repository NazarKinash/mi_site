import React from "react";
import Phonebook from "../../components/Phonebook/Phonebook";
import styles from "./ContactsPage.module.css";
import Button from "../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	isCreateForm,
	setIsCreateForm,
} from "../../redux/createForm/createFormSlice";
import TransitionWrapper from "../../components/TransitionWeapper/TransitionWrapper";
import Modal from "../../components/Modal/Modal";
import CreateForm from "../../components/Forms/CreateForm/CreateForm";

const ContactsPage = () => {
	const dispatch = useDispatch();
	const isOpenCreateForm = useSelector((state) => isCreateForm(state));

	const createContactOpen = () => {
		dispatch(setIsCreateForm());
	};

	return (
		<div className={styles.Wrapper}>
			<Button title="Add new contact." onClick={createContactOpen} />
			<Phonebook />
			<TransitionWrapper
				action={isOpenCreateForm}
				time={250}
				clases="createForm"
			>
				<Modal>
					<CreateForm />
				</Modal>
			</TransitionWrapper>
		</div>
	);
};

export default ContactsPage;
