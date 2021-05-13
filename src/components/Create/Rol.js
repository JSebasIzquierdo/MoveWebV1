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

const Rol = () => {
  const classes = useStyles();
  return (
    <Container>
      <Formik
        validationSchema={RolValidations}
        initialValues={{
          nombre: "",
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
                  Crear nuevo rol
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  value={values.nombres}
                  name="nombre"
                  helperText={errors.nombre}
                  error={!!(errors.nombre && touched.nombre)}
                ></TextField>
              </Grid>
              </Grid>
             
           
            <div className={classes.buttonBottom}>
              <Button className={classes.button} type="submit">
                Crear
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Rol;
