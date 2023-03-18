import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
