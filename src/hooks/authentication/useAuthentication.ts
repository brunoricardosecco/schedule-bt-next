import useSWRMutation from "swr/mutation";

import { getAuthentication } from "@/apiRoutes/authentication";
import { fetch } from "@/libs/fetch";
import { AuthenticateParams } from "@/types/authentication";

import { useLocalStorage } from "../utils/useLocalStorage";

type Params = {
  arg: AuthenticateParams;
};

type AuthenticationResponse = {
  accessToken: string;
};

export const useAuthentication = () => {
  const { url } = getAuthentication();
  const { set } = useLocalStorage();

  return useSWRMutation(
    url,
    async (_, { arg: { email, password } }: Params) => {
      const response: { data: AuthenticationResponse } = await fetch.post(url, {
        email,
        password,
      });

      fetch.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;

      set("accessToken", response.data.accessToken);

      return response;
    },
  );
};
