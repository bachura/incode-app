import axios from '../axios';

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR'

export const getCategory = () => {       
  return (dispatch) => {

  dispatch({
    type: GET_CATEGORY_REQUEST
  });

  axios.get('/category')
    .then((response) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: response.data.categories
      })
    }) 
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY_ERROR,
        payload: 'There is not a single category'
      })
    })         
  }
}



