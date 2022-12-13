import React, { ComponentType, FC } from "react";
import {  Navigate } from "react-router-dom";
import UserService from "../../services/UserService";

const userService = new UserService();

const Auth =
  <P extends any>(Component: ComponentType<P>): FC<P> =>
  (props: any) => {
    if (userService.isAuthenticated()) {
      return <Component {...props} />;
    }
    return (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
    );
  };

  export default Auth;