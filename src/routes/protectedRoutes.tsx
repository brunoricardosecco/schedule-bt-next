import { RouteObject } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { RequireAuth } from "@/components/RequireAuth";
import { PROTECTED_ROUTES_PREFIX, Routes } from "@/constants/routing";
import { Courts } from "@/pages/App/Courts";
import { Dashboard } from "@/pages/App/Dashboard";
import { Employees } from "@/pages/App/Employees";
import { Inventory } from "@/pages/App/Inventory";
import { Payments } from "@/pages/App/Payments";
import { Reports } from "@/pages/App/Reports";
import { Schedules } from "@/pages/App/Schedules";
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
          path: Routes.COURTS,
          element: <Courts />,
        },

        {
          path: Routes.SCHEDULES,
          element: <Schedules />,
        },
        {
          path: Routes.PAYMENTS,
          element: <Payments />,
        },
        {
          path: Routes.INVENTORY,
          element: <Inventory />,
        },
        {
          path: Routes.EMPLOYEES,
          element: <Employees />,
        },
        {
          path: Routes.REPORTS,
          element: <Reports />,
        },
      ],
    },
  ],
};
