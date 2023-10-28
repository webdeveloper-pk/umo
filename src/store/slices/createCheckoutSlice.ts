import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createCheckout } from "services/apis/apis";
export const createCheckoutAction = createAsyncThunk("createCheckout", async (checkoutData: any, thunkAPI) => {
  try {
    const formData = new FormData();
    for (const key in checkoutData) {
      formData.append(key, checkoutData[key]);
    }
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
