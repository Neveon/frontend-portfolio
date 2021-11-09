import { LOGIN_SUCCESS, LOGOUT } from '../types';

 const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // placing token in local storage
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload, // token in state as object {token: tokenHere}
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload
      };

    default:
      return state;
  }
};
export default authReducer;