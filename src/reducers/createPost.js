import {
  GET_CREATE_POST_REQUEST,
  GET_CREATE_POST_SUCCESS,
  GET_CREATE_POST_ERROR
} from '../actions/createPost';

const initialState = {
  posts: [],
  isLoading: false,
  error: ''
}

export function postCreateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CREATE_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case GET_CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories : action.payload
      }

    case GET_CREATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
    }

    default:
      return state
  }
}