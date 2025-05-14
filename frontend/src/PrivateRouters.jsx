import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, requiredRole }) => {
  // Get user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // If no user info or token exists, redirect to login
  if (!userInfo?.accessToken) {
    return <Navigate to="/login" replace />;
  }

  try {
    // Decode the JWT token
    const decodedToken = jwtDecode(userInfo.accessToken);

    // Check if token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("userInfo");
      return <Navigate to="/login" replace state={{ reason: "session-expired" }} />;
    }

    // Role check - adjusted for your specific role structure
    if (requiredRole) {
      // Check both the decoded token roles and userInfo.role for backward compatibility
      const hasRole = 
        (decodedToken.roles?.[requiredRole] || userInfo.role?.[requiredRole]);
      
      if (!hasRole) {
        return <Navigate to="/unauthorized" replace />;
      }
    }

    return children;
  } catch (err) {
    // If token is invalid, clear storage and redirect
    localStorage.removeItem("userInfo");
    return <Navigate to="/login" replace state={{ reason: "invalid-token" }} />;
  }
};

export default PrivateRoute;