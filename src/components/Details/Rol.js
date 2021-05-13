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
import RolValidations from "../validations/rolValidation";
import { useParams } from "react-router-dom";
import roles from "../../json/roles.json";

const Rol = () => {
  const classes = useStyles();
  const params = useParams();

  const id = params.id;

  return roles.map((data) => {
    if (data.id_rol == id) {
      return (
        <Container>
          <Formik
            validationSchema={RolValidations}
            initialValues={{
              nombre: data.nombre,
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
                      Detalles del Rol
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className={classes.subtitle}>
                      Nombre:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      InputProps={{
                        className: classes.textfiel,
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="outlined"
                      value={values.nombre}
                      name="nombre"
                      helperText={errors.nombre}
                      error={!!(errors.nombre && touched.nombre)}
                    ></TextField>
                  </Grid>
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
    }
  });
};

export default Rol;
