import axios from "axios";
import { setUser } from "../user/userAction";
import { setToken } from "../token/tokenAction";
const options = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const signUp = (formData) => async (dispatch, getState) => {
	options.headers.autorization = getState().token;
	const resalt = await axios.post(
		"http://localhost:4000/register",
		formData,
		options
	);
	try {
		const { id, email, token } = resalt.data.user;
		dispatch(setUser({ id, email }));
		dispatch(setToken(token));
		console.log(resalt);
	} catch (r) {
		console.log(resalt.data.error);
	}
};
