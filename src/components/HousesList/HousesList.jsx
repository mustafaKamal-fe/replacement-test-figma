import { Grid } from "@material-ui/core";
import HouseCard from "../HouseCard/HouseCard";
import "../../App.css";
const HousesList = ({ houses }) => {
  return (
    <div className="cards_container">
      <Grid container spacing={3}>
        {houses.map((house) => {
          return (
            <Grid item sm={6} md={4} xs={12} key={house.id}>
              <HouseCard house={house} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HousesList;
