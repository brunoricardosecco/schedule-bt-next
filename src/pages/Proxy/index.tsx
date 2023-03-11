import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Proxy = () => {
  const isAuthenticated = true;
  const location = useLocation();

  return isAuthenticated ? (
    <Navigate to="/app" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
