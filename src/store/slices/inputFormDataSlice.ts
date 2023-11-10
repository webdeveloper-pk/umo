import { createSlice } from "@reduxjs/toolkit";

interface Data {
  address: any;
  contact_info: any;
  business_name: string;
  location: number;
  email: string;
  logo: any;
  // date: Date;
  // qrCodePreference: any;
  percentage_off: any;
  umo_code: string;
  min_spend: string;
}

interface InputFormDataState {
  data: Data;
  status: string;
  error: null | string;
}

const initialState: InputFormDataState = {
  data: {
    address: {
      selected_city: {},
    },
    contact_info: {},
    business_name: "",
    location: 0,
    email: "",
    logo: "",
    // date: new Date(),
    // qrCodePreference: "",
    percentage_off: "",
    umo_code: "",
    min_spend: "",
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
