import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSpotsList } from "services/apis/pdf";
export const getSpotsListAction = createAsyncThunk("getSpotsList", async (value: any, thunkAPI) => {
  try {
    const { data } = await getSpotsList(value);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  spotsList: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  spotsList: null,
};
const getSpotsListSlice = createSlice({
  name: "getSpotsList",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpotsListAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSpotsListAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.spotsList = action.payload;
      })
      .addCase(getSpotsListAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = getSpotsListSlice.actions;
export default getSpotsListSlice.reducer;
