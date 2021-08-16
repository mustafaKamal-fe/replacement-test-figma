import "./InfoPageStyle.css";
import InfoBody from "./InfoBody";
import Header from "../PageComponents/Header/Header";
const AdPageInfoView = () => {
  return (
    <div style={{ height: "100vh" }}>
      {/* <Head /> */}
      <Header label="What is Home Page Advertisement" />

      {/* <Body /> */}
      <InfoBody />
    </div>
  );
};

export default AdPageInfoView;
