import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import feed from "../../assets/img/peero1.svg";
import perfilPerro from "../../assets/img/perfilperro.svg";
import puntos from "../../assets/img/circulos.svg";
import like from "../../assets/img/like.svg";
import comentario from "../../assets/img/comentario.svg";
import share from "../../assets/img/share.svg";
import Historias from './Historias';
import moment from 'moment';
import axiosClient from "../../config/AxiosClient";


const ContenedorCentral = () => {

	const [datos, setDatos] = useState([])
	const [comentarios, setComentarios] = useState(true)

	useEffect(() => {
		const datos = async () => {
			const response = await axiosClient.get(
				"/mostrarpublicaciones/"
			);
			setDatos(response.data.publicaciones);
		}
		datos()
	}, []);

	const mostrar = () => {
		console.log(datos);
		console.log(datos[0].nombre_mascota);
		console.log(datos[0].nivel_mascota);
		console.log(datos[0].fecha_publicacion);
		console.log(datos[0].likes_publicacion);
		console.log(datos[0].fotos);
		console.log(datos[0].fotos[0].nombre_imagen);
		console.log(datos[0].comentarios[0].comentario);
	}

	const comment = () =>{
		if(comentarios){
			setComentarios(false)
		}else{
			setComentarios(true)
		}
	}

	return (
		<Grid item xs={8} md={8}>
			{/*  Contenedor de arriba */}
			<Historias />

			{/*  Contenedor de abajo */}
			<button type="text" onClick={mostrar}>Imprimir</button>
			<Grid className="caja c3" container spacing={1} xs={12} md={12}>
				<Grid container xs={12} md={12}>
					{/*  Feed */}
					{datos.length && datos.map((dato) => (
						<Grid className="contenedorFeed" container xs={6} md={6} key={dato.id_publicacion}>

							<Grid container xs={12} md={12} style={{ boder: '2px solid red' }}>
								<Grid item xs={3} md={3}>
									<img className="fotoFeed1" src={perfilPerro} alt="feed" />
								</Grid>
								<Grid container xs={2} md={2}>
									<Grid className="tituloFeed1" item xs={12} md={12} style={{ marginBottom: "-20px", marginLeft: "-20px" }}>
										{dato.nombre_mascota}
									</Grid>
									<Grid className="tituloFeed2" item xs={12} md={12} style={{ marginLeft: "-20px" }}>
										Siguiendo
									</Grid>
									<Grid className="tituloFeed3" item xs={12} md={12} style={{ marginTop: "-15px", marginLeft: "-20px" }}>
										{dato.nivel_mascota ? <p>Nivel: {dato.nivel_mascota}</p> : <p>Nivel: 0</p>}
									</Grid>
								</Grid>

								<Grid className="puntos" container xs={6} md={6}>
								</Grid>
								<Grid className="puntos" container xs={1} md={1}>
									{" "}
									<img src={puntos} alt="puntos" />
								</Grid>

								<Grid item xs={12} md={12} style={{width : '10rem'}}>
									{dato.fotos.map((d) => (
										<figure clasName="figure_Imagen">
											< img src = {`http://localhost:4001/${d.nombre_imagen}`} alt={d.nombre_imagen}/>
										</figure>
									))}
								</Grid>
								<Grid container xs={12} md={12}>
									<Grid item xs={1} md={1}>
										<img src={like} alt="Like" />
									</Grid>
									<Grid className="cantidadLikes" item xs={3} md={3} style={{ margin: "0.8rem" }}>
										{dato.likes_publicacion}
									</Grid>
									<Grid item xs={5} md={5}></Grid>
									<Grid item xs={1} md={1} style={{ margin: "5px" }}>
										<img src={comentario} alt="Like" />
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
										<button type="text" onClick={comment}>Mostrar comentarios</button>
										{comentarios ? null : <div>{dato.comentarios.map((comment)=>(
											<p>{comment.comentario}</p>
										))}</div>}
									</Grid>

								</Grid>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContenedorCentral;
