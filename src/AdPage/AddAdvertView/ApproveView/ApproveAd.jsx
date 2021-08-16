import { Grid } from "@material-ui/core";
import ApproveBtn from "../../PageComponents/Buttons/ApproveBtn";
import CancelBtn from "../../PageComponents/Buttons/CancelBtn";
import "./Approve.css";
const ApproveAd = () => {
  return (
    <Grid container spacing={1} style={{ padding: "23px 28px" }}>
      <Grid item sm={6} xs={12} style={{ fontSize: 11 }}>
        <p>cLICK “Approve and pay” TO SAVE CANGES AND GO TO THE payment step</p>
      </Grid>
      <Grid item sm={2} xs={12}>
        <CancelBtn>Cancel</CancelBtn>
      </Grid>
      <Grid item sm={4} xs={12}>
        <ApproveBtn>Approve & Pay</ApproveBtn>
      </Grid>
    </Grid>
  );
};

export default ApproveAd;
