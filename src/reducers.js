import { combineReducers } from 'redux';

import appReducer from './App/reducer';
import loginReducer from './App/containers/Login/reducer';

export default combineReducers({
  appReducer,
  loginReducer
});
