import React, { createContext, useReducer } from "react";
import { combineReducers } from "./utils";
import * as reducers from "./reducers";
import * as initialStates from "./states";
import * as actions from "./actions";

/**
 * creating context store
 * for global state
 */
const store = createContext({
  state: {},
  dispatch: (props) => {},
});

/* destructured reducers */
const { authentication, user, app } = reducers;

/* destructured initial states */
const { appState, authInitialState, userInitialState } = initialStates;

/**
 * Special hooks for combining reducers and seperate different states
 */
const [storeReducer, initialStoreData] = combineReducers({
  userState: [user, userInitialState],
  appState: [app, appState],
  authenticationState: [authentication, authInitialState],
});

/**
 * Provider to make context works, 
 */
const { Provider } = store;

/**
 * GlobalStateProvider Component
 * @param {*} props, passed from parent component
 * It may be also useful to add global modal in root to avoid
 * calling and imports of modal
 */
const GlobalStateProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, initialStoreData);

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </Provider>
  );
};

export { GlobalStateProvider, store, actions };
