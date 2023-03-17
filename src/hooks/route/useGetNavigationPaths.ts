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
      path: Routes.QUADRAS,
      icon: RectangleGroupIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.QUADRAS}`,
    },
    {
      name: "Horários",
      path: Routes.HORARIOS,
      icon: TableCellsIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.HORARIOS}`,
    },
    {
      name: "Pagamentos",
      path: Routes.PAGAMENTOS,
      icon: CreditCardIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.PAGAMENTOS}`,
    },
    {
      name: "Inventário",
      path: Routes.INVENTARIO,
      icon: ClipboardDocumentIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.INVENTARIO}`,
    },
    {
      name: "Funcionarios",
      path: Routes.FUNCIONARIOS,
      icon: UserGroupIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.FUNCIONARIOS}`,
    },
    {
      name: "Relatórios",
      path: Routes.RELATORIOS,
      icon: ChartBarIcon,
      isActive: dryPath === `${PROTECTED_ROUTES_PREFIX}/${Routes.RELATORIOS}`,
    },
  ];
};
