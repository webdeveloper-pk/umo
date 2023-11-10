import React from "react";
import logo from "assets/images/card-logo.png";
import logo1 from "assets/images/logo1.png";
import "assets/styles/pdfPreview.css";
import { Font, Image, PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import phone from "assets/images/phone.png";
import { QRCodeCanvas } from "qrcode.react";
import QrCode from "components/pdf/qrCode";
import { Select } from "antd";
import { formatDate } from "services/utils/formatDate";
import OnlineImage from "components/pdf/OnlineImage";

const PdfGenerator = ({ locationListReducer, spotsReducer, handleChange, handleChange2, spotsListReducer }: any) => {
  const options = locationListReducer?.location?.map((location: any) => ({
    value: location.id.toString(),
    label: location.location_name,
  }));
  const options2 = spotsReducer?.spots?.map((location: any) => ({
    value: location.spot_group,
    label: location.spot_group,
  }));
  // console.log("spotsListReducer::: ", spotsListReducer);
  // function returnSrc(path: string) {
  //   console.log("LOG", path);
  //   let selectedMethod = "GET";
  //   return { uri: path, method: selectedMethod, body: "", headers: "" };
  // }

  return (
    <div>
      <div className="input-wrapper-pdf">
        <div>
          <Select placeholder="Search to Select" style={{ width: "100%" }} onChange={handleChange} options={options} />
        </div>
        <div>
          <Select
            placeholder="Search to Select"
            style={{ width: "100%" }}
            onChange={handleChange2}
            options={options2}
          />
        </div>
      </div>
      <div className="pdf-wrapper">
        <PDFViewer>
          <Document>
            <Page size={{ width: 275 * 2.83465, height: 210 * 2.83465 }} style={styles.body}>
              <View style={styles.logoWrapper}>
                <Image src={logo1} style={styles.logoTop}></Image>
              </View>
              <View style={styles.cardOuterGrid}>
                {spotsListReducer?.spotsList?.map((data: any, index: number) => {
                  // console.log("data::: ", data?.logo);
                  const contactParser = data.contact_info.replace(/'/g, '"');
                  const addressParser = data.address.replace(/'/g, '"');
                  const contact_info = contactParser ? JSON.parse(contactParser) : null;
                  const address = addressParser ? JSON.parse(addressParser) : null;
                  const formattedDate = formatDate(contact_info?.expiryDate?.dateString);

                  return (
                    <View style={styles.cardInnerWrapper} key={index}>
                      <View style={styles.stepCardWrapper}>
                        <View style={styles.leftCutterWrapper}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
                            return <View style={styles.leftCutterWrapperItem} key={index}></View>;
                          })}
                        </View>
                        <View style={styles.previewInnerCard}>
                          <View style={styles.previewCardLeft}>
                            <View>
                              <Image style={styles.previewCardLeftLogo} src={logo} />
                            </View>
                            <View style={styles.previewCardTitle}>
                              <Text style={styles.stepCardTitle}>{data?.business_name}</Text>
                            </View>
                            <Text style={styles.stepCardAddress}>{address?.plain_address}</Text>
                            <View style={styles.stepCardOffTextWrapper}>
                              <Text style={styles.stepCardOffText}>{data?.percentage_off}% Off</Text>
                            </View>
                            {/* <Text style={styles.stepCardOffDescription}>When you spend 20£ or more</Text> */}
                            {contact_info?.business_phone?.country_code && contact_info?.business_phone?.number ? (
                              <View>
                                <View style={styles.contactWrapper}>
                                  <View style={styles.stepCardPhoneSvg}>
                                    <Image style={styles.phoneSvgInner} src={phone} />
                                  </View>

                                  <Text style={styles.stepCardPhoneText}>
                                    +{contact_info?.business_phone?.country_code} {contact_info?.business_phone?.number}
                                  </Text>
                                </View>
                              </View>
                            ) : null}
                          </View>
                          <View style={styles.previewCardRight}>
                            <View style={styles.stepCardRightLogoImage}>
                              {/* <Image style={styles.stepCardRightLogoImageClass} src={data?.logo} /> */}
                              <OnlineImage styles={styles} index={index} data={data} />
                            </View>
                            <View style={styles.stepCardButton}>
                              <Text style={styles.stepCardButtonText}>
                                {data?.umo_code ? data?.umo_code : "UMH0016"}
                              </Text>
                            </View>
                            <Text style={styles.stepCardDate}>
                              {contact_info?.expiryDate?.dateString ? formattedDate : null}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.rightScannerDiv}>
                        <View style={styles.smallLeftCutterScanner}>
                          <View style={styles.smallLeftCutterScannerImg}></View>
                        </View>
                        <View style={styles.smallBottomCutterScanner}>
                          <View style={styles.smallBottomCutterScannerImg}></View>
                        </View>
                        <View style={styles.rightCutterWrapper}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                            return <View style={styles.leftCutterWrapperItem} key={index}></View>;
                          })}
                        </View>
                        <View style={styles.scannerWrapper}>
                          {/* <Image src={svg} style={styles.scannerImageClass}></Image> */}
                          <QrCode styles={styles} index={index} data={data} />
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Page>
          </Document>
        </PDFViewer>

        <div style={{ visibility: "hidden", height: 0, position: "absolute", left: "-100%" }}>
          {spotsListReducer?.spotsList?.map((val: any, index: number) => {
            console.log("val::: ", val?.logo);
            const contactParser = val.contact_info.replace(/'/g, '"');
            const addressParser = val.address.replace(/'/g, '"');
            const contact_info = contactParser ? JSON.parse(contactParser) : null;
            const address = addressParser ? JSON.parse(addressParser) : null;
            const qrCodePreferenceMappings: any = {
              email: val?.email,
              address: address?.plain_address,
              facebook: contact_info?.social_media?.facebook,
              instagram: contact_info?.social_media?.insta,
              linkedin: contact_info?.social_media?.linkedln,
              twitter: contact_info?.social_media?.twitter,
              // phone: {`${formData.business_phone?.country_code}+${formData.business_phone?.number}`}
            };
            return (
              <>
                <QRCodeCanvas
                  // value={val.qrCode}
                  value={qrCodePreferenceMappings[contact_info?.qrCodePreference]}
                  size={128}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"L"}
                  includeMargin={false}
                  className="w-[80%] h-[80%]"
                  id="crrr"
                  key={index}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;

Font.register({
  family: "Montserrat",
  fonts: [
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Uw-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr6Ew-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Ew-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf" },
    { src: "http://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvC70w-Y3tcoqK5.ttf" },
  ],
});
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 15,
    backgroundColor: "#fedb0c",
  },
  logoWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "40px",
  },
  logoTop: {
    width: 220,
    height: 60,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    // fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    // fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    // fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  //
  cardOuterGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardInnerWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "30%",
    marginBottom: 10,
  },
  stepCardWrapper: {
    borderRadius: 7,
    backgroundColor: "#156ceb",
    position: "relative",
    width: "150px",
    height: 90,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    borderRight: 1,
    borderRightColor: "#156ceb",
  },
  leftCutterWrapper: {
    display: "flex",
    position: "absolute",
    top: 3.5,
    left: -3,
  },
  rightCutterWrapper: {
    display: "flex",
    position: "absolute",
    top: 3.5,
    right: -3,
  },
  leftCutterWrapperItem: {
    width: "5.5px",
    height: "5.5px",
    borderRadius: "50%",
    backgroundColor: "#fedb0c",
    marginBottom: "3px",
  },
  rightScannerDiv: {
    backgroundColor: "#0b5ec6",
    position: "relative",
    width: "80px",
    minHeight: 90,
    maxHeight: 90,
    borderLeft: 1,
    borderLeftColor: "#0b5ec6",
    padding: 10,
    borderRadius: 7,
  },
  previewInnerCard: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  previewCardLeft: {
    maxWidth: 90,
  },
  previewCardLeftLogo: {
    width: 20,
  },
  previewCardTitle: {
    marginTop: 2.5,
  },
  stepCardTitle: {
    color: "#fedb0d",
    fontFamily: "Montserrat",
    fontSize: 7,
    fontStyle: "normal",
    fontWeight: "ultrabold",
    maxWidth: "85%",
  },
  stepCardAddress: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 4,
    fontStyle: "normal",
    fontWeight: "medium",
    maxWidth: "87%",
    marginTop: 2,
  },
  stepCardOffTextWrapper: {
    maxWidth: "100%",
  },
  stepCardOffText: {
    marginTop: 4,
    color: "#fedb0d",
    fontFamily: "Montserrat",
    fontSize: 7,
    fontStyle: "normal",
    fontWeight: "ultrabold",
    maxWidth: "87%",
  },
  stepCardOffDescription: {
    marginTop: 2,
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 4.5,
    fontStyle: "normal",
    fontWeight: "semibold",
    maxWidth: "87%",
  },
  contactWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 3,
    marginTop: 3,
  },
  stepCardPhoneSvg: {
    width: 9.379,
    height: 9.379,
    backgroundColor: "#f4f4f4",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneSvgInner: {
    width: 6,
    height: 6,
  },
  stepCardPhoneText: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 4.5,
    fontStyle: "normal",
    fontWeight: 500,
    maxWidth: "87%",
  },
  previewCardRight: {
    maxwidth: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
  },
  stepCardRightLogoImage: {
    width: 50,
    height: 50,
  },
  stepCardRightLogoImageClass: {
    objectFit: "cover",
    borderRadius: "50%",
    width: 50,
    height: 50,
  },
  stepRightDiv: {
    marginTop: 5,
  },
  stepCardUmcodeText: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 4.5,
    fontStyle: "normal",
    fontWeight: 600,
    textAlign: "left",
    marginBottom: 4,
  },
  stepCardButton: {
    width: 50,
    height: 10.427,
    borderRadius: 13.355,
    border: 1,
    borderColor: "#fedb0d",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  stepCardButtonText: {
    color: "#fedb0d",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 6,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  stepCardDate: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: 4.5,
    fontStyle: "normal",
    fontWeight: "medium",
    textAlign: "center",
    marginTop: 4,
  },
  smallLeftCutterScanner: {
    position: "absolute",
    left: -6,
    top: -4,
  },
  smallLeftCutterScannerImg: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FEDB0C",
  },
  smallBottomCutterScanner: {
    position: "absolute",
    left: -6,
    bottom: -4,
  },
  smallBottomCutterScannerImg: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FEDB0C",
  },
  scannerWrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "60px",
    height: "60px",
    minHeight: "70px",
    maxHeight: "70px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  scannerImageClass: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
});
