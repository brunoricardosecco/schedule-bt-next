import axios from "axios";

export const fetch = axios.create({
  baseURL: "ss",
});

export const exampleApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 2000,
});
