import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import NotesIcon from "@material-ui/icons/Notes";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import HistoryIcon from "@material-ui/icons/History";
import moveLogo from "../../sources/img/MOVE_VR.png";
import Routes from "../routes/Routes";
import { BrowserRouter, Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    margin: 0,
  },

  appBar: {
    width: "100%",
    height: 55,
    marginLeft: drawerWidth,
    background: "white",
  },

  container: {
    margin: 0,
    padding: 0,
    maxWidth: "100%",
  },

  fixedTopBar: {
    margin: 0,
    position: "relative",
    boxShadow: "0 1px 0 rgba(0,0,0,.15)",
    width: "100%",
    height: 55,
    display: "flex",
    background: "white",
    justifyContent: "space-between",
  },

  toolBar: {
    padding: "10px 0 10px 10px",
    color: "black",
  },

  logoContainer: {
    width: 150,
    background: "white",
  },
  logoMenu: {
    width: "100%",
  },

  drawerContainer: {
    width: drawerWidth,
    flexShrink: 0,
    "& > div": {
      marginTop: 55,
      backgroundColor: "#3A3083",
      maxWidth: drawerWidth,
    },
  },

  listContainer: {
    backgroundColor: "#3A3083",
    color: "white",
  },
  buttonList: {
    "&:hover": {
      backgroundColor: "#7AB637",
    },
  },

  iconList: {
    color: "white",
    marginRight: "0",
  },

  infoContainer: {
    flexGrow: 1,
    marginTop: 85,
    marginLeft: 180,
    height: 600,
  },
});

const MainView = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar nowrap variant="h6" className={classes.toolBar}>
            <div className={classes.logoContainer}>
              <img src={moveLogo} className={classes.logoMenu}></img>
            </div>
            <Typography>Cerrar Sesión</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawerContainer}
        >
          <List className={classes.listContainer}>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/user"
            >
              <ListItemIcon className={classes.iconList}>
                <PersonIcon></PersonIcon>
              </ListItemIcon>
              <ListItemText>Usuarios</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/perfil"
            >
              <ListItemIcon className={classes.iconList}>
                <GroupIcon></GroupIcon>
              </ListItemIcon>
              <ListItemText>Perfiles</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/roles"
            >
              <ListItemIcon className={classes.iconList}>
                <ChangeHistoryIcon></ChangeHistoryIcon>
              </ListItemIcon>
              <ListItemText>Roles</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/ejercicios"
            >
              <ListItemIcon className={classes.iconList}>
                <SportsHandballIcon></SportsHandballIcon>
              </ListItemIcon>
              <ListItemText>Ejercicios</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/rutinas"
            >
              <ListItemIcon className={classes.iconList}>
                <NotesIcon></NotesIcon>
              </ListItemIcon>
              <ListItemText>Rutinas</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/sesiones"
            >
              <ListItemIcon className={classes.iconList}>
                <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
              </ListItemIcon>
              <ListItemText>Sesiones</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/actividades"
            >
              <ListItemIcon className={classes.iconList}>
                <EmojiFlagsIcon></EmojiFlagsIcon>
              </ListItemIcon>
              <ListItemText>Actividades</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/citas"
            >
              <ListItemIcon className={classes.iconList}>
                <InsertInvitationIcon></InsertInvitationIcon>
              </ListItemIcon>
              <ListItemText>Citas</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.buttonList}
              component={Link}
              to="/historial"
            >
              <ListItemIcon className={classes.iconList}>
                <HistoryIcon></HistoryIcon>
              </ListItemIcon>
              <ListItemText>Historial</ListItemText>
            </ListItem>
          </List>
        </Drawer>

        <Paper className={classes.infoContainer}>
          <Routes />
        </Paper>
      </Container>
    </BrowserRouter>
  );
};

export default MainView;
