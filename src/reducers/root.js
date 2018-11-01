import {
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAIL
} from '../actions/root';

import {
	LOGOUT
} from '../actions/auth';

const initialState = {
	user: {},
	loggedIn: false,
	loaded: false,
	loading: false
};

export function getUserReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {
				...state,
				loggedIn: false,
				loaded: false,
				loading: true
			}

		case GET_USER_SUCCESS:
			return {
				...state,
				loggedIn: true,
				loaded: true,
				loading: false,
				user: action.payload
			}
		case GET_USER_FAIL:
			return {
				...state,
				loggedIn: false,
				loaded: true,
				loading: false
			}

		case LOGOUT:
			return {
				...initialState
			}
		default: return state;
	}

}