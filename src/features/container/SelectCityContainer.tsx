import React from "react";
import SelectCity from "../presentation/SelectCity";
import { useAppSelector, useAppDispatch } from "../../services/hooks/hooks";
import { locationListWithUsedSpots, resetStatus } from "store/slices/locationListWithUsedSpotsSlice";
import { updateField } from "store/slices/inputFormDataSlice";

const SelectCityContainer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.inputFormData.data);
  console.log("formData::: ", formData);
  const [search, setSearch] = React.useState("");
  const locationListWithUsedSpotsReducer = useAppSelector((state) => ({
    status: state.locationListWithUsedSpots.status,
    location: state.locationListWithUsedSpots.location,
    error: state.locationListWithUsedSpots.error,
  }));

  const handleInputChange = (field: any, value: any) => {
    dispatch(updateField({ field, value }));
  };

  const handleGetLocation = React.useCallback(() => {
    dispatch(locationListWithUsedSpots(search));
  }, [dispatch, search]);

  React.useEffect(() => {
    if (!search) {
      handleGetLocation();
    }
  }, [search]);

  React.useEffect(() => {
    if (locationListWithUsedSpotsReducer.status === "succeeded") {
      dispatch(resetStatus());
    }
  }, [locationListWithUsedSpotsReducer]);

  return (
    <SelectCity
      search={search}
      setSearch={setSearch}
      locationListWithUsedSpotsReducer={locationListWithUsedSpotsReducer}
      handleGetLocation={handleGetLocation}
      handleInputChange={handleInputChange}
    />
  );
};

export default SelectCityContainer;
