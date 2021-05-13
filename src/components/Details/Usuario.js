import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Grid,
  Container,
  FormControl,
  Select,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import UserValidations from "../validations/userValidation";
import actividades from "../../json/actividades.json";
import usuario from "../../json/usuario.json";

const Usuario = () => {
  const classes = useStyles();
  const params = useParams();

  const id = params.id;
  return usuario.map((data) => {
    if (data.id_usuario == id) {
      return (
        <Container>
          <Formik
            validationSchema={UserValidations}
            initialValues={{
              rol: data.rol,
              nombres: data.nombre_usuario,
              apellidos: data.apellido_usuario,
              documento: data.id_usuario,
              ocupacion: data.ocupacion_usuario,
              numero: data.numero_usuario,
              fecha: data.fecha_nacimiento,
              sexo: data.sexo_usuario,
              correo: data.correo_usuario,
              actividades: "",
            }}
            onSubmit={(values) => {
              const results = JSON.stringify(values, values.actividades, 2);
              console.log(results);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className={classes.Title}>
                      Detalles del usuario
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>Rol:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        native
                        className={classes.select}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rol}
                        name="rol"
                        helperText={errors.rol}
                        error={!!(errors.rol && touched.rol)}
                      >
                        <option value=""></option>
                        <option value={"Paciente"}>Paciente</option>
                        <option value={"Administrador"}>Administrador</option>
                        <option value={"Fisioterapeuta"}>Fisioterapeuta</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Nombre:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombres}
                      name="nombres"
                      helperText={errors.nombres}
                      error={!!(errors.nombres && touched.nombres)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Apellidos:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.apellidos}
                      name="apellidos"
                      helperText={errors.apellidos}
                      error={!!(errors.apellidos && touched.apellidos)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Documento:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.documento}
                      name="documento"
                      helperText={errors.documento}
                      error={!!(errors.documento && touched.documento)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Ocupación:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ocupacion}
                      name="ocupacion"
                      helperText={errors.ocupacion}
                      error={!!(errors.ocupacion && touched.ocupacion)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Número de contacto:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.numero}
                      name="numero"
                      helperText={errors.numero}
                      error={!!(errors.numero && touched.numero)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Fecha de Nacimiento:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      type="Date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fecha}
                      name="fecha"
                      helperText={errors.fecha}
                      error={!!(errors.fecha && touched.fecha)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>Sexo:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        native
                        className={classes.select}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sexo}
                        name="sexo"
                        helperText={errors.sexo}
                        error={!!(errors.sexo && touched.sexo)}
                      >
                        <option value=""></option>
                        <option value={"Masculino"}>Masculino</option>
                        <option value={"Femenino"}>Femenino</option>
                        <option value={"Prefiero no decirlo"}>
                          Prefiero no decirlo
                        </option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Correo:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.correo}
                      name="correo"
                      helperText={errors.correo}
                      error={!!(errors.correo && touched.correo)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Actividades:
                    </Typography>
                  </Grid>
                  <Grid container item xs={9} spacing={2}>
                    <Grid item xs={4}>
                      {actividades.map((data) => {
                        return (
                          <FormControlLabel
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.actividades}
                            name="actividades"
                            helperText={errors.actividades}
                            error={
                              !!(errors.actividades && touched.actividades)
                            }
                            control={
                              <Checkbox
                                className={classes.checkbox}
                                color="primary"
                              />
                            }
                            label={data.nombre}
                          />
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
                <div className={classes.buttonBottomUser}>
                  <Button className={classes.button} type="submit">
                    Editar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      );
    }
  });
};

export default Usuario;
