import axios from '../axios';

export const GET_CREATE_CATEGORY_REQUEST = 'GET_CREATE_CATEGORY_REQUEST'
export const GET_CREATE_CATEGORY_SUCCESS = 'GET_CREATE_CATEGORY_SUCCESS'
export const GET_CREATE_CATEGORY_ERROR = 'GET_CREATE_CATEGORY_ERROR'

export const getCreateCategory = (createCategoryData) => {       
  return (dispatch) => {

  dispatch({
    type: GET_CREATE_CATEGORY_REQUEST
  });

  axios.post('/category', createCategoryData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      dispatch({
        type: GET_CREATE_CATEGORY_SUCCESS,
        payload: response.data.token
      })
    }) 
    .catch((error) => {
      dispatch({
        type: GET_CREATE_CATEGORY_ERROR,
        payload: 'Can not create category'
      })
    })         
  }
}



