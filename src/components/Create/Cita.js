import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Grid,
  Container,
  Button,
  TextField,
} from "@material-ui/core";

const Cita = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.Title}>Crear nueva cita</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography className={classes.subtitle}>
            Nombre del paciente:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            InputProps={{
              className: classes.textfiel,
            }}
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subtitle}>
            {" "}
            Fecha de agendamiento:{" "}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            InputProps={{
              className: classes.textfiel,
            }}
            fullWidth
            variant="outlined"
            type="date"
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subtitle}>Motivo:</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField multiline={true} rows={8} variant="outlined" />
        </Grid>
        <Grid item xs={6} container>
          <Grid item xs={6}>
            <Typography className={classes.subtitle}>Fecha de cita:</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              InputProps={{ className: classes.textfiel }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.subtitle}>Hora de cita:</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="time"
              variant="outlined"
              InputProps={{ className: classes.textfiel }}
            />
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.buttonBottom}>
        <Button className={classes.button}>Crear</Button>
      </div>
    </Container>
  );
};

export default Cita;
