import axios from "axios";

export const fetch = axios.create({
  baseURL: "https://agendabeachbackend-production.up.railway.app/api",
});
