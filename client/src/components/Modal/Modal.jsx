import React from "react";

import styles from "./Modal.module.css";

const Modal = ({ onClick, children }) => {
	return (
		<div onClick={onClick} className={styles.Owerlay}>
			{children}
		</div>
	);
};

export default Modal;
