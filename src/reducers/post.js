import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  GET_POST_BY_CATEGORY_REQUEST,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_BY_CATEGORY_ERROR,
  GET_POST_BY_AUTHOR_REQUEST,
  GET_POST_BY_AUTHOR_SUCCESS,
  GET_POST_BY_AUTHOR_ERROR
} from '../actions/post';

const initialState = {
  posts: [],
  isLoading: false,
  error: ''
}

export function postReducer(state = initialState, action) {
  switch (action.type) {  
    case GET_POST_REQUEST:
    case GET_POST_BY_CATEGORY_REQUEST:
    case GET_POST_BY_AUTHOR_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case GET_POST_SUCCESS:
    case GET_POST_BY_CATEGORY_SUCCESS:
    case GET_POST_BY_AUTHOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts : action.payload
      }
    
    case GET_POST_ERROR:
    case GET_POST_BY_CATEGORY_ERROR:
    case GET_POST_BY_AUTHOR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
    }

    default:
      return state
  }
}