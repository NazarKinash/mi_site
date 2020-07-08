import React from "react";
import styles from "./HomePage.module.css";
import Sitebar from "../../components/Sitebar/Sitebar";
import { useEffect } from "react";
import Load from "../../common/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderSelector } from "../../redux/loader/loaderSelectors";
import { LoaderOff } from "../../redux/loader/loaderAction";

const HomePage = () => {
	const loader = useSelector((state) => loaderSelector(state));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(LoaderOff());
	}, [dispatch]);

	return (
		<>
			{loader ? (
				<Load />
			) : (
				<div className={styles["home-wrapper"]}>
					<Sitebar />
				</div>
			)}
		</>
	);
};

export default HomePage;
