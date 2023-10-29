import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSpotsGroup } from "services/apis/pdf";
export const getSpotsGroupAction = createAsyncThunk("getSpotsGroup", async (id: any, thunkAPI) => {
  try {
    const { data } = await getSpotsGroup(id);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  spots: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  spots: null,
};
const getSpotsGroupSlice = createSlice({
  name: "getSpotsGroup",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpotsGroupAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSpotsGroupAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.spots = action.payload;
      })
      .addCase(getSpotsGroupAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = getSpotsGroupSlice.actions;
export default getSpotsGroupSlice.reducer;
