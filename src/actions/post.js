import axios from '../axios';

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_ERROR = 'GET_POST_ERROR'

export const GET_POST_BY_CATEGORY_REQUEST = 'GET_POST_BY_CATEGORY_REQUEST'
export const GET_POST_BY_CATEGORY_SUCCESS = 'GET_POST_BY_CATEGORY_SUCCESS'
export const GET_POST_BY_CATEGORY_ERROR = 'GET_POST_BY_CATEGORY_ERROR'

export const GET_POST_BY_AUTHOR_REQUEST = 'GET_POST_BY_AUTHOR_REQUEST'
export const GET_POST_BY_AUTHOR_SUCCESS = 'GET_POST_BY_AUTHOR_SUCCESS'
export const GET_POST_BY_AUTHOR_ERROR = 'GET_POST_BY_AUTHOR_ERROR'

export const getPost = () => {       
  return (dispatch) => {

  dispatch({
    type: GET_POST_REQUEST
  });

  axios.get('/post')
    .then((response) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

      dispatch({
        type: GET_POST_SUCCESS,
        payload: response.data.data
      })
    }) 
    .catch((error) => {
      dispatch({
        type: GET_POST_ERROR,
        payload: 'There is not a single post'
      })
    })         
  }
}

export const getCategoryByTitle = (title) => {
  return (dispatch) => {

  dispatch({
    type: GET_POST_BY_CATEGORY_REQUEST
  });

  axios.get(`/post/category/${title}`)
    .then((response) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      dispatch({
        type: GET_POST_BY_CATEGORY_SUCCESS,
        payload: response.data.posts
      })
    }) 
    .catch((error) => {
      dispatch({
        type: GET_POST_BY_CATEGORY_ERROR,
        payload: 'There is not a single category'
      })
    })         
  }
}


export const getPostByAuthor = (author_id) => {
  return (dispatch) => {

  dispatch({
    type: GET_POST_BY_AUTHOR_REQUEST
  });

  axios.get(`/post/category/${author_id}`)
    .then((response) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      dispatch({
        type: GET_POST_BY_AUTHOR_SUCCESS,
        payload: response.data.posts
      })
    }) 
    .catch((error) => {
      dispatch({
        type: GET_POST_BY_AUTHOR_ERROR,
        payload: 'There is not a main posts'
      })
    })         
  }
}