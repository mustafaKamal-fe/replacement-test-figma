import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import defaultImg from "../../../assests/images/img_thum.png";

const AddImage = () => {
  const [imageUrl, setImgaeUrl] = useState(defaultImg);

  const imageUploaded = (e) => {
    setImgaeUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Grid container spacing={2} className="add_img_container">
      <Grid item xs={6}>
        <h4>Add image</h4>
        <p>Upload slideshow images with preferred dimension xxxx px</p>
      </Grid>
      <Grid item xs={6} className="upload_img">
        <div>
          <div className="img_container">
            <label>
              <i></i>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={imageUploaded}
              />
            </label>

            <img className="img_thum" src={imageUrl} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default AddImage;
