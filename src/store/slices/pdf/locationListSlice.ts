import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationList } from "services/apis/pdf";
export const getLocationListAction = createAsyncThunk("getLocationList", async (_: any, thunkAPI) => {
  try {
    const { data } = await getLocationList();
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  location: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  location: null,
};
const getLocationListSlice = createSlice({
  name: "getLocationList",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocationListAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLocationListAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = action.payload;
      })
      .addCase(getLocationListAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = getLocationListSlice.actions;
export default getLocationListSlice.reducer;
