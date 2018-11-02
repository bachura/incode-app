import axios from '../axios';
// import { getPost } from './post';
import appHistory from '../history';

export const GET_CREATE_POST_REQUEST = 'GET_CREATE_POST_REQUEST'
export const GET_CREATE_POST_SUCCESS = 'GET_CREATE_POST_SUCCESS'
export const GET_CREATE_POST_ERROR = 'GET_CREATE_POST_ERROR'

export const createPost = (createPostData) => {
  return (dispatch) => {

    dispatch({
      type: GET_CREATE_POST_REQUEST
    });

    axios.post('/post', createPostData)
      .then((response) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        dispatch({
          type: GET_CREATE_POST_SUCCESS
        })
        appHistory.push('/home')
        // dispatch(getPost())
      })
      .catch((error) => {
        dispatch({
          type: GET_CREATE_POST_ERROR,
          payload: 'Can not create category'
        })
      })
  }
}
