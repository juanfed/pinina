import { useEffect } from 'react';
import ProfileComponent from '../components/ClientsAndPets/ProfileComponent';
import ClinicHistoryComponent from '../components/ClientsAndPets/ClinicHistoryComponent';
import CPNavBar from '../components/ClientsAndPets/CPNavBar';
import AppBar from '../layouts/AppBar';
import { Grid, Paper } from '@material-ui/core';
import Vaccines from '../components/ClientsAndPets/Vaccines';
import { Typography } from '@material-ui/core';
import profileStyles from '../assets/css/js/profileStyles';
//components
import Deworming from '../components/ClientsAndPets/Deworming';
// Snackbar
import { useSnackbar } from "notistack";


export default function () {
	// Snackbar Instance
	const { enqueueSnackbar } = useSnackbar();
	const classes = profileStyles();
	useEffect(() => {
		enqueueSnackbar('Sesión Iniciada', { variant: 'success' });
	}, [])
	return (
		<>
			<Grid container className={classes.background}>
				<Grid item xs={1}>
					<AppBar />
				</Grid>
				<Grid item xs={11}>
					<Grid container spacing={4} className={classes.root}>
						<Grid item xs={12}>
							<CPNavBar />
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid item xs={12} style={{ textAlign: 'center' }} id='profile'>
									<Paper elevation={5} className={classes.titlePaper}>
										<Typography variant='h5'>Perfil</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={3} className={classes.paperContainer}>
								<ProfileComponent />
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid
									item
									xs={12}
									style={{ textAlign: 'center' }}
									id='clinic-history'
								>
									<Paper elevation={3} className={classes.titlePaper}>
										<Typography variant='h5'>Historia Clínica</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={3} className={classes.paperContainer}>
								<ClinicHistoryComponent />
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid
									item
									xs={12}
									style={{ textAlign: 'center' }}
									id='vaccines'
								>
									<Paper elevation={3} className={classes.titlePaper}>
										<Typography variant='h5'>Vacunas</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper className={classes.paperContainer} elevation={3}>
								<Vaccines />
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid
									item
									xs={12}
									style={{ textAlign: 'center' }}
									id='deworming'
								>
									<Paper elevation={5} className={classes.titlePaper}>
										<Typography variant='h5'>Desparasitaciones</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							{/* <Paper className={classes.paperContainer} elevation={3}> */}
							<Deworming />
							{/* </Paper> */}
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid
									item
									xs={12}
									style={{ textAlign: 'center' }}
									id='hospitalization'
								>
									<Paper elevation={5} className={classes.titlePaper}>
										<Typography variant='h5'>Hospitalizaciones</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper className={classes.paperContainer} elevation={3}>
								<Vaccines />
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
