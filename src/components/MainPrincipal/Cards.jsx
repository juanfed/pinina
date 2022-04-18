import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import historia5 from "../../assets/img/historia5.svg";
import puntos from "../../assets/img/circulos.svg";
import Like from "../../assets/img/like.svg";
import comentario from "../../assets/img/comentario.svg";
import share from "../../assets/img/share.svg";
import moment from 'moment';
import { Box, Button, MobileStepper } from "@mui/material";
import Card from '@mui/material/Card';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import axiosClient from "../../config/AxiosClient";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cards = ({ dato }) => {
	const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	let mostrarBotones;
	const [likes, setLikes] = useState(dato.likes_publicacion)
	const [like, setLike] = useState(true);
	const [follow, setFollow] = useState(dato.siguiendo)
	const [comentarios, setComentarios] = useState(false)
	const [coment, setComent] = useState({
		comentario: ''
	});

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


	const darlike = async () => {
		const response = await axiosClient.get(
			`/darlike/${dato.id_publicacion}/8`
		);
		if (like) {
			setLikes(likes + 1)
			setLike(false)
		} else {
			setLikes(likes - 1)
			setLike(true)
		}
	}

	const seguir = async () => {
		const respuesta = await axiosClient.post(
			`/seguircuentausuario/8/${dato.id_clientes}`
		);
		if (follow) {
			setFollow(false)
		} else {
			setFollow(true)
		}
	}

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 480,
		height: 450,
		overflow: 'auto',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		zIndex: 100,
	};

	const comentar = (e) => {
		setComent({ ...coment, [e.target.name]: e.target.value })
	}

	const addComment = async () => {
		const agregarComentario = await axiosClient.post(
			`/crearcomentarios`, {
			id_publicacion: dato.id_publicacion,
			comentario: coment.comentario,
			id_clientes: 8
		})
	}

	const send = (e) => {
		e.preventDefault();
		e.target.reset()
	}

	const deleteComment = async () => {
		const borrarComment = await axiosClient.delete(
			`/eliminarcomentario`, {
			comentario_id: dato.comentarios.comentario_id,
			id_publicacion: dato.comentarios.id_publicacion
		}
		)
	}
	console.log(dato.comentarios);
	return (
		<Card className="contenedorFeed" sx={{ maxWidth: 445 }} key={dato.id_publicacion} style={{ paddingBottom: ".5rem" }}>
			<div className="header--card">

				{dato.foto_perfil_mascota.length ?
					<figure figure className="figura--iconoPerfil">
						<img src={`http://localhost:4001/${dato.foto_perfil_mascota[0].nombre_imagen}`} alt={dato.foto_perfil_mascota[0].nombre_imagen} />
					</figure> :
					<figure className="figura--iconoPerfilDefault">
						<img src={historia5} alt="default" />
					</figure>}
				<Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ cursor: 'pointer' }}>
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
											height: 300,
											display: 'inline-block',
											width: 420,
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
					{mostrarBotones ?
						<MobileStepper
							steps={maxSteps}
							position="absolute"
							activeStep={activeStep}
							style={{ backgroundColor: "transparent", width: "100%", display: "flex", justifyContent: "space-around", padding: "0px" }}
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
						/> : 
						<MobileStepper
							steps={maxSteps}
							position="absolute"
							activeStep={activeStep}
							style={{ backgroundColor: "transparent", width: "100%", display: "flex", 
							justifyContent: "space-around", padding: ".7rem 0rem" }}
							nextButton={

								<Button
									size="small"
									onClick={handleNext}
									disabled={activeStep === maxSteps}>
								</Button>
							}
							backButton={
								<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
								</Button>
							}
						/>}
				</div>
				<Grid container xs={12} md={12} style={{ margin: "0rem .5rem" }}>
					<div className="cards--buton">
						<div className="cards--buton--likes">
							<figure className="cards--buton--likes--figure">
								<img src={Like} alt="Like" onClick={darlike} />
							</figure>

							<p className="cantidadLikes" >
								{likes}
							</p>
						</div>
						<div className="cards--buton--commentAndShare">
							<figure className="cards--buton--coment">
								<img src={comentario} alt="Like" onClick={(() => { setComentarios(true) })} className="boton--comentario" />
							</figure>
							<figure className="cards--buton--share">
								<img src={share} alt="Like" />
							</figure>
						</div>
					</div>

					<Grid className="descripcion" item xs={12} md={12} >
						{dato.descripcion_publicacion}
					</Grid>

					<Grid className="descripcionHora" item xs={12} md={12} style={{ marginTop: "10px" }}>
						{`Fecha: ${moment.utc(dato.fecha_publicacion).format('MM/DD/YYYY')}`}
					</Grid>
					<Grid xs={12} md={12} >




						{comentarios ? <div>
							<Fade in={comentarios} style={{ backgroundColor: '#e4e4e4', borderRadius: '5%', borderColor: '#f48c06' }}>
								{dato.comentarios.length ?
									<Box sx={style} style>
										<div>{dato.comentarios.map((comment) => (
											<List sx={{ width: '100%', maxWidth: 360, bgcolor: '#e4e4e4' }}>
												<ListItem alignItems="flex-start">
													<ListItemText
														secondary={
															<React.Fragment>
																<Typography
																	sx={{ display: 'inline' }}
																	component="span"
																	variant="body2"
																	color="text.primary"
																	style={{ fontSize: "14px", color: '#f48c06', fontWeight: '800', maxWidth: '480px' }}
																>
																	{comment.id_clientes == 8 ? <p className="deleteComment"> <div onClick={deleteComment}><DeleteIcon /></div> {comment.primer_nombre} {comment.primer_apelido} :</p> : <p>{comment.primer_nombre} {comment.primer_apelido}</p>}
																</Typography>
																<p className="comentario">{comment.comentario}</p>

																<br />
															</React.Fragment>
														}
													/>
												</ListItem>
											</List >
										))}
											<div>

												<form onSubmit={send}>
													<textarea type="text" id='comentario' name="comentario" placeholder='Comenta' onChange={comentar} className='comment' />
													<br />
													<br />
													<button onClick={addComment} type='submit'>Publicar</button>
												</form>
												<br />
												<br />
												<button onClick={(() => { setComentarios(false) })}>Cerrar</button>
											</div>
										</div>
									</Box> :
									<Box sx={style}>
										<Typography id="modal-modal-title" variant="h6" component="h2">
											<p>No hay comentarios, se el primero en comentar</p>
											<br />
											<div>
												<form onSubmit={send}>
													<textarea type="text" id='comentario' name="comentario" placeholder='Añade un comentario' onChange={comentar} className='comment' />
													<br />
													<br />
													<button onClick={addComment} type='submit'>Publicar</button>
												</form>
												<br />
												<button onClick={(() => { setComentarios(false) })}>Cerrar</button>
											</div>

										</Typography>
									</Box>}
							</Fade>
						</div> : null}
					</Grid>

				</Grid>
			</Grid>
		</Card>
	)
}

export default Cards