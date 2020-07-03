import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  isAuthenticated = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);
