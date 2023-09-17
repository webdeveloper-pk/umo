import React from "react";
import SelectCity from "../presentation/SelectCity";

const SelectCityContainer = () => {
  const searchedCity = [
    {
      city: "Birmingham",
      count: "08",
    },
    {
      city: "Liverpool",
      count: "09",
    },
    {
      city: "Bristol",
      count: "03",
    },
    {
      city: "Leicester",
      count: "14",
    },
  ];
  return <SelectCity searchedCity={searchedCity} />;
};

export default SelectCityContainer;
