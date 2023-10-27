import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
export const getLocationListWithUsedSpots = (search: any) => {
  let url = `/location-entries`;
  if (search) {
    url += `?location=${search}`;
  }
  return api.get(url);
};

export const login = (formData: any) => api.post("/accounts/login/", formData);

export const createCheckout = (formData: any) => api.post("/subscription/checkout/", formData);

