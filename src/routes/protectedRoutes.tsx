import { RouteObject } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { RequireAuth } from "@/components/RequireAuth";
import { PROTECTED_ROUTES_PREFIX, Routes } from "@/constants/routing";
import { Dashboard } from "@/pages/App/Dashboard";
import { SomeProtectedPage } from "@/pages/App/SomeProtectedPage";
import { Error } from "@/pages/Error";

export const protectedRoutes: RouteObject = {
  element: <RequireAuth />,
  errorElement: <Error />,
  children: [
    {
      path: PROTECTED_ROUTES_PREFIX,
      element: <Layout />,
      children: [
        {
          element: <Dashboard />,
          index: true,
        },
        {
          path: Routes.INVENTARIO,
          element: <SomeProtectedPage />,
        },
      ],
    },
  ],
};
