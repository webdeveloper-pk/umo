import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationListWithUsedSpots } from "services/apis/apis";
export const locationListWithUsedSpots = createAsyncThunk(
  "locationListWithUsedSpots",
  async (search: any, thunkAPI) => {
    try {
      const { data } = await getLocationListWithUsedSpots(search);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
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
const locationListWithUsedSpotsSlice = createSlice({
  name: "locationListWithUsedSpotsSlice",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationListWithUsedSpots.pending, (state) => {
        state.status = "loading";
      })
      .addCase(locationListWithUsedSpots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = action.payload;
      })
      .addCase(locationListWithUsedSpots.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = locationListWithUsedSpotsSlice.actions;
export default locationListWithUsedSpotsSlice.reducer;
