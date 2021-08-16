import { Grid } from "@material-ui/core";
import Header from "../PageComponents/Header/Header";
import AdPreview from "./AdPreview/AdPreview";
import AddDesc from "./AdvertInfoView/MainAddView";
import ApproveAd from "./ApproveView/ApproveAd";

const AdHomePage = () => {
  return (
    <Grid container>
      <Header label="ADD  Your (  NEW HomePage Advertisement ) " />

      {/* <Add Advert Info/> */}
      <Grid item xs={12} style={{ padding: "23px 28px" }}>
        <AddDesc />
      </Grid>

      {/* <Preview/> */}
      <Grid item xs={12} style={{ padding: "23px 28px" }}>
        <AdPreview />
      </Grid>

      {/* <Approve/> */}
      <Grid item xs={12}>
        <ApproveAd />
      </Grid>
    </Grid>
  );
};

export default AdHomePage;
