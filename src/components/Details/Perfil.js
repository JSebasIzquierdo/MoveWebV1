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
  FormControl,
  FormGroup,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import ProfileValidation from "../validations/profileValidation";
import ejercicios from "../../json/ejercicios.json";

const Perfil = () => {
  const classes = useStyles();
  return (
    <Container>
      <Formik
        validationSchema={ProfileValidation}
        initialValues={{
          nombres: "",
          ejercicios: [],
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
                  Detalles del perfil
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography className={classes.subtitle}>Nombre:</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  InputProps={{
                    className: classes.textfiel,
                  }}
                 
                  variant="outlined"
                  value={values.nombres}
                  name="nombres"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.nombres}
                  error={!!(errors.nombres && touched.nombres)}
                ></TextField>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={2}>
                <Typography className={classes.subtitle}>
                  Ejercicios:
                </Typography>
              </Grid>

              {ejercicios.map((data) => {
                return (
                  <Grid item xs={5} container>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormGroup>
                          <Field 
                           type="checkbox"
                           component={CheckboxWithLabel}
                           name="ejercicios"
                           key={data.id_ejercicio}
                           value={data.nombre_ejercicio}
                           Label={{ label: data.nombre_ejercicio}}

                          />
                        </FormGroup>
                          </FormControl>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.subtitle}>
                        Tiempo
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        InputProps={{
                          className: classes.textfiel,
                        }}
                        variant="outlined"
                      ></TextField>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.subtitle}>
                        Repeticiones
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        InputProps={{
                          className: classes.textfiel,
                        }}
                        variant="outlined"
                      ></TextField>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.subtitle}>
                        Tiempo descanso
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        InputProps={{
                          className: classes.textfiel,
                        }}
                        variant="outlined"
                      ></TextField>
                    </Grid>
                    <Grid item xs={3}></Grid>
                  </Grid>
                );
              })}
            </Grid>
            <div className={classes.buttonBottom}>
              <Button className={classes.button} type="submit">
                Editar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Perfil;
