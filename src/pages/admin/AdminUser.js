import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import useStyles from '../../assets/css/js/styles';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { ConsultBusinessAction, AdminUserOpenAction } from "../../redux/actions/MainAction";
// Layout
import MainLayout from '../../layouts/mainLayout';
// Material UI Components
import { Grid, Box, Card, CardActions, CardContent, TextField, MenuItem } from '@material-ui/core';
// Material UI Lab
import { Skeleton } from '@material-ui/lab';
// Components
import CreateAdmin from './roladmin/CreateAdmin';
import CreateProfile from './rolprofile/CreateProfile';

const AdminUser = () => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // State data
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState([]);

    // Redux State Extraction
    const { adminEmpresas } = useSelector( state => state.main );

    // Styles Material UI instance 
    const classes = useStyles();

    useEffect(() => {
        dispatch(ConsultBusinessAction());
        dispatch(AdminUserOpenAction());
    }, []);

    const handleChange = (event) => {
        //console.log(event.target.value);
        if(event.target.value !== ''){
            setData(event.target.value);
            setDataUser({
                ...dataUser,
                nit: event.target.value.nit,
                direccion: event.target.value.direccion_principal,
                id_empresa: event.target.value.id
            });
        }else{
            setData(event.target.value);
            setDataUser({
                ...dataUser,
                nit: 'Ingrese nit',
                direccion: 'Ingrese dirección',
                id_empresa: 0
            });
        }
    };

    return (
        <MainLayout title="Asignación de Usuarios">
            <>
                <br/>
                <Box m={ 0 } p={ 1 } >
                    <Grid container spacing={ 2 } className={ classes.grid }  justify="flex-start" alignItems="center">
                        <Grid item xl={ 12 } sm={ 12} md={ 12 } xs={ 12 }>
                            <Card className={ clsx(classes.media, 'shadow') }>
                                <CardContent className="text-center">
                                    <Grid container display="flex" justify="center" alignItems="flex-end">
                                        <Grid item md={ 4 } sm={ 12 } xs={ 12 } className="text-center">
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                label="Empresa"
                                                value={data}
                                                onChange={handleChange}
                                                helperText="Selecciona tu empresa"
                                                variant="outlined"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                { adminEmpresas.map((option) => (
                                                    <MenuItem key={option.razon_social} value={option}>
                                                        {option.razon_social}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item md={ 4 } sm={ 12 } xs={ 12 }  className="text-center" >
                                            <TextField disabled id="standard-disabled" label="Nit" defaultValue="Ingrese nit" value={dataUser.nit} />
                                        </Grid>
                                        <Grid item md={ 4 } sm={ 12 } xs={ 12 }  className="text-center">
                                            <TextField disabled id="standard-disabled" label="Dirección" defaultValue="Ingrese dirección" value={dataUser.direccion} />
                                        </Grid>
                                    </Grid>
                                    <Grid container display="row" justify="flex-start" alignItems="flex-end">
                                        <Grid item md={ 12 } sm={ 12 } xs={ 12 }>
                                            <h4 className="my-5">Usuarios administradores de la Empresa</h4>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item md={ 10 } xs={ 12 } sm={ 12 } className="border rounded">
                                            <CreateAdmin dataBusiness={ data } />
                                        </Grid>
                                        <Grid item md={ 12 } sm={ 12 } xs={ 12 }>
                                            <h4 className="my-5">Usuarios con perfiles asignados a la Empresa</h4>
                                        </Grid>
                                        <Grid item md={ 10 } xs={ 12 } sm={ 12 } className="border rounded">
                                            <CreateProfile dataBusiness={ data } />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </MainLayout>
    );

}

export default AdminUser;