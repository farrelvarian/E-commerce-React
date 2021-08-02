import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavbarAfter from "../../../components/module/NavbarAfterLogin";
const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props) => {
      return isAuth ? (
        <>
          <Redirect to="/" />
          <NavbarAfter />
          <Component {...props} />
        </>
      ) : (
        <Component {...props} />
      );
    }} />
  )
}

export default PublicRoute;