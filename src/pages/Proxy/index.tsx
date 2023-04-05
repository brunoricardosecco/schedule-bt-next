import { Navigate } from "react-router-dom";

import { useIsLoggedIn } from "@/hooks/account/useFetchAccount";

export const Proxy = () => {
  console.log("🚀 ~ file: index.tsx:7 ~ Proxy ~ isLoggedIn:");
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <Navigate to="/app" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
