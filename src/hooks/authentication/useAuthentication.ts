import useSWRMutation from "swr/mutation";

import { getAuthentication } from "@/apiRoutes/authentication";
import { fetch } from "@/libs/fetch";
import { AuthenticateParams } from "@/types/authentication";

type Params = {
  arg: AuthenticateParams;
};

export const useAuthentication = () => {
  const { url } = getAuthentication();

  return useSWRMutation(url, ({ arguments: { email, password } }) =>
    fetch.post(url, {
      email,
      password,
    }),
  );
};
