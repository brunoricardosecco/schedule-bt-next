import useSWR from "swr";

import { example, getAccount } from "@/apiRoutes/account";
import { exampleApi, fetch } from "@/libs/fetch";

export const useFetchAccount = () => {
  const { formattedUrl, url } = getAccount();

  return useSWR(formattedUrl, () =>
    fetch({
      url,
    }),
  );
};

function sleep(ms: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useFetchExample = () => {
  const { formattedUrl, url } = example();

  return useSWR(formattedUrl, async () => {
    await sleep(2000);

    return exampleApi({
      url,
    });
  });
};
