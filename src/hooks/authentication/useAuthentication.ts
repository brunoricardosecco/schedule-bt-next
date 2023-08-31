import { useSignIn } from "@clerk/clerk-react";
import useSWRMutation from "swr/mutation";

import { getAccount } from "@/apiRoutes/account";
import { AuthenticateParams } from "@/types/authentication";

type Params = {
  arg: AuthenticateParams;
};

export const useAuthentication = () => {
  const { url: meUrl } = getAccount();
  const { signIn, setActive } = useSignIn();

  return useSWRMutation(
    meUrl, // meUrl is used to invalidate the /me request, so after the login, the /me will trigger again with a valid token and it will shows that the user is logged
    async (_, { arg: { email, password } }: Params) => {
      const session = await signIn?.create({
        identifier: email,
        password,
      });

      if (session?.status === "complete") {
        setActive?.({ session: session.createdSessionId });
      }
    },
  );
};
