import {
  TextField,
  Button,
  Radio,
  Modal,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function EditModal(props) {
  const {
    open,
    handleClose,
    creatorDetails,
    saveCreator,
    handleCreatorDetailsEdit,
  } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="form-container">
          <div className="form-header">
            <h2>Add a new creator</h2>
            <IconButton
              aria-label="close"
              className="close-button"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <form className="form-content">
            <div className="form-row">
              <FormLabel className="form-label">Creator Name</FormLabel>
              <TextField
                placeholder="Name"
                variant="outlined"
                fullWidth
                value={creatorDetails.name}
                margin="normal"
                onChange={(evt) =>
                  handleCreatorDetailsEdit("name", evt.target.value)
                }
              />
            </div>
            <div className="form-row">
              <FormLabel className="form-label">Email</FormLabel>
              <TextField
                placeholder="Email"
                variant="outlined"
                fullWidth
                value={creatorDetails.email}
                margin="normal"
                onChange={(evt) =>
                  handleCreatorDetailsEdit("email", evt.target.value)
                }
              />
            </div>
            <div className="form-row">
              <FormLabel className="form-label">Gender</FormLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  value={creatorDetails.gender}
                  onChange={(evt) =>
                    handleCreatorDetailsEdit("gender", evt.target.value)
                  }
                >
                  <MenuItem value="male" id="male">
                    Male
                  </MenuItem>
                  <MenuItem value="female" id="female">
                    Female
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-row">
              <FormLabel className="form-label">Available for chat</FormLabel>
              <FormControl component="fieldset" margin="normal">
                <RadioGroup
                  row
                  value={creatorDetails.status}
                  onChange={(evt) =>
                    handleCreatorDetailsEdit("status", evt.target.value)
                  }
                >
                  <FormControlLabel
                    value="active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="inactive"
                    control={<Radio />}
                    label="Inactive"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="add-button"
              onClick={() => {
                saveCreator();
              }}
            >
              + Add creator
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditModal;
