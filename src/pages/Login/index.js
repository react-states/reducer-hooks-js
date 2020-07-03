import React from "react";
import { useStore } from "../../hooks";

const Login = () => {
  const { actions, dispatchAction } = useStore();

  return (
    <div>
      <button
        onClick={() => dispatchAction()}
      >
        Authenticate
      </button>
    </div>
  );
};

export default Login;
