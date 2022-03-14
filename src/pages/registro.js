import { useState, useEffect } from "react";
import imagen from "../assets/img/foto-perfil.svg";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import imagenLogo from "../assets/img/Grupo 1352.png";

import { registerStyle } from "../../src/assets/css/js/registerStyle";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  Divider,
  TextField,
  Link,
  InputAdornment,
} from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {
  Modal,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";

import InboxIcon from "@mui/icons-material/Inbox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { GridDensityTypes } from "@mui/x-data-grid";
import { Modalregistro } from "../layouts/modals/modalregistro";

export default () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      position: "absolute",
      boxShadow: theme.shadows[5],
    },
  }));

  const classes = registerStyle();
  const [modalRegis, setModalRegis] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xs={2} md={2}></Grid>

        {/* aqui adento va todo el Formulario de registro */}

        <Grid item xs={8} md={8}>
          <Grid container spacing={1} alignItems="center">
            <Grid
              item
              xs={6}
              md={6}
              style={{
                backgroundColor: "#F0F2F5",
                height: "600px",
                display: "flex",
                justifyContent: "center",
                borderBottomLeftRadius: "40px",
                borderTopLeftRadius: "40px",
                paddingBottom: "3rem",
              }}
            >
              <Grid container spacing={1} /*alignItems="center" */>
                {" "}
                {/* aqui comienza el logo */}
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    className="logoRegistro"
                    src={imagenLogo}
                    alt="logo-principal"
                  />
                </Grid>
                {/* hasta aqui va el logo */}
                {/* aqui comienza el titulo */}
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    color: "#81623C",
                  }}
                >
                  <h2>Registro</h2>
                </Grid>{" "}
                {/* hasta aqui va el titulo */}
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                >
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <AccountCircleIcon style={{ color: "#81623C" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        className="textointerno"
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#81623C" },
                        }}
                        fullWidth
                        id="input-with-icon-grid"
                        label="Nombres"
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                >
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <AccountCircleIcon style={{ color: "#81623C" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        className="textointerno"
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#81623C" },
                        }}
                        fullWidth
                        id="input-with-icon-grid"
                        label="Apellidos"
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                >
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <AccountCircleIcon style={{ color: "#81623C" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        className="textointerno"
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#81623C" },
                        }}
                        fullWidth
                        id="input-with-icon-grid"
                        label="Correo electrónico"
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                >
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <AccountCircleIcon style={{ color: "#81623C" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        className="textointerno"
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#81623C" },
                        }}
                        fullWidth
                        id="input-with-icon-grid"
                        label="Contraseña"
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                >
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <AccountCircleIcon style={{ color: "#81623C" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        className="textointerno"
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#81623C" },
                        }}
                        fullWidth
                        id="input-with-icon-grid"
                        label="Confirmar contraseña"
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              md={6}
              style={{
                backgroundColor: "#FFB714",
                height: "600px",
                display: "flex",
                justifyContent: "center",
                borderBottomRightRadius: "40px",
                borderTopRightRadius: "40px",
              }}
            >
              <img className="foto-perfil" src={imagen} alt="imagen-perfil" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} md={2}></Grid>
      </Grid>
      
    </Grid>
  );
};
