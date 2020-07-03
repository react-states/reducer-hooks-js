import * as types from "../constants";
import { createAction } from "../utils";

/**
 * Setting App state to loading state
 */
export const setAppLoading = (payload = false) => {
  /** trigger create action and returns formated results */
  return createAction(types.SET_APP_LOADING, payload);
};
