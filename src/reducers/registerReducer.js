import * as types from "../actions";

const registerReducer = (state = [], action) => {
	let response = action.payload;

	switch (action.type) {
		case types.REGISTER_USER_SUCCESS:
			return { ...state, response };
		case types.REGISTER_USER_ERROR:
			return { ...state, response };
		default:
			return state;
	}
};
export default registerReducer;
