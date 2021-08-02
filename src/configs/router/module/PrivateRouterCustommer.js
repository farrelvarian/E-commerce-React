import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  const role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true && role === "CUSTOMMER") {
          return <Component {...props} />;
        } else if (isAuth === true && role === "SELLER") {
          return <Redirect to="/profile/seller/storeprofile" />;
        } else {return <Redirect to="/login/custommer" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
