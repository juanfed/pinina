import React from "react";
import Grid from "@material-ui/core/Grid";
import notificacion from "../../assets/img/Notificación.svg";
import perfilMenu from "../../assets/img/perfilderecho.svg";
import tendencia1 from "../../assets/img/tendencia1.svg";
import tendencia2 from "../../assets/img/veterinariotendencia.svg";
import tendencia3 from "../../assets/img/tendencia3.svg";
import tendencia4 from "../../assets/img/tendencia4.svg";
import tendencia5 from "../../assets/img/tendencia5.svg";
import tendencia6 from "../../assets/img/tendencia6.svg";
import tendencia7 from "../../assets/img/tendencia7.svg";
import tendencia8 from "../../assets/img/tendencia8.svg";

const ContenedorDerecho = () => {
  return (
    /* contenedor derecho */
    <Grid item className="caja c4" xs={2} md={2}>
      <Grid container xs={12} md={12}>
        {/* menu perfil y notidicaciones  */}
        <Grid container xs={12} md={12}>
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

        <Grid className="anunciosDerecha" item xs={12} md={12} style={{ marginBottom: "1rem", marginTop: "1rem"}}>
            Veterinarios tendencia
          </Grid>

        {/* veterinarios tendencia  */}
        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7} >
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}  >
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia1} alt="tendencia1" />
          </Grid>
        </Grid>

        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia2} alt="tendencia1" />
          </Grid>
        </Grid>

        <Grid className="anunciosDerecha" item xs={12} md={12} style={{ marginBottom: "1rem", marginTop: "1rem"}}>
            Paseadores tendencia
          </Grid>

        {/* Paseadores tendencia  */}
        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia3} alt="tendencia1" />
          </Grid>
        </Grid>

        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia4} alt="tendencia1" />
          </Grid>
        </Grid>


        <Grid className="anunciosDerecha" item xs={12} md={12} style={{ marginBottom: "1rem", marginTop: "1rem"}}>
            Guarderias tendencia
          </Grid>

        {/* Guarderia tendencia  */}
        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia5} alt="tendencia1" />
          </Grid>
        </Grid>

        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia6} alt="tendencia1" />
          </Grid>
        </Grid>
        


        <Grid className="anunciosDerecha" item xs={12} md={12} style={{ marginBottom: "1rem", marginTop: "1rem"}}>
            Proveedores tendencia
          </Grid>

        {/* proveedores tendencia  */}
        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia7} alt="tendencia1" />
          </Grid>
        </Grid>

        <Grid container xs={12} md={12}>
          
          <Grid container xs={7} md={7}>
            <Grid className="tendencia1" item xs={12} md={12} style={{ marginBottom: "-30px"}}>
              María Fernandez
            </Grid>
            <Grid className="tendencia2" item xs={12} md={12}>
              Veterinario
            </Grid>
            <Grid className="tendencia3" item xs={12} md={12} style={{ marginTop: "-30px"}}>
              Soacha
            </Grid>
          </Grid>

          <Grid item xs={5} md={5}>
            <img className="fotoFeed1" src={tendencia8} alt="tendencia1" />
          </Grid>
        </Grid>



        
        
      </Grid>
    </Grid>
  );
};

export default ContenedorDerecho;
