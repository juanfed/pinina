import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import historia5 from "../../assets/img/historia5.svg";
import puntos from "../../assets/img/circulos.svg";
import Like from "../../assets/img/like.svg";
import comentario from "../../assets/img/comentario.svg";
import share from "../../assets/img/share.svg";
import moment from 'moment';
import Comments from "./comments";
import { Box, Button, MobileStepper } from "@mui/material";
import Card from '@mui/material/Card';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import axiosClient from "../../config/AxiosClient";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Cards = ({ dato }) => {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    let mostrarBotones;
    const [likes, setLikes] = useState(dato.likes_publicacion)
    const [like, setLike] = useState(true);
    const [follow, setFollow] = useState(dato.siguiendo)

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const maxSteps = dato.fotos.length;
    if (maxSteps > 1) {
        mostrarBotones = true
    } else {
        mostrarBotones = false
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [comentarios, setComentarios] = useState(false)
    const comment = () => {
        if (comentarios) {
            setComentarios(false)
        } else {
            setComentarios(true)
        }
    }

    const darlike = async () =>{
        const response = await axiosClient.get(
            `/darlike/${dato.id_publicacion}/8`
        );
        if(like){
            setLikes(likes + 1)
            setLike(false)
        }else{
            setLikes(likes - 1)
            setLike(true)
        }
    }

    const seguir = async () =>{
        const respuesta = await axiosClient.post(
            `/seguircuentausuario/8/${dato.id_clientes}`
        );
        if(follow){
            setFollow(false)
        }else{
            setFollow(true)
        }
    }
    return (
        <Card className="contenedorFeed" sx={{ maxWidth: 445 }} key={dato.id_publicacion} style={{ paddingBottom: ".5rem" }} onClick={()=>{if(comentarios){setComentarios(false)}}}>
            <div className="header--card">

                {dato.foto_perfil_mascota.length ?
                    <figure figure className="figura--iconoPerfil">
                        <img src={`http://localhost:4001/${dato.foto_perfil_mascota[0].nombre_imagen}`} alt={dato.foto_perfil_mascota[0].nombre_imagen} />
                    </figure> :
                    <figure className="figura--iconoPerfilDefault">
                        <img src={historia5} alt="default" />
                    </figure>}
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" style={{cursor: 'pointer'}}>
                    <p className="tituloFeed1">{dato.nombre_mascota}</p>
                    {follow ? <p onClick={seguir} className="follow">Siguiendo  <PersonRemoveIcon fontSize="small" /> </p> : <p onClick={seguir} className="follow">Seguir  <PersonAddAlt1Icon fontSize="small" /></p>}
                    {dato.nivel_mascota ? <p tituloFeed3>Nivel: {dato.nivel_mascota}</p> : <p tituloFeed3>Nivel: 0</p>}
                </Grid>

                <div>
                    <figure className="figura--puntos">
                        <img src={puntos} alt="puntos" />
                    </figure>
                </div>
            </div>
            <Grid container xs={12} md={12} style={{ boder: '2px solid red' }}>
                <div className="imagen--cards">
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        enableMouseEvents
                        style={{ overflow: "hidden" }}
                    >
                        {dato.fotos.map((item, index) => (
                            <div key={index} className="imagen--card--imagen">
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 255,
                                            display: 'block',
                                            width: 400,
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={`http://localhost:4001/${item.nombre_imagen}`}
                                        alt={item.nombre_imagen}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    {mostrarBotones ? <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        style={{ backgroundColor: "transparent" }}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    /> : null}
                </div>
                <Grid container xs={12} md={12} style={{ margin: "0rem .5rem" }}>
                    <Grid item xs={1} md={1} style={{cursor: "pointer"}}>
                        <img src={Like} alt="Like" onClick={darlike} />
                    </Grid>
                    <Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem" }}>
                        {likes}
                    </Grid>
                    <Grid item xs={5} md={5}></Grid>
                    <Grid item xs={1} md={1} style={{ margin: "5px" }}>
                        <img src={comentario} alt="Like" onClick={comment} className="boton--comentario" />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <img src={share} alt="Like" />
                    </Grid>

                    <Grid className="descripcion" item xs={12} md={12} >
                        {dato.descripcion_publicacion}
                    </Grid>

                    <Grid className="descripcionHora" item xs={12} md={12} style={{ marginTop: "10px" }}>
                        {`Fecha: ${moment.utc(dato.fecha_publicacion).format('MM/DD/YYYY')}`}
                    </Grid>
                    <Grid xs={12} md={12} >
                        <Comments dato={dato} comentarios={comentarios} />
                    </Grid>

                </Grid>
            </Grid>
        </Card>
    )
}

export default Cards