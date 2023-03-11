import { createBrowserRouter } from "react-router-dom";

import { Error } from "@/pages/Error";
import { Login } from "@/pages/Login";
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
]);
