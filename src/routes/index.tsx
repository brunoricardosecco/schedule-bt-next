import { createBrowserRouter } from "react-router-dom";

import { ForgotPassword } from "@/pages/Authentication/ForgotPassword";
import { Login } from "@/pages/Authentication/Login";
import { Error } from "@/pages/Error";
import { Proxy } from "@/pages/Proxy";

import { protectedRoutes } from "./protectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Proxy />,
    errorElement: <Error />,
  },
  protectedRoutes,
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
]);
