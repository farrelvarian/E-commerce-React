import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAfter from "../../../components/module/NavbarAfterLogin";
const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={(props) => {
          console.log(isAuth);
        if (isAuth === "true") {
          return (
            <>
              <Redirect to="/" />
              <NavbarAfter />
              <Component {...props} />
            </>
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PublicRoute;
