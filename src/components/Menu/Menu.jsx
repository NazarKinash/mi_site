import React from "react";

import { Link } from "react-router-dom";
import { userSelector } from "../../redux/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../configFB";
import { setToken } from "../../redux/tokenSlece";
import { setUser } from "../../redux/user/userAction";

import styles from "./Menu.module.css";

const Menu = ({ menuTogle }) => {
	const user = useSelector((state) => userSelector(state));
	const dispatch = useDispatch();

	const userSignOut = () => {
		auth.signOut();
		dispatch(setToken(null));
		dispatch(setUser(null));
	};

	return (
		<div className={styles.Menu}>
			<Link to="/profile" onClick={menuTogle} className={styles.MenuItem}>
				<img
					className={styles["MenuItem--img"]}
					src={user.photoURL}
					alt="Avatar"
				/>
				<h3>{user.displayName}</h3>
			</Link>
			<Link to="/login" onClick={menuTogle} className={styles.MenuItem}>
				<span onClick={userSignOut}>Sign Out</span>
			</Link>
		</div>
	);
};

export default Menu;
