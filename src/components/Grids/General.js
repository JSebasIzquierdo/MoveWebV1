import React from "react";
import Grid from "../Main/Grid";
import Citas from "../Grids/Citas/Citas";
import user from "../../json/usuario.json";
import roles from "../../json/roles.json";
import ejercicios from "../../json/ejercicios.json";
import perfil from "../../json/perfil.json";
import citas from "../../json/citas.json";
import rutina from "../../json/rutinas.json";
import actividades from "../../json/actividades.json";



export const Ejercicio = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="ID"
        title="Ejercicios"
        id2="name"
        headername2="Ejercicio"
        placeholder="Buscar el ID o nombre de Ejercicio"
        buttonText="Crear nuevo Ejercicio"
        route="/crear/ejercicio"
        id={ejercicios.map((ejercicios) => {
          return { id: ejercicios.id_ejercicio };
        })}
        details="/detalle/ejercicio/"
        rows={ejercicios.map((ejercicios) => {
          return {
            id: ejercicios.id_ejercicio,
            name: ejercicios.nombre_ejercicio,
          };
        })}
      ></Grid>
    </div>
  );
};

export const Perfil = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="ID"
        title="Perfiles"
        id2="name"
        headername2="Perfil"
        placeholder="Buscar el ID o nombre de Perfil"
        buttonText="Crear nuevo Perfil"
        route="/crear/perfil"
        id={perfil.map((perfil) => {
          return { id: perfil.id_perfil };
        })}
        details="/detalle/perfil/"
        rows={perfil.map((perfil) => {
          return { id: perfil.id_perfil, name: perfil.nombre };
        })}
      ></Grid>
    </div>
  );
};

export const Actividades = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="ID"
        title="Actividades"
        id2="name"
        headername2="Actividad"
        placeholder="Buscar el ID o nombre de la actividad"
        buttonText="Crear nueva actividad"
        route="/crear/actividad"
        id={actividades.map((data) => {
          return { id: data.id_actividad };
        })}
        details={"/detalle/actividades/"}
        rows={actividades.map((data) => {
          return { id: data.id_actividad, name: data.nombre };
        })}
      ></Grid>
    </div>
  );
};

export const Rol = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="ID"
        title="Roles"
        id2="name"
        headername2="Rol"
        placeholder="Buscar el ID o nombre de Rol"
        buttonText="Crear nuevo Rol"
        route="/crear/rol"
        id={roles.map((roles) => {
          return { id: roles.id_rol };
        })}
        details="/detalle/rol/"
        rows={roles.map((roles) => {
          return { id: roles.id_rol, name: roles.nombre };
        })}
      ></Grid>
    </div>
  );
};

export const Rutinas = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="ID"
        title="Rutinas"
        id2="name"
        headername2="Rutinas"
        placeholder="Buscar el ID o nombre de Rutinas"
        buttonText="Crear nueva rutinas"
        route="/crear/rutina"
        id={rutina.map((rutina) => {
          return { id: rutina.id_rutina };
        })}
        details="/detalle/rutina/"
        rows={rutina.map((rutina) => {
          return { id: rutina.id_rutina, name: rutina.nombre };
        })}
      ></Grid>
    </div>
  );
};

export const Usuario = () => {
  return (
    <div>
      <Grid
        id1="id"
        headername1="Número de Docuento"
        title="Pacientes"
        id2="name"
        headername2="Nombre"
        placeholder="Buscar el ID o nombre de usuario"
        buttonText="Crear nuevo usuario"
        route="/crear/usuario"
        id={user.map((user) => {
          return { id: user.id_usuario };
        })}
        details="/detalle/usuario/"
        rows={user.map((user) => {
          return { id: user.id_usuario, name: user.nombre_usuario };
        })}
      ></Grid>
    </div>
  );
};
