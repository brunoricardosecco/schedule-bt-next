import axios from "axios";

import { getAccessToken } from "@/hooks/utils/useLocalStorage";

export const fetch = axios.create({
  baseURL: "https://agendabeachbackend-production.up.railway.app/api",
});

fetch.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
