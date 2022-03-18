import React from "react";
import Grid from "@material-ui/core/Grid";
import barraHistorias from "../../assets/img/barra.svg";
import feed from "../../assets/img/peero1.svg";
import feed2 from "../../assets/img/perro2.svg";
import feed3 from "../../assets/img/feed3.svg";
import feed4 from "../../assets/img/feed4.svg";
import historia1 from "../../assets/img/historia1.svg";
import historia2 from "../../assets/img/historia2.svg";
import historia3 from "../../assets/img/historia3.svg";
import historia4 from "../../assets/img/historia4.svg";
import historia5 from "../../assets/img/historia5.svg";
import historia6 from "../../assets/img/historia6.svg";
import perfilPerro from "../../assets/img/perfilperro.svg";
import perro2 from "../../assets/img/perfilperro2.svg";
import perro3 from "../../assets/img/fercho.svg";
import perro4 from "../../assets/img/laika.svg";
import puntos from "../../assets/img/circulos.svg";
import like from "../../assets/img/like.svg";
import comentario from "../../assets/img/comentario.svg";
import share from "../../assets/img/share.svg";

const Historias = () => {
  return (
    <Grid item xs={12} md={12}>
      {/*  barra de las historias */}
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

      </Grid>

      );
};

export default Historias;