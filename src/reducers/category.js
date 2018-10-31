import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR
} from '../actions/category';

const initialState = {
  categories: [],
  isLoading: false,
  error: ''
}

export function categoryReducer(state = initialState, action) {
  switch (action.type) {  
    case GET_CATEGORY_REQUEST:
      return {
          ...state,           
          isLoading: true
      }

    case GET_CATEGORY_SUCCESS:
      return {
          ...state,
          isLoading: false,        
          categories : action.payload
      }

    case GET_CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
    }

    default:
      return state
  }
}