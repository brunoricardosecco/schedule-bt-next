import {
  ChartBarIcon,
  ClipboardDocumentIcon,
  CreditCardIcon,
  HomeIcon,
  RectangleGroupIcon,
  TableCellsIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

import { PROTECTED_ROUTES_PREFIX, Routes } from "@/constants/routing";

export const useGetNavigationPaths = () => {
  const { pathname } = useLocation();

  const dryPath = pathname.replace(/\/\d+$/, "");

  return [
    {
      name: "Dashboard",
      path: PROTECTED_ROUTES_PREFIX,
      icon: HomeIcon,
      isActive: dryPath === PROTECTED_ROUTES_PREFIX,
    },
    {
      name: "Quadras",
      path: Routes.COURTS,
      icon: RectangleGroupIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.COURTS}`,
    },
    {
      name: "Horários",
      path: Routes.SCHEDULES,
      icon: TableCellsIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.SCHEDULES}`,
    },
    {
      name: "Pagamentos",
      path: Routes.PAYMENTS,
      icon: CreditCardIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.PAYMENTS}`,
    },
    {
      name: "Inventário",
      path: Routes.INVENTORY,
      icon: ClipboardDocumentIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.INVENTORY}`,
    },
    {
      name: "Funcionarios",
      path: Routes.EMPLOYEES,
      icon: UserGroupIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.EMPLOYEES}`,
    },
    {
      name: "Relatórios",
      path: Routes.REPORTS,
      icon: ChartBarIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.REPORTS}`,
    },
  ];
};
