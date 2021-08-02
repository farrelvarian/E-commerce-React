import React from "react";
import { Route } from "react-router-dom";
import NavbarAfter from "../../../components/module/NavbarAfterLogin";
import NavbarBefore from "../../../components/module/NavbarBeforeLogin";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
          <>
            <NavbarAfter />
            <Component {...props} />
          </>
        ) : (
          <>
            <NavbarBefore />
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default PrivateRoute;
