import * as contants from "../constants";

/**
 * 
 * @param {*} state, current authentication state
 * @param {*} action, action that contains type and payload(?)
 */
export const authentication = (state, action) => {
  switch (action.type) {
    case contants.AUTH_LOADING_LOGIN:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case contants.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
