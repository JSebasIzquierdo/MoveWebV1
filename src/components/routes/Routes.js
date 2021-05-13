import React from "react";
import {
  Ejercicio,
  Perfil,
  Actividades,
  Rol,
  Rutinas,
  Usuario,
} from "../Grids/General";
import GridSesiones from "../Grids/Sesiones/Sesiones";
import GridCitas from "../Grids/Citas/Citas";
import GridHistorial from "../Grids/Historial/Historial";
import CreateActividad from "../Create/Actividad";
import CreateCita from "../Create/Cita";
import CreateEjercicio from "../Create/Ejercicio";
import CreatePerfil from "../Create/Perfil";
import CreateRutina from "../Create/Rutina";
import CreateUsuario from "../Create/Usuario";
import CreateRol from "../Create/Rol";
import DetailUser from '../Details/Usuario';
import DetailProfile from '../Details/Perfil';
import DetailRol from '../Details/Rol';
import DetailEjercicio from '../Details/Ejercicio';
import DetailRutina from '../Details/Rutina';
import DetailActividad from '../Details/Actividad';
import DetailCita from '../Details/Cita';
import DetailHistorial from '../Details/Historial';
import { Route } from "react-router-dom";


const Routes = () => {
   
  return (
    <div>
      {/* Rutas Base*/}
      <Route exact path="/" component={Usuario} />
      <Route path="/user" component={Usuario} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/roles" component={Rol} />
      <Route path="/ejercicios" component={Ejercicio} />
      <Route path="/rutinas" component={Rutinas} />
      <Route path="/sesiones" component={GridSesiones} />
      <Route path="/actividades" component={Actividades} />
      <Route path="/citas" component={GridCitas} />
      <Route path="/historial" component={GridHistorial} />

      {/* Rutas Crear*/}

      <Route path="/crear/actividad" component={CreateActividad} />
      <Route path="/crear/ejercicio" component={CreateEjercicio} />
      <Route path="/crear/perfil" component={CreatePerfil} />
      <Route path="/crear/rutina" component={CreateRutina} />
      <Route path="/crear/usuario" component={CreateUsuario} />
      <Route path="/crear/rol" component={CreateRol} />
      <Route path="/crear/cita" component={CreateCita} />

      {/* Rutas Detalles*/}

      <Route exact path="/detalle/cita/:id" component={DetailCita} />
      <Route exact path="/detalle/ejercicio/:id" component={DetailEjercicio} />
      <Route exact path="/detalle/perfil/:id" component={DetailProfile} />
      <Route exact path="/detalle/rutina/:id" component={DetailRutina} />
      <Route exact path="/detalle/usuario/:id" component={DetailUser} />
      <Route exact path="/detalle/rol/:id" component={DetailRol} />
      <Route exact path="/detalle/actividades/:id" component={DetailActividad} />
      <Route exact path="/detalle/historial/:id" component={DetailHistorial} />
    </div>
  );
};

export default Routes;
