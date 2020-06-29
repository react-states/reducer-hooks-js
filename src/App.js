import React, { useContext } from "react";
import { store, dispatch, actions } from "./store";

function App() {
  const { state, dispatch } = useContext(store);

  const handleReverse = () => {
    dispatch(actions.setUserFetching(false));
  };

  return (
    <div className="App">
      authenticated:isLoading:
      {state.authenticationState.isLoading ? " true\n" : "false\n"}
      <br />
      <button
        onClick={() => {
          dispatch(actions.setLoadingLogin());
          dispatch(actions.setUserFetching(true));
        }}
      >
        State Management
      </button>
      <br />
      user:isFetching: {state.userState.isFetching ? " true\n" : "false\n"}
      <br />
      <button onClick={handleReverse}>Reverse fetching</button>
    </div>
  );
}

export default App;
