import React from "react";
import { Route,Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? <Component {...props} /> : <Redirect to="/login/custommer" />;
      }}
    />
  );
};

export default PrivateRoute;
