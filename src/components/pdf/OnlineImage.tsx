import React from "react";
import { Image } from "@react-pdf/renderer";

const OnlineImage = ({ styles, index, data }: any) => {
  return <Image style={styles.stepCardRightLogoImageClass} src={data.logo} />;
};

export default OnlineImage;
