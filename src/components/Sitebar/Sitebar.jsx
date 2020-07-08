import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sitebar.module.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/selectors";
import contactIcon from "../../img/Contacts-icon.png";
import ToDoIcon from "../../img/To-Do_icon.png";
import messengerIcon from "../../img/messenger.png";

const Sitebar = () => {
	const user = useSelector((state) => userSelector(state));

	return (
		<>
			<aside className={styles.Sitebar}>
				<Link to="/profile" className={styles.SitebarItem}>
					<img
						src={user.photoURL}
						alt=""
						className={styles["SitebarItem--icon"]}
					/>
					<h3>{user.displayName}</h3>
				</Link>
				<Link to="/contacts" className={styles.SitebarItem}>
					<img
						src={contactIcon}
						alt="Contacts"
						className={styles["SitebarItem--icon"]}
					/>
					<h3>contacts</h3>
				</Link>
				<Link to="/todolist" className={styles.SitebarItem}>
					<img src={ToDoIcon} alt="" className={styles["SitebarItem--icon"]} />
					<h3>My to do list</h3>
				</Link>
				<Link to="/messenger" className={styles.SitebarItem}>
					<img
						src={messengerIcon}
						alt=""
						className={styles["SitebarItem--icon"]}
					/>
					<h3>Messenger</h3>
				</Link>
			</aside>
		</>
	);
};

export default Sitebar;
