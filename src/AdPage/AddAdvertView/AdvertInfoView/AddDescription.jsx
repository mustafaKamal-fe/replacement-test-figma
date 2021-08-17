import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const AddDescription = () => {
  const [inputShown, setInputShown] = useState(false);
  const toggleInput = () => {
    setInputShown((prev) => !prev);
  };
  return (
    <div>
      <div className="add_desc">
        <p>Add Description</p>
        <i onClick={toggleInput}></i>
      </div>

      {inputShown && (
        <div className="input_filed">
          <TextField
            multiline
            inputProps={{
              style: {
                fontSize: 10,
                color: "#0B3352",
              },
            }}
            style={{ fontSize: 11 }}
            type="text"
            variant="outlined"
            fullWidth
          />
          <p style={{ alignSelf: "flex-end", opacity: 0.8 }}>max 120 letters</p>
        </div>
      )}
    </div>
  );
};

export default AddDescription;
