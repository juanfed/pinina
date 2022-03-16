import React from "react";
import Grid from "@material-ui/core/Grid";
import imagenLogo from "../../assets/img/logo hamburguesa.png";
import imagenLupa from "../../assets/img/lupa.png";
import imagenEtologia from "../../assets/img/etologia.svg";
import imagenHotel from "../../assets/img/hotel.svg";
import imagenSpa from "../../assets/img/spa.svg";
import imagenTransporte from "../../assets/img/transporte.svg";
import imagenFiestas from "../../assets/img/Fiestas.svg";
import imagenSeguros from "../../assets/img/Seguros.svg";
import imagenFuneraria from "../../assets/img/Funeraria.svg";
import imagenGimnasio from "../../assets/img/Gimnasio.svg";
import imagenofrecerServicios from "../../assets/img/OfrecerServicios.svg";
import imagenAñadir from "../../assets/img/Añadir.svg";
import imagenFoto from "../../assets/img/fotovete.svg";
import imagenFoto2 from "../../assets/img/Grupo 1660.svg";
import imagenFoto3 from "../../assets/img/Grupo 1661.svg";
import imagenFoto4 from "../../assets/img/Grupo 1668.svg";
import imagenPaseador1 from "../../assets/img/paseador1.svg";
import imagenPaseador2 from "../../assets/img/paseador2.svg";
import imagenPaseador3 from "../../assets/img/paseador3.svg";
import imagenPaseador4 from "../../assets/img/paseador4.svg";
import agregarVeterinario from "../../assets/img/agregarveteri.png";
import agregarPaseador from "../../assets/img/agregarpaseador.png";

import { useRouter } from "next/router";


import { useInput } from "@mui/base";
import { styled } from "@mui/system";
import {
  Button,
  Dialog,
  Divider,
  TextField,
  Link,
  InputAdornment,
} from "@material-ui/core/";


const ContenedorIzquierdo = () => {
  const router = useRouter();

  const landing  = () => {
    console.log("hola")
    router.push("/Spa");
    
  };
 

  return (
    <Grid item className="caja c1" xs={2} md={2}>
      <Grid item xs={12} md={12}>
        <img className="logoHamburguesa" src={imagenLogo} alt="logo-menu" />
      </Grid>
      <Grid container spacing={1} xs={12} md={12}>
        <Grid xs={4} md={4}>
          <img className="lupa" src={imagenLupa} alt="logo-Lupa" />
        </Grid>
        <Grid item xs={8} md={8}>
          <form>
            <input
              className="busquedabarra"
              type="text"
              name=""
              placeholder="   Buscar..."
            />
          </form>
        </Grid>
      </Grid>

      <Grid className="contenedores" container spacing={1} xs={12} md={12}>
        <Grid className="anuncios" item xs={12} md={12}>
          Servicios de tu interes{" "}
        </Grid>

        <Grid container spacing={1} xs={12} md={12}>
          <Grid item xs={3} md={3}>
            <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenEtologia} alt="etologia" />
            </Link>

          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              
              <img className="servicios" src={imagenHotel} alt="Hotel" />
              </Link>

          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenSpa} alt="Spa" />
              </Link>
          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img
                className="servicios"
                src={imagenTransporte}
                alt="traporte"
              />
           </Link>
          </Grid>
        </Grid>

        <Grid container spacing={1} xs={12} md={12}>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenFiestas} alt="Fiestas" />
              </Link>
          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenSeguros} alt="Seguros" />
              </Link>
          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img
                className="servicios"
                src={imagenFuneraria}
                alt="Funeraria"
              />
           </Link>
          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenGimnasio} alt="Gimnasio" />
              </Link>
          </Grid>
        </Grid>

        <Grid container spacing={1} xs={12} md={12}>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img
                className="servicios"
                src={imagenofrecerServicios}
                alt="ofrecerServicios"
              />{" "}
           </Link>
          </Grid>
          <Grid item xs={3} md={3}>
          <Link
              component="button"
              variant="body2"
              onClick={landing}
            >
              <img className="servicios" src={imagenAñadir} alt="Añadir" />{" "}
              </Link>
          </Grid>

          <Grid item xs={3} md={3}></Grid>

          <Grid item xs={3} md={3}></Grid>
        </Grid>
      </Grid>

      {/* veterinarios tendencia */}
      <Grid className="contenedores" container xs={12} md={12}>
        <Grid
          className="anuncios"
          item
          xs={8}
          md={8}
          style={{ marginBottom: "1rem" }}
        >
          Veterinarios cerca
        </Grid>
        <Grid
          className="verMas"
          item
          xs={4}
          md={4}
          style={{ color: "#949494" }}
        >
          Ver todos
        </Grid>
        {/* Veterinaro tendencia1 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenFoto} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va Veterinaro tendencia1 */}

        {/* Veterinaro tendencia2 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenFoto2} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va Veterinaro tendencia2 */}

        {/* Veterinaro tendencia3 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenFoto3} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va Veterinaro tendencia3 */}

        {/* Veterinaro tendencia4 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenFoto4} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* agregar veterinario */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={agregarVeterinario} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Veterinario
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Agregar perfil
          </Grid>
        </Grid>

        {/* hasta aqui va agregar veterinario */}
      </Grid>

      {/* hasta aqui va veterinarios tendencia */}

      {/* Paseadores tendencia */}
      <Grid className="contenedores" container xs={12} md={12}>
        <Grid
          className="anuncios"
          item
          xs={8}
          md={8}
          style={{ marginBottom: "1rem" }}
        >
          Paseadores cerca
        </Grid>
        <Grid
          className="verMas"
          item
          xs={4}
          md={4}
          style={{ color: "#949494" }}
        >
          Ver todos
        </Grid>
        {/* paseador tendencia1 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenPaseador1} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va paseador tendencia1 */}

        {/* paseador tendencia2 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenPaseador2} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va paseador tendencia2 */}

        {/* paseador tendencia3 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenPaseador3} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va paseador tendencia3 */}

        {/* paseador tendencia4 */}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={imagenPaseador4} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Juan F. Ruíz
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Bogotá
          </Grid>
          <Grid item xs={12} md={12} style={{ color: "#696969" }}>
            <Button
              style={{
                background: "#FFB713",
                marginBottom: "1rem",
                fontFamily: "Bebas-Neue",
              }}
              fullWidth
            >
              Seguir
            </Button>
          </Grid>
        </Grid>

        {/* hasta aqui va paseador tendencia4 */}

        {/* agregar paseador*/}
        <Grid
          container
          spacing={1}
          xs={6}
          md={6}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "right",
            alignContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <img className="fotos" src={agregarPaseador} alt="foto1" />
          </Grid>

          <Grid item xs={12} md={12}>
            Paseador
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            style={{ color: "#696969", marginTop: "-6px" }}
          >
            Agregar perfil
          </Grid>
        </Grid>

        {/* hasta aqui va agregar paseador */}
      </Grid>

      {/* hasta aqui va paseadores tendencia */}
    </Grid>
  );
};

export default ContenedorIzquierdo;
