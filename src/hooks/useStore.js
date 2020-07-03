import { useContext } from "react";
import { store, actions } from "../store";

export const useStore = () => {
  const { state, dispatch } = useContext(store);
  const dispatchAction = (action) => dispatch(action);

  return { state, dispatchAction, actions };
};
