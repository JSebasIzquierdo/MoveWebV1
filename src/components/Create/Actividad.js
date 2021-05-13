import React from "react";
import useStyles from "../styles";
import { Formik, Form} from "formik";
import { Typography, Grid, Container, TextField, Button } from "@material-ui/core";
import ActividadValidation from "../validations/actividadValidations";

const Actividad = () => {
  const classes = useStyles();
  return (
    <Container>
      <Formik
        validationSchema={ActividadValidation}
        initialValues={{
          nombres: "",
          descripcion: "",
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
          <Typography className={classes.Title}>Crear nueva actividad</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subtitle}>Nombre:</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            InputProps={{ className: classes.textfiel }}
            variant="outlined"
            name="nombres"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.nombres}
            error={!!(errors.nombres && touched.nombres)}
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
            name="descripcion"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.descripcion}
            error={!!(errors.descripcion && touched.descripcion)}
          ></TextField>
        </Grid>
      </Grid>
      <div className={classes.buttonBottomUser}>
        <Button className={classes.button}>Crear</Button>
      </div>
      </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Actividad;
