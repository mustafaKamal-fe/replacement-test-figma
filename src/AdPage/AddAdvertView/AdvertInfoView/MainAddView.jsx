import { Grid } from "@material-ui/core";
import AddDescription from "./AddDescription";
import "./AdDesc.css";
import AddImage from "./AddImage";
const AddDesc = () => {
  return (
    <Grid container spacing={1} style={{ borderBottom: "1px solid #A6A6A6" }}>
      {/* <AddDescription /> */}
      <Grid item xs={12} sm={6}>
        <AddDescription />
      </Grid>

      {/* <AddImage /> */}
      <Grid item xs={12} sm={6}>
        <AddImage />
      </Grid>
    </Grid>
  );
};

export default AddDesc;
