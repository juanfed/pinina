import React from "react";
import Grid from "@material-ui/core/Grid";
import barraHistorias from "../../assets/img/barra.svg";
import historia1 from "../../assets/img/historia1.svg";
import historia2 from "../../assets/img/historia2.svg";
import historia3 from "../../assets/img/historia3.svg";
import historia4 from "../../assets/img/historia4.svg";
import historia5 from "../../assets/img/historia5.svg";
import historia6 from "../../assets/img/historia6.svg";
import spa1 from "../../assets/img/fotoSpa1.svg";
import mapa from "../../assets/img/mapa.svg";
import facebook from "../../assets/img/logofacebook2.svg";
import instagram from "../../assets/img/logoinstagram2.svg";
import twitter from "../../assets/img/logotwitter2.svg";
import start from "../../assets/img/estrellas.svg";

const Spa = () => {
  return (
    <Grid item xs={8} md={8}>
      {/*  Contenedor de arriba */}
      <Grid item className="caja c2" xs={12} md={12}>
        <img src={barraHistorias} alt="barra" />
      </Grid>
      {/*   Contenedor de las historias */}
      <Grid
        container
        spacing={1}
        xs={12}
        md={12}
        style={{
          marginTop: "-7rem",
        }}
      >
        {/*   1era historia */}
        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia1} alt="historia1" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>

        {/*   2da historia */}

        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia2} alt="historia2" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>

        {/*   3ra historia */}

        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia3} alt="historia3" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>

        {/*   4ta historia */}

        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia4} alt="historia4" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>

        {/*   5ta historia */}

        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia5} alt="historia5" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>

        {/*   6ta historia */}

        <Grid container xs={2} md={2}>
          <Grid className="historiaSubida" item xs={12} md={12}>
            <img src={historia6} alt="historia6" />
          </Grid>
          <Grid className="etiquetas" item xs={12} md={12}>
            #Etiqueta
          </Grid>
        </Grid>
      </Grid>

      {/*  Contenedor de abajo */}

      <Grid className="opcionesSpa" container xs={12} md={12}>
        <Grid className="TitulosPaginas" item xs={12} md={12}>
          Hoteles y guarderías cerca de tí
        </Grid>
        <Grid className="Spa" container xs={12} md={12}>
          <Grid className="fotoServicios" item xs={4} md={4}>
            <img src={spa1} alt="Spa1" />
          </Grid>

          <Grid className="InformacionServicio" container xs={6} md={6}></Grid>

          <Grid className="InformacionServicioMapa" container xs={2} md={2}>
            <Grid className="fotoServicios" item xs={12} md={12}>
              <img src={mapa} alt="mapa" />
            </Grid>

            <Grid container xs={12} md={12}>
              <Grid item xs={6} md={6}></Grid>

              <Grid container xs={6} md={6}>
                <Grid item xs={4} md={4}>
                  <img className="logodefacebook" src={facebook} alt="Spa1" />
                </Grid>
                <Grid item xs={4} md={4}>
                  <img  className="logodeinstagram" src={instagram} alt="Spa1" />
                </Grid>
                <Grid item xs={4} md={4}>
                  <img  className="logodetwitter" src={twitter} alt="Spa1" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
            <img src={start} alt="mapa" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Spa;
