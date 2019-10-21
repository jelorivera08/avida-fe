import { createSelector } from 'reselect';

const loginRedux = () => state => {
  return state.loginReducer;
};

export const isLoggedInSelector = () =>
  createSelector(
    loginRedux(),
    s => (s ? s.isLoggedIn : {})
  );
