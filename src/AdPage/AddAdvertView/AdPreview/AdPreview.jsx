import { Grid } from "@material-ui/core";
import PreviewButton from "./PreviewButton";
import "./AdPreview.css";
import CardUI from "../../PageComponents/Card/CardUI";

const AdPreview = () => {
  return (
    <Grid container spacing={4} style={{ borderBottom: "1px solid #A6A6A6" }}>
      <Grid item sm={4} xs={12}>
        <div>
          <PreviewButton />
        </div>
      </Grid>

      <Grid item sm={8} xs={12} style={{ marginTop: "-28ox" }}>
        <div>
          <CardUI />
        </div>
      </Grid>

      <Grid
        style={{ marginBottom: "20px" }}
        container
        spacing={2}
        item
        xs={12}
        className="form_container"
      >
        <Grid item xs={12}>
          <p style={{ fontSize: 11 }}>Add Plan</p>
        </Grid>
        <Grid item xs={12}>
          <form className="radio_input">
            <Grid container spacing={3}>
              <Grid style={{ display: "flex" }} item xs={12} sm={4}>
                <input type="radio" id="day30" name="plan30" value="day30" />
                <label style={{ marginLeft: 4 }} for="html">
                  30 day ( $100.00 )
                </label>
              </Grid>
              <Grid style={{ display: "flex" }} xs={12} item sm={4}>
                <input type="radio" id="day180" name="day180" value="day180" />
                <label style={{ marginLeft: 4 }} for="day180">
                  180 day ( $150.00 )
                </label>
              </Grid>
              <Grid style={{ display: "flex" }} xs={12} item sm={4}>
                <input type="radio" id="day360" name="day360" value="day360" />
                <label style={{ marginLeft: 4 }} for="day360">
                  360 day ( $200.00 ){" "}
                </label>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdPreview;
