import React from "react";
import InfoStepper from "../presentation/InfoStepper";
import { useAppSelector, useAppDispatch } from "services/hooks/hooks";
import { updateField } from "store/slices/inputFormDataSlice";
import Error from "components/toasts/error/Error";

const InfoStepperContainer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.inputFormData.data);
  const [emailObserver, setEmailObserver] = React.useState(false);
  console.log("formData::: ", formData);

  const handleInputChange = (field: any, value: any) => {
    dispatch(updateField({ field, value }));
  };

  React.useEffect(() => {
    if (emailObserver) {
      const timer = setTimeout(() => {
        setEmailObserver(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [emailObserver]);

  return (
    <>
      {emailObserver ? (
        <Error message={"Email Invalid/Empty"} description="Please enter your email correctly in order to move forward" />
      ) : null}
      <InfoStepper formData={formData} handleInputChange={handleInputChange} setEmailObserver={setEmailObserver} />
    </>
  );
};

export default InfoStepperContainer;
