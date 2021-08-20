import HomeAdv from "../homeAdv";
import AddAdv from "./addAdv";
import { Row, Col } from "antd";
const AdvertisementPage = () => {
  return (
    <div className="Container">
      <Row gutter={[8, 16]} justify="space-around">
        <Col md={24} lg={8}>
          <HomeAdv />
        </Col>
        <Col md={24} lg={14}>
          <AddAdv />
        </Col>
      </Row>
    </div>
  );
};
export default AdvertisementPage;
