import { useFetchExample } from "@/hooks/account/useFetchAccount";

export const Login = () => {
  const { isLoading } = useFetchExample();

  if (isLoading) {
    return <h1>IS LOADING...</h1>;
  }

  return <h1>login page</h1>;
};
