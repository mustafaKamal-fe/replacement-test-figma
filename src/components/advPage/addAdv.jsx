import { Grid, GridItem } from "@chakra-ui/react";
import CardAdd from "./cardAdd";
import { useState } from "react";

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
      <div className="bodyAdd">
        <section className="sec1Add">
          <div className="addDes">
            <div className="title">Add Description</div>
            <textarea className="destext">
              We have a Good Opportunity for flats for sale in Baghdad for new
              married persons with a good prices you can contact us any time
              during the week
            </textarea>
            <p className="small">max 120 lettes</p>
          </div>

          <div className="addImg">
            <div className="title"> Add Image</div>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={2} w={150}>
                <p className="imgdes">
                  Upload slideshow images with preferred dimension xxxx px
                </p>
              </GridItem>

              <GridItem colStart={4} colEnd={6}>
                <div className="divimgUpload">
                  <img
                    src="/img/decor.png"
                    alt="uploading img"
                    className="imgUpload"
                    id="img"
                  />
                </div>
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
              </GridItem>
            </Grid>
          </div>
        </section>
        <div className="hr hrmarg" />
        <section className="sec2Add">
          <div className="addCard">
            <button className="btnPre">Preview</button>
          </div>
          <div>
            <CardAdd />
          </div>

          <div className="addPlan">
            <p>Add Plan</p>
            <div className="rideoBtn">
              <p>
                {" "}
                <input
                  type="radio"
                  value="30 day ( $100.00 ) "
                  name="plan"
                  className="radio"
                />{" "}
                30 day ( $100.00 ){" "}
              </p>
              <p>
                {" "}
                <input
                  type="radio"
                  value="180 day ( $150.00 ) "
                  name="plan"
                  className="radio"
                />{" "}
                180 day ( $150.00 ){" "}
              </p>
              <p>
                {" "}
                <input
                  type="radio"
                  value="360 day ( $200.00 ) "
                  name="plan"
                  className="radio"
                />{" "}
                360 day ( $200.00 ){" "}
              </p>
            </div>
          </div>
        </section>
        <div className="hr hrmarg" />
      </div>
      <div className="footerAdd">
        <p>cLICK “Approve and pay” TO SAVE CANGES AND GO TO THE payment step</p>
        <div className="btnsSubmit">
          <button className="cancel">CANCEL</button>
          <button className="pay">Approve & Pay</button>
        </div>
      </div>
    </div>
  );
};
export default AddAdv;
