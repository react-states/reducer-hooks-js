import React, { createContext, useReducer } from "react";
import { combineReducers } from "./utils";
import * as reducers from "./reducers";
import * as initialStates from "./states";
import * as actions from "./actions";

const store = createContext(initialStates);

const [storeReducer, initialStoreData] = combineReducers({
  userState: [reducers.user, initialStates.userInitialState],
  authenticationState: [reducers.authentication, initialStates.authInitialState],
});

const { Provider } = store;

const GlobalStateProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialStoreData);
  
  return (
    <Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </Provider>
  );
};

export { GlobalStateProvider, store, actions };
