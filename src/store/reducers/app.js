import * as contants from "../constants";

/**
 *
 * @param {*} state, current app state
 * @param {*} action, action that contains type and payload(?)
 */
export const app = (state, action) => {
  switch (action.type) {
    case contants.SET_APP_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
