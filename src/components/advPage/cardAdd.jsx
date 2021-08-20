import { Col, Row } from "antd";
const CardAdd = () => {
  return (
    <div className="containerCardHome">
      <Row gutter={[48, 16]}>
        <Col xl={10} lg={12}>
          <img
            src="/img/Rectangle 4767.png"
            alt="Rectangle"
            className="card-img"
          />
        </Col>
        <Col xl={14} lg={12}>
          <div className="Description">
            ( 120 Letter ) : i.e. ( We have a Good Opportunity for flats for
            sale in Baghdad for new married persons with a good prices you can
            contact us any time during the week)
          </div>
        </Col>
      </Row>
      <div className="hr" />

      <div className="footer">
        <div className="divfooter">
          <img src="/img/Rectangle 5609.png" alt="face" className="faceImg" />
          <div>
            <p>High Towers for real Estate Co. Ltd.</p>
            <p className="smfooter">( Agent or Owner ) Distrct - City</p>
          </div>
        </div>
        <img
          src="/img/Untitled-1 33.png"
          alt="unitled"
          className="img2footer"
        />
      </div>
    </div>
  );
};
export default CardAdd;
