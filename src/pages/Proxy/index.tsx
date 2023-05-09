import { Navigate } from "react-router-dom";

import { useIsLoggedIn } from "@/hooks/account/useFetchAccount";

export const Proxy = () => {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <Navigate to="/app" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
