import { combineReducers } from "redux";
import createCheckoutSlice from "store/slices/createCheckoutSlice";
import inputFormDataSlice from "store/slices/inputFormDataSlice";
import locationListWithUsedSpotsSlice from "store/slices/locationListWithUsedSpotsSlice";

const rootReducer = combineReducers({
  locationListWithUsedSpots: locationListWithUsedSpotsSlice,
  inputFormData: inputFormDataSlice,
  createCheckout: createCheckoutSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
