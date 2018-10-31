import { combineReducers } from 'redux';
import { getUserReducer } from './root';
import { loginReducer } from './login';
import { registerReducer } from './registration';
import { postReducer } from './post';
import { categoryReducer } from './category'

export const appReducer = combineReducers({
  root: getUserReducer,
  login: loginReducer,
  register: registerReducer,
  post: postReducer,
  category: categoryReducer
})