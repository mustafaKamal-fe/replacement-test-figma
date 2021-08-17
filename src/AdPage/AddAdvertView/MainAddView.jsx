import { Grid } from "@material-ui/core";
import Header from "../PageComponents/Header/Header";
import AdPreview from "./AdPreview/AdPreview";
import AddDesc from "./AdvertInfoView/MainAddView";
import ApproveAd from "./ApproveView/ApproveAd";
import "./MainAddStyle.css";
const AdHomePage = () => {
  return (
    <Grid container className="add_container">
      <Header label="ADD  Your (  NEW HomePage Advertisement ) " />

      {/* <Add Advert Info/> */}
      <Grid item xs={12}>
        <div className="desc_container">
          <AddDesc />
        </div>
      </Grid>

      {/* <Preview/> */}
      <Grid item xs={12}>
        <div className="desc_container">
          <AdPreview />
        </div>
      </Grid>

      {/* <Approve/> */}
      <Grid item xs={12}>
        <ApproveAd />
      </Grid>
    </Grid>
  );
};

export default AdHomePage;
