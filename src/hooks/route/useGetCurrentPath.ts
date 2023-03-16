import { useLocation } from "react-router-dom";

export const useGetCurrentPath = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.replace(/\/\d+$/, "");

  console.log("rota atual->", currentPath);

  return currentPath;
};
