import React from "react";
import useStyles from "../styles";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  Typography,
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import ActividadValidation from "../validations/actividadValidations";
import historial from "../../json/historial.json";

const Actividad = () => {
  const classes = useStyles();
  const params = useParams();

  const id = params.id;
  return historial.map((data) => {
    if (data.id_historial == id) {
      return (
        <Container>
          <Formik
            validationSchema={ActividadValidation}
            initialValues={{
              id_historial: data.id_historial,
              nombrePaciente: data.nombrePaciente,
              fecha: data.fecha,
              informacionPaciente: data.informacionPaciente,
              informacionSesion: data.informacionSesion,
              informacionPerfil: data.informacionPerfil,
              observaciones: data.observaciones,
            }}
            onSubmit={(values) => {
              const results = JSON.stringify(values, 0, 2);
              console.log(results);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className={classes.Title}>
                     Información del historial
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                      ID Sesión:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      InputProps={{ className: classes.textfiel }}
                      variant="outlined"
                      name="id_historial"
                      value={values.id_historial}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.id_historial}
                      error={!!(errors.id_historial && touched.id_historial)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                      Información Paciente:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      multiline={true}
                      rows={8}
                      variant="outlined"
                      fullWidth
                      value={values.informacionPaciente}
                      name="informacionPaciente"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.informacionPaciente}
                      error={!!(errors.informacionPaciente && touched.informacionPaciente)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                      Información sesión:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      multiline={true}
                      rows={8}
                      variant="outlined"
                      fullWidth
                      value={values.informacionSesion}
                      name="informacionSesion"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.informacionSesion}
                      error={!!(errors.informacionSesion && touched.informacionSesion)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                      Información perfil:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                     
                      variant="outlined"
                      fullWidth
                      value={values.informacionPerfil}
                      name="informacionPerfil"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.informacionPerfil}
                      error={!!(errors.informacionPerfil && touched.informacionPerfil)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                     observaciones:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      multiline={true}
                      rows={8}
                      variant="outlined"
                      fullWidth
                      value={values.observaciones}
                      name="observaciones"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.observaciones}
                      error={!!(errors.observaciones && touched.observaciones)}
                    ></TextField>
                  </Grid>
                </Grid>
                <div className={classes.buttonBottomUser}>
                  <Button className={classes.button} type="submit">Editar</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      );
    }
  });
};

export default Actividad;
