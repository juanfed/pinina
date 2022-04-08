import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Historias from './Historias';
import axiosClient from "../../config/AxiosClient";
import Cards from "./Cards";


const ContenedorCentral = () => {

	const [datos, setDatos] = useState([])
	

	useEffect(() => {
		const datos = async () => {
			const response = await axiosClient.get(
				"/mostrarpublicaciones/8"
			);
			setDatos(response.data.publicaciones);
		}
		datos()
	}, []);


	return (
		<Grid item xs={8} md={8}>
			{/*  Contenedor de arriba */}
			<Historias />

			{/*  Contenedor de abajo */}
			<Grid className="caja c3" container spacing={{ xs: 2, md:3}} columns={{xs: 4, sm: 8, md: 12}} style={{marginBottom: '4rem'}}>
					{/*  Feed */}
					{datos.length && datos.map((dato) => (
						<Cards dato={dato} />
					))}
			</Grid>
		</Grid>
	);
};

export default ContenedorCentral;
