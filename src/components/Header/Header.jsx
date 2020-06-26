import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../common/Logo/Logo";

import styles from "./Header.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "../../redux/user/selectors";
import defaultAvatar from "../../img/default_avatar.jpg";
import { auth } from "../../configFB";
import { setUser } from "../../redux/user/userAction";

const Header = () => {
	const dispatch = useDispatch();
	const isAuthUser = useSelector((state) => isAuth(state));

	const [logo, setLogo] = useState(false);

	useEffect(() => {
		setLogo(true);
	}, [logo]);

	useEffect(() => {
		return () => {
			setLogo(false);
		};
	}, [logo]);

	const userSignOut = () => {
		auth.signOut();
		dispatch(setUser(null));
		console.log("out");
	};

	return (
		<>
			<header className={styles.Header}>
				<TransitionWrapper action={logo} time={500} clases="logo">
					<Link to="/" className={styles.Logo}>
						<Logo />
					</Link>
				</TransitionWrapper>

				<Link to="/profile">
					<img src={defaultAvatar} alt="Avatar" width={50} height={50} />
				</Link>

				{isAuthUser ? (
					<nav className={styles.Nav}>
						<NavLink to="/login" className={styles.NavLink}>
							<span onClick={userSignOut}>Sign Out</span>
						</NavLink>
					</nav>
				) : (
					<nav className={styles.Nav}>
						<NavLink to="/login" className={styles.NavLink}>
							Login
						</NavLink>
						<NavLink to="/signUp" className={styles.NavLink}>
							Sign Up
						</NavLink>
					</nav>
				)}
			</header>
		</>
	);
};

export default Header;
