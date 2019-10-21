import { LOGIN_REQUEST_SUCCESS } from './constants';

const loginReducer = (
  state = {
    isLoggedIn: false
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default loginReducer;
