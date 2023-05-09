import useSWRMutation from "swr/mutation";

import { getAccount } from "@/apiRoutes/account";
import { getAuthentication } from "@/apiRoutes/authentication";
import { fetch } from "@/libs/fetch";
import { AuthenticateParams } from "@/types/authentication";

import { setAccessToken } from "../utils/useLocalStorage";

type Params = {
  arg: AuthenticateParams;
};

type AuthenticationResponse = {
  accessToken: string;
};

export const useAuthentication = () => {
  const { url } = getAuthentication();
  const { url: meUrl } = getAccount();

  return useSWRMutation(
    meUrl, // meUrl is used to invalidate the /me request, so after the login, the /me will trigger again with a valid token and it will shows that the user is logged
    async (_, { arg: { email, password } }: Params) => {
      const response: { data: AuthenticationResponse } = await fetch.post(url, {
        email,
        password,
      });

      setAccessToken(response.data.accessToken);

      return response;
    },
  );
};
