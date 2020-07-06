import React from "react";
import styles from "./Loader.module.css";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Load = () => {
	return (
		<div className={styles.Wrapper}>
			<Loader type="ThreeDots" color="#03059b" height={50} width={50} />
		</div>
	);
};

export default Load;
