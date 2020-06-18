import React from "react";
import defaultAvatar from "../../img/default_avatar.jpg";
import ContactList from "../../components/ContactList/ContactList";
import TransitionWrapper from "../../components/TransitionWeapper/TransitionWrapper";
import CreateForm from "../../components/Forms/CreateForm/CreateForm";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const UserProfile = () => {
	const [createFormOpen, setCreateFormOpen] = useState(false);

	const createFormTogle = (e) => {
		if (createFormOpen && e.target.nodeName !== "DIV") {
			return;
		}
		setCreateFormOpen(!createFormOpen);
	};
	return (
		<>
			<section>
				<img src={defaultAvatar} alt="" width={100} />
				<h1>user name</h1>
				<button onClick={createFormTogle}>Add Contact</button>
				<TransitionWrapper
					action={!!createFormOpen}
					time={250}
					clases="createForm"
				>
					<Modal onClick={createFormTogle}>
						<CreateForm />
					</Modal>
				</TransitionWrapper>
				<ContactList />
			</section>
		</>
	);
};

export default UserProfile;
