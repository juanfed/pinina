import React, { useState } from "react";
import {
  Grid,
  Button,
} from "@mui/material";

import notificacion from "../../assets/img/Notificación.svg";
import perfilMenu from "../../assets/img/perfilderecho.svg";

import iconTitle from "../../assets/img/iconTitle.svg";


const ContenedorDerechoAdmin = () => {
  return (
    <Grid className="contLeft" container xs={12} md={12}>
      <Grid container className="DatosPerfil" xs={12} md={12}>
        <Grid item xs={3} md={3}>
          <img src={notificacion} alt="notificación" />
        </Grid>
        <Grid className="contenedorPerfil" container xs={9} md={9}>
          <Grid className="contenedorNotificación" item xs={3} md={3}>
            <img src={perfilMenu} alt="perfilMenu" />
          </Grid>
          <Grid className="contenedorNombre" item xs={9} md={9}>
            María Fernanda
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}></Grid>

      <Grid className="RecordatoriosCont" container xs={12} md={12}>
        <Grid className="Recordatorio" container xs={12} md={12}>
          <Grid className="RecordatorioNaranja" container xs={12} md={12}>
            <Grid className="TituloNotificación" item xs={10} md={10}>
              Próxima vacuna
            </Grid>

            <Grid className="iconTitle" item xs={2} md={2}>
              <img src={iconTitle} alt="iconTitle" />
            </Grid>
          </Grid>

          <Grid className="TituloNotificación" item xs={10} md={10}>
          Tetravalente
            </Grid>

            <Grid className="TituloNotificación" item xs={10} md={10}>
            22-03-2022
            </Grid>

            <Grid  container xs={12} md={12}>
            <Grid  item xs={6} md={6}>
            <Button
              style={{
                background: "#FFB713",
                fontFamily: "Montserrat",
              }}
              fullWidth
            >
              Posponer
            </Button>
            </Grid>

            <Grid  item xs={6} md={6}>
            <Button
              style={{
                background: "#F0F0F0",
      
                fontFamily: "Montserrat",
              }}
              fullWidth
            >
              Cancelar
            </Button>
            </Grid>
            </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContenedorDerechoAdmin;
