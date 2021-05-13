import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Grid,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {useParams} from 'react-router-dom';
import rutinas from "../../json/rutinas.json";

const Rutina = () => {
  const classes = useStyles();
  const params = useParams();

  const id = params.id;

  return rutinas.map((data) => {
    if (data.id_rutina == id) {
      return (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.Title}>
                Detalles de la rutina
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.subtitle}>Nombre:</Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                InputProps={{ className: classes.textfiel }}
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={3}>
              <Typography className={classes.subtitle}>Descripción:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                multiline={true}
                rows={8}
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.subtitle}>Ejercicios:</Typography>
            </Grid>
            <Grid container item xs={9} spacing={2}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 1"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 2"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 3"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 4"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 5"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 6"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 7"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 8"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Actividad 9"
                />
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.buttonBottomUser}>
            <Button className={classes.button}>Editar</Button>
          </div>
        </Container>
      );
    }
  });
};

export default Rutina;
