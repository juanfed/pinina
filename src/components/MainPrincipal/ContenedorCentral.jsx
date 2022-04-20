import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Historias from './Historias';
import axiosClient from "../../config/AxiosClient";
import Cards from "./Cards";


const ContenedorCentral = () => {

	const [datos, setDatos] = useState([])
	const idUsuario = localStorage.getItem("id_usuario")
	
	useEffect(() => {
		const datos = async () => {
			const response = await axiosClient.get(
				`mostrarpublicaciones/${idUsuario}`
			);
			setDatos(response.data.publicaciones);
		}
		datos()
	}, []);
	
	
	console.log(localStorage.getItem("id_usuario"))
	return (
		<Grid item xs={8} md={8}>
			{/*  Contenedor de arriba */}
			<Historias />

			{/*  Contenedor de abajo */}
			<div className="caja c3" >
					{/*  Feed */}
					{datos.length && datos.map((dato) => (
						<Cards dato={dato} />
					))}
			</div>
		</Grid>
	);
};

export default ContenedorCentral;
