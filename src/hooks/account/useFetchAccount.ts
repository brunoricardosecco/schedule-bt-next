import useSWR from "swr";

import { getAccount } from "@/apiRoutes/account";
import { fetch } from "@/libs/fetch";

export const useFetchAccount = () => {
  const { formattedUrl, url } = getAccount();

  return useSWR(formattedUrl, () =>
    fetch({
      url,
    }),
  );
};
