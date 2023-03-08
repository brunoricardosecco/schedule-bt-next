import React from "react";
import { SomeComponent } from "@/components/SomeComponent";
import { useFetchExample } from "@/hooks/account/useFetchAccount";

export const Login = () => {
  const { data, isLoading } = useFetchExample();
  console.log(
    "EXAMPLE 🚀 ~ file: index.tsx:8 ~ Login ~ isLoading:",
    isLoading,
    data,
  );

  if (isLoading) {
    return <h1>IS LOADING...</h1>;
  }

  return <SomeComponent />;
};
