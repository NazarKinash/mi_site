import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ title, ...props }) => {
	return (
		<button {...props} className={styles.Button}>
			{title}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default Button;
