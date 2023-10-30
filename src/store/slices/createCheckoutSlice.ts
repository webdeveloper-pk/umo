import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createCheckout } from "services/apis/apis";
export const createCheckoutAction = createAsyncThunk("createCheckout", async (checkoutData: any, thunkAPI) => {
  try {
    const formData = new FormData();
    // const checkoutDataCopy = { ...checkoutData };
    // const { logo } = checkoutData;
    // formData.append("logo", logo);
    // if (checkoutDataCopy.hasOwnProperty("logo")) {
    //   delete checkoutDataCopy.logo;
    // }
    // for (const key in checkoutDataCopy) {
    //   if (typeof checkoutDataCopy[key] === "object" && !Array.isArray(checkoutDataCopy[key])) {
    //     formData.append(key, JSON.stringify(checkoutDataCopy[key]));
    //   } else {
    //     formData.append(key, checkoutDataCopy[key]);
    //   }
    // }
    const payload1: any = {
      address: JSON.stringify(checkoutData.address),
      contact_info: JSON.stringify(checkoutData.contact_info),
    };
    formData.append("logo", checkoutData.logo);
    for (const key in payload1) {
      formData.append(key, payload1[key]);
    }
    formData.append("business_name", checkoutData.business_name);
    formData.append("location", checkoutData.location);
    formData.append("email", checkoutData.email);
    formData.append("logo", checkoutData.logo);
    formData.append("date", checkoutData.date);
    formData.append("qrCodePreference", checkoutData.qrCodePreference);
    formData.append("percentage_off", checkoutData.percentage_off);
    formData.append("min_spend", checkoutData.min_spend);
    const { data } = await createCheckout(formData);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  checkout: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  checkout: null,
};
const createCheckoutSlice = createSlice({
  name: "createCheckoutSlice",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCheckoutAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.checkout = action.payload;
      })
      .addCase(createCheckoutAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = createCheckoutSlice.actions;
export default createCheckoutSlice.reducer;
