import * as types from "../constants";
import { createAction } from "../utils";

export const setUserFetching = (isFetching = false) => {
  return createAction(types.USER_SET_IS_FETCHING, { isFetching });
};