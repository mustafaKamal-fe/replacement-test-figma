import HomeAdv from "../homeAdv";
import AddAdv from "./addAdv";
import { Row, Col } from "antd";
const AdvertisementPage = () => {
  return (
    <div className="container advPage">
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <HomeAdv />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <AddAdv />
        </Col>
      </Row>
      ,
    </div>
  );
};
export default AdvertisementPage;
