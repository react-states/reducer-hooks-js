import React from "react";
import { useStore } from "../../hooks";

const Dashboard = () => {
  const { actions, dispatchAction } = useStore();
  return (
    <button onClick={() => dispatchAction(actions.setUserAuthenticated(false))}>
      UnAuthenticate
    </button>
  );
};

export default Dashboard;
