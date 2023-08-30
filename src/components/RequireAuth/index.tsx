import { Navigate, Outlet } from "react-router-dom";

import { useIsLoggedIn } from "@/hooks/account/useFetchAccount";

export const RequireAuth = () => {
  const isLoggedIn = true; // useIsLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
