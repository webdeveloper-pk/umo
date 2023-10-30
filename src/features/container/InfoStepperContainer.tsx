import React from "react";
import InfoStepper from "../presentation/InfoStepper";
import { useAppSelector, useAppDispatch } from "services/hooks/hooks";
import { updateField } from "store/slices/inputFormDataSlice";

const InfoStepperContainer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.inputFormData.data);
  console.log("formData::: ", formData);

  const handleInputChange = (field: any, value: any) => {
    dispatch(updateField({ field, value }));
  };

  return <InfoStepper formData={formData} handleInputChange={handleInputChange} />;
};

export default InfoStepperContainer;
