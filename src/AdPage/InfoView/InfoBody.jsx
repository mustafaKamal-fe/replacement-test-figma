import { Grid } from "@material-ui/core";
import CardUI from "../PageComponents/Card/CardUI";

const InfoBody = () => {
  return (
    <div className="body_info_container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="info_block">
            <h4>Where it does Appear ? </h4>
            <p>
              in Main home page for All Browsers, at the Top of Real-estate
              List, when any user click on it , it will redirect him to your own
              real-estates list Page. as well, all of your added banners will
              appear at the TOP of your real-estate list page for your own
              review and in case you like to edit any of them,
            </p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="info_block">
            <h4>How to Design your Banner ? </h4>
            <p style={{ marginTop: "34px" }}>
              You Can add your Distinguished image and description to Create the
              Banner, as well you Can edit it any time from your Home Page.
            </p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="info_block">
            <h4>Maximize your marketing Activities and visitors </h4>
            <p style={{ marginTop: "34px" }}>
              by Adding ( New Home Page Advertisemnet ) , you will have a chance
              to get more visitors to your Page , Your real-estates as well any
              of your New ( Business Activities ), as well; This Feature allows
              you to See how much ( Viewers ) Saw any of your ( added banners )
            </p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="info_block">
            <h4>Example of home page banner</h4>
            <CardUI />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoBody;
