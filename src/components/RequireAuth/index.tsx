import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
