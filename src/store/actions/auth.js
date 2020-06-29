import * as types from "../constants";
import { createAction } from "../utils";

export const setLoadingLogin = () => {
  return createAction(types.AUTH_LOADING_LOGIN);
};