import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "./navigations";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { useStore } from "./hooks";

const App = () => {
  
  const { state } = useStore();

  const {
    authenticationState: { isAuthenticated },
  } = state;

  const AuthenticatedNavigations = () => (
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={3000}>
        <Switch>
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/account"
            component={Account}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );

  const PublicNavigations = () => (
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={3000}>
        <Switch>
          <PublicRoute
            path="/login"
            exact
            isAuthenticated={isAuthenticated}
            component={Login}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );

  return (
    <>
      <>{JSON.stringify(state)}</>
      <Router>
        <AuthenticatedNavigations />
        <PublicNavigations />
      </Router>
    </>
  );
};

export default App;
