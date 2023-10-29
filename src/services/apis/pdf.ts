import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
export const getLocationList = () => {
  let url = `/locations`;
  return api.get(url);
};
export const getSpotsGroup = (id: number) => {
  let url = `/spots-group/${id}/`;
  return api.get(url);
};

export const getSpotsList = (value: string) => {
  let url = `/spots/${value}/`;
  return api.get(url);
};
