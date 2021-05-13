import React from "react";
import useStyles from "../styles";
import {
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { DataGrid } from "@material-ui/data-grid";
import Modal from "../Main/Modal";

const TableGrid = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    history.push();
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  function handleClick() {
    history.push(props.route);
  }

  function handleClickEdit() {
    history.push(props.edit);
  }

  function handleClickDetails() {
    history.push(props.details);
  }

  const classes = useStyles();
  const columns = [
    { field: props.id1, headerName: props.headername1, width: 330 },
    { field: props.id2, headerName: props.headername2, width: 330 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 330,
      renderCell: (params) => {
        console.log(params);
        return (
          <div style={{ margin: "auto" }}>
            <Button
              style={{
                fontSize: "12px",
                border: "1px solid #3A3083",
                borderRadius: "15px",
                color: "#3A3083",
                margin: "0 5px 0 5px",
              }}
              component={Link}
              to={`${props.details}${params.row.id}`}
              onClick={handleClickDetails}
            >
              Detalles
            </Button>

            <Button
              onClick={handleClickOpen}
              style={{
                backgroundColor: "#3A3083",
                fontSize: "12px",
                borderRadius: "15px",
                color: "white",
                margin: "0 5px 0 5px",
              }}
            >
              {`${params.row.id}`}
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
              <DialogContent>
                <Typography variant="h5">Eliminar</Typography>
                <Typography variant="subtitle1">{`¿Desea Eliminar este elemento:${params.row.id}?`}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button
                  onClick={() => {
                    handleClose();
                    console.log("xd");
                  }}
                >
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      },
    },
  ];

  return (
    <Container className={classes.container}>
      <Grid container className={classes.dataGrid} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.Title}>{props.title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder={props.placeholder}
            variant="outlined"
            InputProps={
              ({ className: classes.textfiel },
              {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className={classes.icon} />
                  </InputAdornment>
                ),
              })
            }
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Button
            className={classes.button}
            fullWidth
            component={Link}
            to={props.route}
            onClick={handleClick}
          >
            {props.buttonText}
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: "100%", marginTop: "50px" }}>
        <DataGrid rows={props.rows} columns={columns} />
      </div>
    </Container>
  );
};

export default TableGrid;
