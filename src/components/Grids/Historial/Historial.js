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
import historial from '../../../json/historial.json';

const TableGrid = () => {
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push("/crear/cita");
  }

  function handleClickDetails() {
    history.push();
  }
  const rows = historial.map((historial) => {
    return {
      id: historial.id_historial,
      pacient: historial.nombrePaciente,
      date: historial.fecha,
    };
  })

  const columns = [
    { field: "id", headerName: "ID", width: 247 },
    { field: "pacient", headerName: "Paciente", width: 247 },
    { field: "date", headerName: "Fecha", width: 247 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 165,
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
            to={`detalle/historial/${params.row.id}`}
            onClick={handleClickDetails}
          >
            Detalles
          </Button>
        </div>
      ),
    },
  ];


  return (
    <Container className={classes.container}>
      <Grid container className={classes.dataGrid} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.Title}>Historial</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder={
              "Buscar el ID del registro o nombre del paciente"
            }
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
        <Grid item xs={6}></Grid>
      </Grid>
      <div style={{ height: 400, width: "100%", marginTop: "50px" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Container>
  );
};

export default TableGrid;
