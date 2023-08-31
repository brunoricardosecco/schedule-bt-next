import { RedirectToSignIn, SignedIn, useAuth } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <Outlet />
    </SignedIn>
  );
};
