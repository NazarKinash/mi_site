export const validate = (values) => {
	const errors = {};

	if (!values.userName) {
		errors.userName = "Required";
	} else if (values.userName.length < 4) {
		errors.userName = "Name must have 4 symbols or more";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email";
	}

	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length < 7) {
		errors.password = "Number should have at lest 7 simbols !";
	}

	return errors;
};
