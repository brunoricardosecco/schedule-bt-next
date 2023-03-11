import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

import { Layout } from "@/components/Layout";
import { RequireAuth } from "@/components/RequireAuth";
import { Dashboard } from "@/pages/App/Dashboard";
import { SomeProtectedPage } from "@/pages/App/SomeProtectedPage";
import { Error } from "@/pages/Error";
import { Login } from "@/pages/Login";
import { Proxy } from "@/pages/Proxy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Proxy />,
    errorElement: <Error />,
  },
  {
    element: <RequireAuth />,
    errorElement: <Error />,
    children: [
      {
        path: "/app",
        element: <Layout />,
        children: [
          {
            element: <Dashboard />,
            index: true,
          },
          {
            path: "protected",
            element: <SomeProtectedPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);
