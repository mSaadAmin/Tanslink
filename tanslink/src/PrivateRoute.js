import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

let loginCheck = false;

if (localStorage.jwtToken) {
    console.log("Into localStorage.jwtToken", localStorage.jwtToken);
    
    const decoded = jwt_decode(localStorage.jwtToken);
    console.log("decoded data: ", decoded);
    loginCheck = true; 
}

const PrivateRoute = ({ component: Component,  ...rest }) => (


    <Route

    {...rest}
    render={
        props => loginCheck === true ? (
            <Component {...props} />
        ) : (
            <Redirect to={"/login"} />
        )
    }
    />
);

export default PrivateRoute;
