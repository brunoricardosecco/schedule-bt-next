import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Proxy = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <h1>loading</h1>;
  }

  return isSignedIn ? (
    <Navigate to="/app" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
