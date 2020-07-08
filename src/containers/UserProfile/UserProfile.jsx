import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import TransitionWrapper from "../../components/TransitionWeapper/TransitionWrapper";
import CreateForm from "../../components/Forms/CreateForm/CreateForm";
import Modal from "../../components/Modal/Modal";

import styles from "./UserProfile.module.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/selectors";

const UserProfile = () => {
	// const [createFormOpen, setCreateFormOpen] = useState(false);
	const user = useSelector((state) => userSelector(state));

	// const createFormTogle = (e) => {
	// 	console.log(e);
	// 	if (
	// 		(createFormOpen && e.target.nodeName === "DIV") ||
	// 		e.nativeEvent === "SubmitEvent"
	// 	) {
	// 		setCreateFormOpen(!createFormOpen);
	// 		return;
	// 	}
	// 	setCreateFormOpen(!createFormOpen);
	// };
	const { displayName, photoURL } = user;

	return (
		<>
			<section>
				<div className={styles["wrapper"]}></div>
				<div className={styles["user-info"]}>
					<h1>{displayName}</h1>
					<img className={styles["user-avatar"]} src={photoURL} alt="" />
				</div>

				<button>Add Contact</button>
				<TransitionWrapper action={false} time={250} clases="createForm">
					<Modal>
						<CreateForm />
					</Modal>
				</TransitionWrapper>
				<ContactList />
			</section>
		</>
	);
};

export default UserProfile;
