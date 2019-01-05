const baseURL = "https://financialmodelingprep.com/api";

import axios from "axios";

import { fmpResponseToJSON } from "./dataFcns";

export const fmpClient = async (endpoint: string) => {
  let tmp: string = "";
  const value = await axios.get(baseURL + endpoint);
  tmp = value.data;
  return fmpResponseToJSON(tmp);
};
