import { combineReducers } from "redux";
import createCheckoutSlice from "store/slices/createCheckoutSlice";
import inputFormDataSlice from "store/slices/inputFormDataSlice";
import locationListWithUsedSpotsSlice from "store/slices/locationListWithUsedSpotsSlice";
import getLocationListSlice from "store/slices/pdf/locationListSlice";
import getSpotsGroupSlice from "store/slices/pdf/spotsGroupSlice";
import getSpotsListSlice from "store/slices/pdf/spotsListSlice";
const rootReducer = combineReducers({
  locationListWithUsedSpots: locationListWithUsedSpotsSlice,
  inputFormData: inputFormDataSlice,
  createCheckout: createCheckoutSlice,
  // pdf
  getLocationList: getLocationListSlice,
  getSpotsGroup: getSpotsGroupSlice,
  getSpotsList: getSpotsListSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
