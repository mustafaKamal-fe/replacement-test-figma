import { Grid } from "@material-ui/core";
import computerImg from "../../../assests/images/computer_low.png";
import "./CardStyle.css";
import personImg from "../../../assests/images/person.png";
import ownerIcon from "../../../assests/images/owner_icon.png";
const CardUI = () => {
  return (
    <Grid container className="card_container">
      <Grid
        container
        item
        xs={12}
        style={{
          borderBottom: "1px solid white",
        }}
      >
        <Grid item xs={12} sm={6}>
          <img
            src={computerImg}
            style={{
              width: "100%",
              minHeight: "160px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p
            style={{
              margin: 0,
              marginTop: "3px",
              fontWeight: 600,
              fontSize: 11,
            }}
          >
            Descriptio of 120 Letters , wil lbe enput in the next page
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 10,
        }}
        item
        xs={12}
      >
        <Grid item xs={2}>
          <img
            src={personImg}
            style={{
              width: 27,
              height: 27,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <p
            style={{
              fontWeight: "700",
              margin: 0,
              fontSize: 11,
            }}
          >
            High Towers for real Estate Co. Ltd.
          </p>
        </Grid>

        <Grid item xs={2}>
          <img src={ownerIcon} style={{ height: 27, width: 32 }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardUI;
