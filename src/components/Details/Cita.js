import React from "react";
import useStyles from "../styles";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  Typography,
  Grid,
  Container,
  Button,
  TextField,
} from "@material-ui/core";
import CitasValidation from "../validations/citasValidation";
import citas from "../../json/citas.json";

const Cita = () => {
  const classes = useStyles();
  const params = useParams();

  const id = params.id;

  return citas.map((data) => {
    if (data.id_citas == id) {
      return (
        <Container>
          <Formik
            validationSchema={CitasValidation}
            initialValues={{
              nombre: data.nombrePaciente,
              motivo: data.motivo,
              fechaAgendamiento: data.fechaAgendamiento,
              fechaCita: data.fechaCita,
              horaCita: data.horaCita,
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
                      Detalles de la cita
                    </Typography>
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
                      name="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.nombre}
                      error={!!(errors.nombre && touched.nombre)}
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
                      name="fechaAgendamiento"
                      value={values.fechaAgendamiento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.fechaAgendamiento}
                      error={
                        !!(
                          errors.fechaAgendamiento && touched.fechaAgendamiento
                        )
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle}>
                      Motivo:
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      multiline={true}
                      rows={8}
                      variant="outlined"
                      type="date"
                      name="motivo"
                      value={values.motivo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.motivo}
                      error={
                        !!(
                          errors.motivo && touched.motivo
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <Typography className={classes.subtitle}>
                        Fecha de cita:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        type="date"
                        variant="outlined"
                        InputProps={{ className: classes.textfiel }}
                        type="date"
                        name="fechaCita"
                        value={values.fechaCita}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.fechaCita}
                        error={
                          !!(
                            errors.fechaCita && touched.fechaCita
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className={classes.subtitle}>
                        Hora de cita:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        type="time"
                        variant="outlined"
                        InputProps={{ className: classes.textfiel }}
                        name="horaCita"
                        value={values.horaCita}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.horaCita}
                        error={
                          !!(
                            errors.horaCita && touched.horaCita
                          )
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <div className={classes.buttonBottom}>
                  <Button className={classes.button}>Editar</Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      );
    }
  });
};
export default Cita;
