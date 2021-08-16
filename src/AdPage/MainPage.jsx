import { Grid } from "@material-ui/core";
import AdHomePage from "./AddAdvertView/MainAddView";
import MainInfoView from "./InfoView/MainInfoView";
import "../App.css";

const MainPage = () => {
  return (
    <Grid container spacing={5}>
      {/* Left Side Of the Page */}
      <Grid item xs={12} md={5}>
        <MainInfoView />
      </Grid>

      {/* Right Side Of the Page */}
      <Grid item xs={12} md={7}>
        <AdHomePage />
      </Grid>
    </Grid>
  );
};

export default MainPage;
