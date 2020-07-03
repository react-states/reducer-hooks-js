import React, { useContext } from "react";
import { useStore } from "../../hooks";

const Login = () => {
  const { actions, dispatchAction } = useStore();

  return (
    <div>
      <button
        onClick={() => dispatchAction(actions.setUserAuthenticated(true))}
      >
        Authenticate
      </button>
    </div>
  );
};

export default Login;
