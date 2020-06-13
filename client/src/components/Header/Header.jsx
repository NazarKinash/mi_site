import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../common/Logo/Logo";

import styles from "./Header.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/user/selectors";

const Header = () => {
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

	return (
		<>
			<header className={styles.Header}>
				<TransitionWrapper action={logo} time={500} clases="logo">
					<Link to="/" className={styles.Logo}>
						<Logo />
					</Link>
				</TransitionWrapper>
				{isAuthUser ? (
					<nav className={styles.Nav}>
						<NavLink to="/login" className={styles.NavLink}>
							Sign Out
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
