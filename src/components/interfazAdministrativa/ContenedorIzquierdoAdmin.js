import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import imagenLogo from "../../assets/img/logo hamburguesa.png";
import useStyles from "../../assets/css/js/styles";
import DogLeft from "../../assets/img/perroFoto.svg";
import BackgroundLeft from "../../assets/img/bicolor.svg";



const ContenedorIzquierdoAdmin = () => {

  const classes = useStyles();


  return (
    <Grid className="contLeft"  container xs={12} md={12}>
      <Grid item xs={12} md={12}>
        <img className="logoHamburguesa" src={imagenLogo} alt="logoHamburguesa" />
      </Grid>
      <Grid   container xs={12} md={12}  >
      <Grid item xs={12} md={12} >
        <img className="BackgroundLeft" src={BackgroundLeft} alt="BackgroundLeft" />
      </Grid>

      <Grid item xs={12} md={12}  >
        <img className="DogLeft" src={DogLeft} alt="DogLeft" />
      </Grid>

      <Grid className="ContInfo"  container xs={12} md={12}>
      <Grid className="ContInfoTitulo"  item xs={12} md={12}  >
        Brando Pérez
        </Grid>
        <Grid className="SubTituloCont" container xs={12} md={12}>
        <Grid className="ContInfoSubTitulo"  item xs={12} md={12}  >
        Edad:
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        3 Años
        </Grid>
        </Grid>

        <Grid className="SubTituloCont" container xs={12} md={12}>
        <Grid className="ContInfoSubTitulo"  item xs={12} md={12}  >
        Raza:
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        Criollo
        </Grid>
        </Grid>

        <Grid className="SubTituloCont" container xs={12} md={12}>
        <Grid className="ContInfoSubTitulo"  item xs={12} md={12}  >
        Contacto:
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        +57 313 8919729
        </Grid>
        </Grid>

        <Grid className="SubTituloCont" container xs={12} md={12}>
        <Grid className="ContInfoSubTitulo"  item xs={12} md={12}  >
        Cliente desde:
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        22-03-2022
        </Grid>
        </Grid>

        <Grid className="SubTituloCont" container xs={12} md={12}>
        <Grid className="ContInfoSubTitulo"  item xs={12} md={12}  >
        Dirección:
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        Tv 60c #19-69
        </Grid>
        <Grid className="ContInfoSubTitulo2"  item xs={12} md={12}  >
        Madelena, Bogotá D.C.
        </Grid>
        </Grid>

      </Grid>
      
      </Grid>

    </Grid>
  );
};

export default ContenedorIzquierdoAdmin;
