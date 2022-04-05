import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

import notificacion from "../../assets/img/Notificación.svg";
import perfilMenu from "../../assets/img/perfilderecho.svg";

import iconTitle from "../../assets/img/iconTitle.svg";
import icon2Title from "../../assets/img/consultaLogo.svg";

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

      {/* aqui comienza 1 recordatorio */}

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

          <Grid className="nombreNotificación" item xs={12} md={12}>
            Tetravalente
          </Grid>

          <Grid className="fechaNotificación" item xs={12} md={12}>
            22-03-2022
          </Grid>

          <Grid container xs={12} md={12}>
            <Grid className="BotonNotificación" item xs={6} md={6}>
              <Button
                className="BotonSombras"
                style={{
                  background: "#FFB713",
                  fontFamily: "Montserrat",
                  color: "#8E5207",
                }}
                fullWidth
              >
                Posponer
              </Button>
            </Grid>

            <Grid className="BotonNotificación" item xs={6} md={6}>
              <Button
                className="BotonSombras"
                style={{
                  background: "#FFFF",
                  fontFamily: "Montserrat",
                  color: "#8E5207",
                }}
                fullWidth
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* aqui termina 1 recordatorio */}

       {/* aqui comienza 2do recordatorio */}

       <Grid className="RecordatoriosCont" container xs={12} md={12}>
        <Grid className="Recordatorio" container xs={12} md={12}>
          <Grid className="RecordatorioNaranja" container xs={12} md={12}>
            <Grid className="TituloNotificación" item xs={10} md={10}>
              Próxima cita médica
            </Grid>

            <Grid className="icon2Title" item xs={2} md={2}>
              <img src={icon2Title} alt="iconTitle" />
            </Grid>
          </Grid>

          <Grid className="nombreNotificación" item xs={12} md={12}>
            Consulta general
          </Grid>

          <Grid className="fechaNotificación" item xs={12} md={12}>
            28-03-2023
          </Grid>

          <Grid container xs={12} md={12}>
            <Grid className="BotonNotificación" item xs={6} md={6}>
              <Button
                className="BotonSombras"
                style={{
                  background: "#FFB713",
                  fontFamily: "Montserrat",
                  color: "#8E5207",
                }}
                fullWidth
              >
                Posponer
              </Button>
            </Grid>

            <Grid className="BotonNotificación" item xs={6} md={6}>
              <Button
                className="BotonSombras"
                style={{
                  background: "#FFFF",
                  fontFamily: "Montserrat",
                  color: "#8E5207",
                }}
                fullWidth
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* aqui termina 2do recordatorio */}
      

    </Grid>
  );
};

export default ContenedorDerechoAdmin;
