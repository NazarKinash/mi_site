export const validate = (values) => {
	const errors = {};

	if (!values.login) {
		errors.login = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
		errors.login = "Invalid email";
	}

	if (!values.password) {
		errors.password = "Required";
	}
	//  else if (values.password.length < 7) {
	// 	errors.password = "Number should have at lest 7 simbols !";
	// }

	return errors;
};
