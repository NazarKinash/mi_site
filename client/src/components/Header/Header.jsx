import React, { useEffect, useState } from "react";
import Logo from "../../common/Logo/Logo";

import styles from "./Header.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const Header = () => {
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
					<Logo />
				</TransitionWrapper>
			</header>
		</>
	);
};

export default Header;
