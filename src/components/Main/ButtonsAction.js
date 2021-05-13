import React from 'react'
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import {
    TextField,
    Typography,
    Button,
    Container,
    Grid,
    InputAdornment,
  } from "@material-ui/core";

const ButtonsAction = (props) => {

  console.log("manito" + props.id);
    
    let history = useHistory();
  
    function handleClickEdit() {
      history.push(props.edit);
    }

    function handleClickDetails() {
      history.push(props.details);
    }

      
    return (
        <div  style={{ margin: "auto" }} >
            <Button
            
              style={{
                fontSize: "12px",
                border: "1px solid #3A3083",
                borderRadius: "15px",
                color: "#3A3083",
                margin: "0 5px 0 5px",
              }}
              component={Link} to = {props.details + props.id} 
              onClick = {handleClickDetails}
            >
              Detalles
            </Button>
            <Button
              style={{
                fontSize: "12px",
                border: "1px solid #3A3083",
                borderRadius: "15px",
                color: "#3A3083",
                margin: "0 5px 0 5px",
              }}
              component = {Link} to = {props.edit + props.id}
              onClick={handleClickEdit}
            >
              Editar
            </Button>
            <Button
              style={{
                backgroundColor: "#3A3083",
                fontSize: "12px",
                borderRadius: "15px",
                color: "white",
                margin: "0 5px 0 5px",
              }}
            >
              Eliminar
            </Button>
          </div>
    )
}

export default ButtonsAction
