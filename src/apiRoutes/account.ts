import { format } from "@/utils/url";

export const getAccount = () => {
  const url = "/account";

  return {
    url,
    formattedUrl: format(url),
  };
};

export const example = () => {
  const url = "/pokemon";

  return {
    url,
    formattedUrl: "https://pokeapi.co/api/v2/pokemon",
  };
};
