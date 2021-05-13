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
import SearchIcon from "@material-ui/icons/Search";
import {
  DataGrid,
  GridColDef,
  GridApi,
  GridCellValue,
} from "@material-ui/data-grid";



const TableGrid = (props) => {
  const classes = useStyles();
  const columns = [
    { field: "id", headerName: "ID", width: 165 },
    { field: "fecha", headerName: "Fecha", width: 165 },
    {field: "initial", headerName: "Inicio", width: 165},
    {field: "duration", headerName: "Duración", width: 165},
    {field: "terapist", headerName: "Fisioterapeuta", width: 165},
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
          >
            Detalles
          </Button>
        </div>
      ),
    },
  ];
  
  const rows = [
    { id: 1, name: "Kevin Stiwar Rondón Muñoz", fecha: "Jon", duration: "none", terapist: "none" },
    { id: 2, name: "Kevin Stiwar Rondón Muñoz", fecha: "Jon" },
    { id: 3, name: "Kevin Stiwar Rondón Muñoz", fecha: "Jon" },
    { id: 4, name: "Kevin Stiwar Rondón Muñoz", fecha: "Jon" },
  ];

  return (
    <Container className={classes.container}>
      <Grid container className={classes.dataGrid} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.Title}>Sesiones</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder={"Buscar el ID de la sesión o nombre del fisioterapeuta"}
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
