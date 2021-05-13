import React from "react";
import useStyles from "../../styles";
import {
  TextField,
  Typography,
  Button,
  Container,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { DataGrid } from "@material-ui/data-grid";
import citas from '../../../json/citas.json';

const CitasGrid = (props) => {
  
  let history = useHistory();

  function handleClick() {
    history.push("/crear/cita");
  }

  function handleClickDetails() {
    history.push();
  }

  const rows = citas.map((citas) => {
    return {
      id: citas.id_citas,
      pacient: citas.nombrePaciente,
      date: citas.fechaCita,
      initial: citas.horaCita,
    };
  })

  const classes = useStyles();
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "pacient", headerName: "Paciente", width: 260 },
    { field: "date", headerName: "Fecha", width: 120 },
    { field: "initial", headerName: "Inicio", width: 120 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 330,
      renderCell: (params) => (
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
            to={`detalle/cita/${params.row.id}`}
            onClick={handleClickDetails}
          >
            Detalles
          </Button>
          <Button
            style={{
              backgroundColor: "#3A3083",
              fontSize: "12px",
              borderRadius: "15px",
              color: "white",
              margin: "0 5px 0 5px",
            }}
          >
            Eliminar
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Container className={classes.container}>
      <Grid container className={classes.dataGrid} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.Title}>Citas</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder={"Buscar el ID de la cita o nombre del paciente"}
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
            fullWidth
          >
            Crear nueva cita
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: "100%", marginTop: "50px" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Container>
  );
};

export default CitasGrid;
