import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function DeleteDialog(props) {
  const { open, handleClose, handleProceed, userName } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-label="Dialog for confirming the delete"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Creator"}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          aria-label="message to confirm the delete"
        >
          Are you sure you want to delete the creator named {userName}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button aria-label="No" onClick={handleClose}>
          No
        </Button>
        <Button aria-label="yes" onClick={handleProceed} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
