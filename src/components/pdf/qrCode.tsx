import { Image } from "@react-pdf/renderer";
import React from "react";

const QrCode = ({ styles, index }: any) => {
  const [svg, setSvg] = React.useState<any>([]);
  React.useEffect(() => {
    let svg1: any = document.getElementsByTagName("canvas");
    const qrCodeDataUri = svg1[index].toDataURL("image/jpg", 0.3);
    setSvg(qrCodeDataUri);
  }, []);
  return (
    <>
      <Image src={svg} style={styles.scannerImageClass}></Image>
    </>
  );
};

export default QrCode;
