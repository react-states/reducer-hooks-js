import { useContext } from "react";
import { store, actions } from "../store";

export const useStore = () => {
  const { state, dispatch } = useContext(store);
  
  const dispatchAction = (action) => action && dispatch(action);

  return { state, dispatchAction, actions };
};
