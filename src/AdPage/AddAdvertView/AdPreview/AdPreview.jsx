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
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html"> 30 day ( $100.00 ) </label>

            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">180 day ( $150.00 ) </label>
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">360 day ( $200.00 ) </label>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdPreview;
