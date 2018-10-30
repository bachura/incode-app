import axios from '../axios';
import { getUser } from './root';
import appHistory from '../history'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL    = 'REGISTER_FAIL'

export const handleRegistration = (authData) => {       
    return (dispatch) => {

    dispatch({
       type: REGISTER_REQUEST
        });

        axios.post('/auth', authData)
            .then((response) => {       
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data.token
                })
                dispatch(getUser());
                appHistory.push('/home');
            }) 
            .catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: 'OOps..Something going wrong'
                })
                appHistory.push('/login');
            })         

    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL    = 'LOGIN_FAIL'
export const LOGOUT        = 'LOGOUT'

const logoutHandler = () => ({
     type: LOGOUT,
 });

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    axios.defaults.headers.common = {};
    dispatch(logoutHandler());    
}

 export const handleLogin = (authData) => {
    return (dispatch) => {

        dispatch({
            type: LOGIN_REQUEST
        });

        axios.post('/login', authData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.token
                })
                
                getUser()(dispatch);
                appHistory.push('/home');
            }) 
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: 'OOps..Something going wrong'
                })
                appHistory.push('/login');
            })         

    }
}