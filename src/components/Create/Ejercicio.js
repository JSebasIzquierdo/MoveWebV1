import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Grid,
  Container,
  Button,
  TextField,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import EjerciseValidation from "../validations/ejerciseValidation";

const Ejercicio = () => {
  const classes = useStyles();

  return (
    <Container>
      <Formik
        validationSchema={EjerciseValidation}
        initialValues={{
          nombre: "",
          descripcion: "",
          rutaVideo: "",
          rutaAudio: "",
          alternanciaPostura: "",
          rutaSensor: "",
          rupturaAudio: "",
          rupturaVideo: "",
          nombreVideo: "",
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
                  Crear nuevo ejercicio
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>Nombre:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.nombre}
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.nombre}
                  error={!!(errors.nombre && touched.nombre)}
                ></TextField>
              </Grid>
              <Grid item xs={6}></Grid>

              
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>
                  Descripción:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  multiline={true}
                  rows={8}
                  variant="outlined"
                  value={values.descripcion}
                  name="descripcion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.descripcion}
                  error={!!(errors.descripcion && touched.descripcion)}
                ></TextField>
              </Grid>
              <Grid item xs={6} container spacing={1}>
              <Grid item xs={6}>
                <Typography className={classes.subtitle}>
                  Ruta del video:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.rutaVideo}
                  name="rutaVideo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.rutaVideo}
                  error={!!(errors.rutaVideo && touched.rutaVideo)}
                ></TextField>
              </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.subtitle}>
                    Ruta del audio:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    InputProps={{
                      className: classes.textfiel,
                    }}
                    variant="outlined"
                    value={values.rutaAudio}
                    name="rutaAudio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.rutaAudio}
                    error={!!(errors.rutaAudio && touched.rutaAudio)}
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.subtitle}>
                    Alternancia de la postura:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputProps={{
                      className: classes.textfiel,
                    }}
                    variant="outlined"
                    value={values.alternanciaPostura}
                    name="alternanciaPostura"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.alternanciaPostura}
                    error={!!(errors.alternanciaPostura && touched.alternanciaPostura)}
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.subtitle}>
                    Rutas de puntos del sensor:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputProps={{
                      className: classes.textfiel,
                    }}
                    variant="outlined"
                    value={values.rutaSensor}
                    name="rutaSensor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.rutaSensor}
                    error={!!(errors.rutaSensor && touched.rutaSensor)}
                  ></TextField>
                </Grid>
              </Grid>
            </Grid>
            <div style={{marginTop: '20px'}}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.secTitle}>Audio</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.secTitle}>Video</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>
                  Tiempo de ruptura:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.rupturaAudio}
                  name="rupturaAudio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.rupturaAudio}
                  error={!!(errors.rupturaAudio && touched.rupturaAudio)}
                ></TextField>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>
                  Tiempo de ruptura:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.rupturaVideo}
                  name="rupturaVideo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.rupturaVideo}
                  error={!!(errors.rupturaVideo && touched.rupturaVideo)}
                ></TextField>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>Nombre:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.nombreAudio}
                  name="nombreAudio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.nombreAudio}
                  error={!!(errors.nombreAudio && touched.nombreAudio)}
                ></TextField>
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.subtitle}>Nombre:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  InputProps={{
                    className: classes.textfiel,
                  }}
                  variant="outlined"
                  value={values.nombreVideo}
                  name="nombreVideo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.nombreVideo}
                  error={!!(errors.nombreVideo && touched.nombreVideo)}
                ></TextField>
              </Grid>
            </Grid>

            </div>
           

            <div className={classes.buttonBottom}>
              <Button className={classes.button} type="submit">Crear</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Ejercicio;
