import useSWR from "swr";

import { getAccount } from "@/apiRoutes/account";

import { useLocalStorage } from "../utils/useLocalStorage";

export const useFetchAccount = () => {
  const { url } = getAccount();
  const { get } = useLocalStorage();
  const accessToken = get("accessToken");

  return useSWR(accessToken ? url : null, () =>
    /* fetch({
      url,
    }), */
    get("accessToken"),
  );
};

export const useIsLoggedIn = (): boolean => {
  const { data } = useFetchAccount();

  return !!data;
};
