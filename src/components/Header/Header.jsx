import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../common/Logo/Logo";

import styles from "./Header.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";
import { useSelector } from "react-redux";

import { isAuth, userSelector } from "../../redux/user/selectors";
import { setUser } from "../../redux/user/userAction";
import Menu from "../Menu/Menu";
import { token } from "../../redux/tokenSlece";

const Header = () => {
	const isAuthUser = useSelector((state) => isAuth(state));
	const user = useSelector((state) => userSelector(state));
	const [userMenu, setUserMenu] = useState(false);
	const [logo, setLogo] = useState(false);

	useEffect(() => {
		setLogo(true);
	}, [logo]);

	useEffect(() => {
		return () => {
			setLogo(false);
		};
	}, [logo]);

	const userMenuTogle = () => {
		setUserMenu(!userMenu);
	};

	return (
		<>
			<header className={styles.Header}>
				<TransitionWrapper action={logo} time={500} clases="logo">
					<Link to="/" className={styles.Logo}>
						<Logo />
					</Link>
				</TransitionWrapper>

				{isAuthUser ? (
					<>
						<div onClick={userMenuTogle} className={styles["user-menu"]}>
							<img
								className={styles["header__user-icon"]}
								src={user.photoURL}
								alt="Avatar"
							/>
							<h3>{user.displayName}</h3>
						</div>
						<TransitionWrapper action={userMenu} time={250} clases="menu">
							<Menu menuTogle={userMenuTogle} />
						</TransitionWrapper>
					</>
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
