import * as types from "../constants";
import { createAction } from "../utils";

export const setUserFetching = (isFetching = false) => {
  /** trigger create action and returns formated results */
  return createAction(types.USER_SET_IS_FETCHING, { isFetching });
};