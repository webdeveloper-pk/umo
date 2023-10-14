import { combineReducers } from "redux";
import inputFormDataSlice from "store/slices/inputFormDataSlice";
import locationListWithUsedSpotsSlice from "store/slices/locationListWithUsedSpotsSlice";

const rootReducer = combineReducers({
  locationListWithUsedSpots: locationListWithUsedSpotsSlice,
  inputFormData: inputFormDataSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
