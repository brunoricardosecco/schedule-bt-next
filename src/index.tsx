import "./styles/index.css";

import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);
