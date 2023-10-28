import { createSlice } from "@reduxjs/toolkit";

interface Data {
  address: any;
  contact_info: any;
  business_name: string;
  location: number;
  selected_city: Record<string, any>;
  business_email: string;
  business_phone: { country_code: string; number: string };
  configuration: any;
  user_email: string;
  date: Date;
  qrCodePreference: any;
}

interface InputFormDataState {
  data: Data;
  status: string;
  error: null | string;
}

const initialState: InputFormDataState = {
  data: {
    address: {},
    contact_info: {},
    business_name: "",
    location: 0,
    selected_city: {},
    business_email: "",
    business_phone: { country_code: "", number: "" },
    configuration: { logo: "" },
    user_email: "",
    date: new Date(),
    qrCodePreference: "",
  },
  status: "idle",
  error: null,
};

const inputFormDataSlice = createSlice({
  name: "inputFormData",
  initialState,
  reducers: {
    updateField: (state: any, action) => {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
    resetForm: (state) => {
      state.data = initialState.data;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { updateField, resetForm } = inputFormDataSlice.actions;

export default inputFormDataSlice.reducer;
