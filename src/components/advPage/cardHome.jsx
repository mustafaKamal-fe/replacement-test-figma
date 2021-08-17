import { Col, Row } from "antd";
const CardHome = () => {
  return (
    <div className="containerCardHome">
      <div>
        <Row gutter={[8, 8]} justify="start">
          <Col span={12}>
            <img
              src="/img/Rectangle 4767.png"
              alt="Rectangle"
              className="card-img"
            />
          </Col>
          <Col span={12}>
            <div className="Description">
              Description of 120 Letters , wil lbe enput in the next page
            </div>
          </Col>
        </Row>
        <div className="hr" />

        <div className="footer">
          <div className="divfooter">
            <img src="/img/Rectangle 4768.png" alt="face" className="faceImg" />

            <p>High Towers for real Estate Co. Ltd.</p>
          </div>
          <img
            src="/img/Untitled-1 33.png"
            alt="unitled"
            className="img2footer"
          />
        </div>
      </div>
    </div>
  );
};
export default CardHome;
