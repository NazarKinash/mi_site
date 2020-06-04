//Code
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Alert from "../../common/Alert/Alert";
//Instruments
import { asyncAddContact } from "../../redux/contacts/contactsAction";
//Styles
import formStyles from "./CreateForm.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const formInitialState = {
	name: "",
	number: "",
};

const CreateForm = () => {
	const [form, setForm] = useState(formInitialState);
	const [massage, setMassage] = useState("");

	const contactsList = useSelector((state) => state.contacts);
	const dispatch = useDispatch();

	const inputHandler = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const { name, number } = form;
		const contact = {
			name,
			number,
		};
		validator(contact);
	};

	const validator = (newContact) => {
		const resalt = contactsList.find(
			({ name }) => name.trim() === newContact.name.trim()
		);
		if (resalt) {
			setMassage(`${resalt.name} is alredy in contacts`);
			return;
		} else if (newContact.name.length < 4) {
			setMassage("Name should have at lest 4 simbols !");
			return;
		} else if (newContact.number.length < 7) {
			setMassage("Number should have at lest 7 simbols !");
			return;
		}

		setForm(formInitialState);
		setMassage("");
		dispatch(asyncAddContact(newContact));
	};

	const { name, number } = form;
	return (
		<>
			<TransitionWrapper action={!!massage} time={250} clases="alert">
				<Alert setMassage={setMassage} text={massage} />
			</TransitionWrapper>
			<form
				className={formStyles["contact-form"]}
				autoComplete="off"
				onSubmit={submitHandler}
			>
				<Input
					value={name}
					onChange={inputHandler}
					type="text"
					name="name"
					placeholder="Name"
					labelText="Name"
				/>
				<Input
					value={number}
					onChange={inputHandler}
					type="tel"
					name="number"
					placeholder="Number"
					labelText="Number"
				/>
				<Button type="submit" title="Add contact" />
			</form>
		</>
	);
};

export default CreateForm;
