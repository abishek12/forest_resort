import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
const PrivateRoute = ({ children, requiredRole }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Check if userInfo or accessToken is missing
  if (!userInfo || !userInfo.accessToken) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(userInfo.accessToken);

    if (decodedToken.exp * 1000 < Date.now()) {
      return <Navigate to="/login" />;
    }

    // Role check
    if (requiredRole && !userInfo.role?.[requiredRole]) {
      return <Navigate to="/" />;
    }

    return children;

  } catch (err) {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
