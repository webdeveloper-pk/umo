import React from "react";
import scanner from "assets/images/scanner.png";
import companyLogo from "assets/images/card-right-logo.png";
import PdfGenerator from "features/presentation/PdfGenerator";
import { useAppDispatch, useAppSelector } from "services/hooks/hooks";
import { getLocationListAction, resetStatus } from "store/slices/pdf/locationListSlice";
import {
  getSpotsGroupAction,
  resetStatus as resetStatusForGetSpotsGroupAction,
} from "store/slices/pdf/spotsGroupSlice";
import { getSpotsListAction, resetStatus as resetStatusForGetSpotsListAction } from "store/slices/pdf/spotsListSlice";

const PdfContainer = () => {
  const dispatch = useAppDispatch();
  const locationListReducer = useAppSelector((state) => ({
    status: state.getLocationList.status,
    location: state.getLocationList.location,
    error: state.getLocationList.error,
  }));
  const spotsReducer = useAppSelector((state) => ({
    status: state.getSpotsGroup.status,
    spots: state.getSpotsGroup.spots,
    error: state.getSpotsGroup.error,
  }));
  const spotsListReducer = useAppSelector((state) => ({
    status: state.getSpotsList.status,
    spotsList: state.getSpotsList.spotsList,
    error: state.getSpotsList.error,
  }));

  const handleChange = (value: string) => {
    dispatch(getSpotsGroupAction(value));
  };
  const handleChange2 = (value: string) => {
    dispatch(getSpotsListAction(value));
  };

  React.useEffect(() => {
    dispatch(getLocationListAction(""));
  }, []);

  React.useEffect(() => {
    if (locationListReducer.status === "succeeded") {
      dispatch(resetStatus());
    }
  }, [locationListReducer]);

  React.useEffect(() => {
    if (spotsReducer.status === "succeeded") {
      dispatch(resetStatusForGetSpotsGroupAction());
    }
  }, [spotsReducer]);

  React.useEffect(() => {
    if (spotsListReducer.status === "succeeded") {
      dispatch(resetStatusForGetSpotsListAction());
    }
  }, [spotsListReducer]);

  return (
    <div>
      <PdfGenerator
        locationListReducer={locationListReducer}
        spotsReducer={spotsReducer}
        handleChange={handleChange}
        handleChange2={handleChange2}
        spotsListReducer={spotsListReducer}
      />
    </div>
  );
};

export default PdfContainer;
