import CardAdd from "./cardAdd";
import { Row, Col } from "antd";

const AddAdv = () => {
  const previewFile = () => {
    var preview = document.getElementById("img");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "/img/add_a_photo.pngs";
    }
  };
  return (
    <div className="addAdv">
      <div className="homeNav">
        <div className="navIcon">
          <img src="/img/plus.png" alt="add" className="infoIcon" />
        </div>
        <div className="navTitle">ADD Your ( NEW HomePage Advertisement )</div>
      </div>
      <div className="container-home">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <div className="addDes">
              <div className="title">Add Description</div>
              <textarea className="destext">
                We have a Good Opportunity for flats for sale in Baghdad for new
                married persons with a good prices you can contact us any time
                during the week
              </textarea>
              <p className="small">max 120 lettes</p>
            </div>
          </Col>

          <Col xs={24} sm={12}>
            <div className="addImg">
              <div className="title"> Add Image</div>
              <Row gutter={[8, 16]}>
                <Col xs={24} sm={10} md={12}>
                  <p className="imgdes">
                    Upload slideshow images with preferred dimension xxxx px
                  </p>
                </Col>

                <Col xs={24} sm={14} md={12}>
                  <div className="divimgUpload">
                    <img
                      src="/img/decor.png"
                      alt="uploading img"
                      className="imgUpload"
                      id="img"
                    />
                    <label>
                      <img
                        src="/img/add_a_photo.png"
                        alt="addImg"
                        className="addimg"
                      />
                      <input
                        type="file"
                        id="my_file"
                        style={{ display: "none" }}
                        onChange={previewFile}
                      />
                    </label>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="hr hrmarg" />
      <div className="container-home">
        <Row gutter={[16, 16]}>
          <Col md={10} xs={24} lg={11}>
            <button className="btnPre">Preview</button>
          </Col>
          <Col md={14} xs={24} lg={13}>
            <CardAdd />
          </Col>
        </Row>
        <Row>
          <div className="addPlan">
            <p>Add Plan</p>
            <div className="rideoBtn">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={8} className="radio-element">
                  <input
                    type="radio"
                    value="30 day ( $100.00 ) "
                    name="plan"
                    className="radio"
                  />
                  30 day ( $100.00 )
                </Col>
                <Col xs={24} sm={8} className="radio-element">
                  <input
                    type="radio"
                    value="180 day ( $150.00 ) "
                    name="plan"
                    className="radio"
                  />
                  180 day ( $150.00 )
                </Col>
                <Col xs={24} sm={8} className="radio-element">
                  <input
                    type="radio"
                    value="360 day ( $200.00 ) "
                    name="plan"
                    className="radio"
                  />
                  360 day ( $200.00 )
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </div>
      <div className="hr hrmarg" />
      <div className="container-home">
        <div className="footerAdd">
          <Row gutter={[48, 16]}>
            <Col sm={24} md={10} lg={10} xl={12}>
              <p>
                cLICK “Approve and pay” TO SAVE CANGES AND GO TO THE payment
                step
              </p>
            </Col>
            <Col sm={24} md={14} lg={14} xl={12}>
              <button className="cancel">CANCEL</button>
              <button className="pay">Approve & Pay</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default AddAdv;