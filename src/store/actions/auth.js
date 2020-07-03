import * as types from "../constants";
import { createAction } from "../utils";

/**
 * Reverse loading state of loading status
 * of login
 */
export const setLoadingLogin = () => {
  /** trigger create action and returns formated results */
  return createAction(types.AUTH_LOADING_LOGIN);
};

/**
 * Reverse loading state of loading status
 * of login
 */
export const setUserAuthenticated = (status) => {
  /** trigger create action and returns formated results */
  return createAction(types.SET_AUTHENTICATED, status);
};