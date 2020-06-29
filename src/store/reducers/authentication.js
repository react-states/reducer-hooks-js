import * as contants from "../constants";

export const authentication = (state, action) => {
  switch (action.type) {
    case contants.AUTH_LOADING_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
