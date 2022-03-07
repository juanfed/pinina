import { useEffect, useState } from 'react';
import ProfileComponent from '../components/ClientsAndPets/ProfileComponent';
import ClinicHistoryComponent from '../components/ClientsAndPets/ClinicHistoryComponent';
import CPNavBar from '../components/ClientsAndPets/CPNavBar';
import AppBar from '../layouts/AppBar';
import { Grid, Paper } from '@mui/material';
import Vaccines from '../components/ClientsAndPets/Vaccines';
import { Typography } from '@mui/material';
import profileStyles from '../assets/css/js/profileStyles';
//components
import Deworming from '../components/ClientsAndPets/Deworming';
// Snackbar
import { useSnackbar } from "notistack";
import MainAppBar from '../layouts/MainAppBar';
import { getBusinessAdminAction, getBusinessByUserAction, getModulesAction, getUserModulesAction, getUsersBusinessAction, loadModulesByUserAction, saveUserTypeAction } from '../redux/actions/adminAction';
import { useSelector, useDispatch } from 'react-redux';


export default function () {
	// Snackbar Instance
	const { usersBusiness, userAdmin, modules, userModules } = useSelector(state => state.admin);
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [checkModules, setCheckModules] = useState(true);
	const { enqueueSnackbar } = useSnackbar();
	const classes = profileStyles();
	useEffect(() => {
		enqueueSnackbar('Sesión Iniciada', { variant: 'success' });
	}, []);
	useEffect(() => {
		dispatch(getBusinessAdminAction({ id_usuario: user?.id }))
		dispatch(getBusinessByUserAction({ id_usuario: user?.id }));
		dispatch(getUsersBusinessAction());
		dispatch(getModulesAction());
		dispatch(getUserModulesAction());
	}, []);
	useEffect(() => {
		if (usersBusiness.length !== 0) {
			let userData = usersBusiness.filter(i => i.id_usuario === user.id);
			console.log(userData)
			if (userData.length !== 0) {
				if (userData[0].t_adm) {
					dispatch(saveUserTypeAction('admin'));
				} else {
					dispatch(saveUserTypeAction('admin_restri'));
				}
			}
		}
	}, [usersBusiness]);
	useEffect(() => {
		if (userAdmin.length === 0) {
			if (userModules.length !== 0) {
				if (checkModules) {
					const data = userModules.filter(i => i.id_usuario === user.id);
					console.log(data);
					const adminModules = data.filter(i => i.t_adm === true);
					if (adminModules.length !== 0) {
						dispatch(loadModulesByUserAction(adminModules));
						dispatch(saveUserTypeAction('module_admin'));
					} else {
						dispatch(saveUserTypeAction('module_restri'));
					}
					setCheckModules(false)
				}
			}
		}
	}, [userModules, user, userAdmin]);
	return <>
        <MainAppBar />
        <Grid container /* className={classes.background} */>
            <Grid item xs={12}>
                <Grid container spacing={4} className={classes.root}>
                    <Grid item xs={12}>
                        <CPNavBar />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0} justifyContent='center'>
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
                        <Grid container spacing={0} justifyContent='center'>
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
                            {/* <ClinicHistoryComponent /> */}
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0} justifyContent='center'>
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
                        <Grid container spacing={0} justifyContent='center'>
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
                        <Grid container spacing={0} justifyContent='center'>
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
    </>;
}
