import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, requiredRole }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (!userInfo || !userInfo.accessToken) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(userInfo.accessToken);

    // Token expired
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("userInfo"); // Clear expired token
      return <Navigate to="/login" />;
    }

    // Role check
    if (requiredRole && !userInfo.roles?.[requiredRole]) {
      return <Navigate to="/" />;
    }

    // checking user roles
    if ( requiredRole && userInfo?.roles?.[requiredRole] === true) {
      return <Navigate to="/user/dashboard" />
    } 
      if ( requiredRole && userInfo?.roles?.[requiredRole] !== "admin") {
      return <Navigate to="/user/profile" />
    } 
   

    return children;
  } catch (err) {
    localStorage.removeItem("userInfo"); // Clear on token decode error too
    return <Navigate to="/login" />;
  }
  
};

export default PrivateRoute;
