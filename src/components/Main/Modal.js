import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
  } from '@material-ui/core';

  

const Modal = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <Typography variant="h5">{props.titulo}</Typography>
          <Typography variant="subtitle1">{`${props.subtitle}${props.value}?`}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancelar</Button>
          <Button onClick={props.click}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
