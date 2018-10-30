import { combineReducers } from 'redux';
import { rootReducer } from './root';
import { loginReducer } from './login';
import { registerReducer } from './registration';

export const appReducer = combineReducers({
  root: rootReducer,
  login: loginReducer,
  register: registerReducer
})