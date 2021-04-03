import { UserContext } from './../../App';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest}) => {

    const [LoginUser, setLoginUser] = useContext(UserContext);

    return (
        <Route
      {...rest}
      render={({ location }) =>
        LoginUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;