import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
