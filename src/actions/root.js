import axios from '../axios';
import appHistory from '../history';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUser = () => {
	return (dispatch) => {
		dispatch({
			type: GET_USER_REQUEST
		});

		axios.get('/user')
			.then((response) => {
				dispatch({
					type: GET_USER_SUCCESS,
					payload: response.data
				})
				appHistory.push('/home');
			})
			.catch(() => {
				dispatch({
					type: GET_USER_FAIL,
					payload: 'Oooops...'
				})
				appHistory.push('/login');
			})
	}
}
