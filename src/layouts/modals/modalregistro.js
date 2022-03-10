import { Dialog } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { authStyles } from "../../assets/css/js/authStyles";

import { useState, useEffect } from "react";
import imagen from "../../assets/img/foto-perfil.svg";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import imagenLogo from "../../assets/img/Grupo 1352.png";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import PublicIcon from "@mui/icons-material/Public";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";


import Autocomplete from "@mui/material/Autocomplete";

import {
  Button,
  Divider,
  TextField,
  Link,
  InputAdornment,
} from "@material-ui/core/";

export const Modalregistro = ({ modalRegis, setModalRegis }) => {
  const classes = authStyles();
  const top100Films = [
    { label: 'Colombia', year: 1994 },
    { label: 'Argentina', year: 1972 },
    { label: 'Chile', year: 1974 },
    { label: 'Brasil', year: 2008 },
    { label: 'Venezuela', year: 1957 } ]
  return (
    <>
      <Dialog
        open={modalRegis}
        onClose={() => setModalRegis(false)}
        fullWidth
        maxWidth={"md"}
        PaperProps={{
          style: {
            borderRadius: "50px",
            overflow: "hidden",
            "&::WebkitScrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Grid container className={classes.root}>
          <Grid container justify="flex-end" alignItems="center">
            {/* aqui adento va todo el Formulario de registro */}

            <Grid item xs={12} md={12}>
              <Grid container spacing={1} alignItems="center">
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    backgroundColor: "#F0F2F5",
                    height: "770px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomLeftRadius: "40px",
                    borderTopLeftRadius: "40px",
                    paddingBottom: "5rem",
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
                        marginBottom: "-1rem",
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
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Nombre completo"
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
                          <PersonIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
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
                          <MailIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
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
                          <LockIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
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
                          <NoEncryptionIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
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
                          <PublicIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <Autocomplete className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                             
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            fullWidth
                            renderInput={(params) => (
                              <TextField {...params} label="Pais" />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        style={{
                          background: "#FFB713",
                          marginBottom: "1rem",
                          marginTop: "1rem",
                          fontFamily: "Bebas-Neue",
                          width: "100%",
                        }}
                      >
                        Registrarse
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    backgroundColor: "#FFB714",
                    height: "770px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                >
                  <img
                    className="foto-perfil"
                    src={imagen}
                    alt="imagen-perfil"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
