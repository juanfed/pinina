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

const ContenedorCentral = () => {
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

      <Grid className="caja c3" container spacing={1} xs={12} md={12}>
        <Grid container xs={12} md={12}>
          {/*  Feed */}
          <Grid className="contenedorFeed" container xs={6} md={6}>
            <Grid container xs={12} md={12}>
              <Grid item xs={3} md={3}>
                <img className="fotoFeed1" src={perfilPerro} alt="feed" />
              </Grid>
              <Grid container xs={2} md={2}>
                <Grid className="tituloFeed1" item xs={12} md={12} style={{ marginBottom: "-20px", marginLeft:"-20px"}}>
                  Lazio
                </Grid>
                <Grid className="tituloFeed2" item xs={12} md={12} style={{  marginLeft:"-20px"}}>
                  Siguiendo
                </Grid>
                <Grid className="tituloFeed3" item xs={12} md={12} style={{ marginTop: "-15px" , marginLeft:"-20px"}}>
                  Nivel 1
                </Grid>
              </Grid>

              <Grid className="puntos" container xs={6} md={6}>
                {" "}
              </Grid>
              <Grid className="puntos" container xs={1} md={1}>
                {" "}
                <img src={puntos} alt="puntos" />
              </Grid>

              <Grid item xs={12} md={12}>
                <img src={feed} alt="feed" />
              </Grid>

              <Grid container xs={12} md={12}>
                <Grid item xs={1} md={1}>
                  <img src={like} alt="Like" />
                </Grid>
                <Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem"}}>
                  2.385 Likes
                </Grid>
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={1} md={1} style={{ margin: "5px"}}>
                  <img src={comentario} alt="Like" />
                </Grid>
                <Grid item xs={1} md={1}>
                  <img src={share} alt="Like" />
                </Grid>

                <Grid className="descripcion"  item xs={12} md={12} >
                  Mira mi nuevo truco, hoy aprendí un nuevo truco, ya puedo
                  saltar y estoy muy feliz, por eso quiero que lo veas.
                </Grid>

                <Grid className="descripcionHora"  item xs={12} md={12} style={{ marginTop:"10px"}}>
                  Hoy 12:26am
                </Grid>

              </Grid>
            </Grid>
          </Grid>

          {/* aqui termina el Feed */}

          {/*  Feed2 */}
          <Grid className="contenedorFeed" container xs={6} md={6}>
            <Grid container xs={12} md={12}>
              <Grid item xs={3} md={3}>
                <img className="fotoFeed1" src={perro2} alt="feed" />
              </Grid>
              <Grid container xs={2} md={2}>
                <Grid className="tituloFeed1" item xs={12} md={12} style={{ marginBottom: "-20px", marginLeft:"-20px"}}>
                  Brando
                </Grid>
                <Grid className="tituloFeed2" item xs={12} md={12} style={{  marginLeft:"-20px"}}>
                  Siguiendo
                </Grid>
                <Grid className="tituloFeed3" item xs={12} md={12} style={{ marginTop: "-15px" , marginLeft:"-20px"}}>
                  Nivel 3
                </Grid>
              </Grid>

              <Grid className="puntos" container xs={6} md={6}>
                {" "}
              </Grid>
              <Grid className="puntos" container xs={1} md={1}>
                {" "}
                <img src={puntos} alt="puntos" />
              </Grid>

              <Grid item xs={12} md={12}>
                <img src={feed2} alt="feed" />
              </Grid>

              <Grid container xs={12} md={12}>
                <Grid item xs={1} md={1}>
                  <img src={like} alt="Like" />
                </Grid>
                <Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem"}}>
                  1.221 Likes
                </Grid>
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={1} md={1} style={{ margin: "5px"}}>
                  <img src={comentario} alt="Like" />
                </Grid>
                <Grid item xs={1} md={1}>
                  <img src={share} alt="Like" />
                </Grid>

                <Grid className="descripcion"  item xs={12} md={12} >
                  Mira mi nuevo truco, hoy aprendí un nuevo truco, ya puedo
                  saltar y estoy muy feliz, por eso quiero que lo veas.
                </Grid>

                <Grid className="descripcionHora"  item xs={12} md={12} style={{ marginTop:"10px"}}>
                  Hoy 12:26am
                </Grid>

              </Grid>
            </Grid>
          </Grid>
          {/* aqui termina el Feed2 */}

         {/*  Feed3 */}
         <Grid className="contenedorFeed" container xs={6} md={6}>
            <Grid container xs={12} md={12}>
              <Grid item xs={3} md={3}>
                <img className="fotoFeed1" src={perro3} alt="feed" />
              </Grid>
              <Grid container xs={2} md={2}>
                <Grid className="tituloFeed1" item xs={12} md={12} style={{ marginBottom: "-20px", marginLeft:"-20px"}}>
                  Tobby
                </Grid>
                <Grid className="tituloFeed2" item xs={12} md={12} style={{  marginLeft:"-20px"}}>
                  Siguiendo
                </Grid>
                <Grid className="tituloFeed3" item xs={12} md={12} style={{ marginTop: "-15px" , marginLeft:"-20px"}}>
                  Nivel 0
                </Grid>
              </Grid>

              <Grid className="puntos" container xs={6} md={6}>
                {" "}
              </Grid>
              <Grid className="puntos" container xs={1} md={1}>
                {" "}
                <img src={puntos} alt="puntos" />
              </Grid>

              <Grid item xs={12} md={12}>
                <img src={feed3} alt="feed" />
              </Grid>

              <Grid container xs={12} md={12}>
                <Grid item xs={1} md={1}>
                  <img src={like} alt="Like" />
                </Grid>
                <Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem"}}>
                  1.221 Likes
                </Grid>
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={1} md={1} style={{ margin: "5px"}}>
                  <img src={comentario} alt="Like" />
                </Grid>
                <Grid item xs={1} md={1}>
                  <img src={share} alt="Like" />
                </Grid>

                <Grid className="descripcion"  item xs={12} md={12} >
                  Mira mi nuevo truco, hoy aprendí un nuevo truco, ya puedo
                  saltar y estoy muy feliz, por eso quiero que lo veas.
                </Grid>

                <Grid className="descripcionHora"  item xs={12} md={12} style={{ marginTop:"10px"}}>
                  Hoy 12:26am
                </Grid>

              </Grid>
            </Grid>
          </Grid>
          {/* aqui termina el Feed3 */}

          {/*  Feed4 */}
          <Grid className="contenedorFeed" container xs={6} md={6}>
            <Grid container xs={12} md={12}>
              <Grid item xs={3} md={3}>
                <img className="fotoFeed1" src={perro4} alt="feed" />
              </Grid>
              <Grid container xs={2} md={2}>
                <Grid className="tituloFeed1" item xs={12} md={12} style={{ marginBottom: "-20px", marginLeft:"-20px"}}>
                  Zeus
                </Grid>
                <Grid className="tituloFeed2" item xs={12} md={12} style={{  marginLeft:"-20px"}}>
                  Siguiendo
                </Grid>
                <Grid className="tituloFeed3" item xs={12} md={12} style={{ marginTop: "-15px" , marginLeft:"-20px"}}>
                  Nivel 2
                </Grid>
              </Grid>

              <Grid className="puntos" container xs={6} md={6}>
                {" "}
              </Grid>
              <Grid className="puntos" container xs={1} md={1}>
                {" "}
                <img src={puntos} alt="puntos" />
              </Grid>

              <Grid item xs={12} md={12}>
                <img src={feed4} alt="feed" />
              </Grid>

              <Grid container xs={12} md={12}>
                <Grid item xs={1} md={1}>
                  <img src={like} alt="Like" />
                </Grid>
                <Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem"}}>
                  1.221 Likes
                </Grid>
                <Grid item xs={5} md={5}></Grid>
                <Grid item xs={1} md={1} style={{ margin: "5px"}}>
                  <img src={comentario} alt="Like" />
                </Grid>
                <Grid item xs={1} md={1}>
                  <img src={share} alt="Like" />
                </Grid>

                <Grid className="descripcion"  item xs={12} md={12} >
                  Mira mi nuevo truco, hoy aprendí un nuevo truco, ya puedo
                  saltar y estoy muy feliz, por eso quiero que lo veas.
                </Grid>

                <Grid className="descripcionHora"  item xs={12} md={12} style={{ marginTop:"10px"}}>
                  Hoy 12:26am
                </Grid>

              </Grid>
            </Grid>
          </Grid>
          {/* aqui termina el Feed4 */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContenedorCentral;
