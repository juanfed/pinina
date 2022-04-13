import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSnackbar } from "notistack";
import axiosClient from '../../../config/AxiosClient';

// Components
import ReduxOptionsDial from '../../../layouts/speedDials/ReduxOptionsDial';
import MainAppBar from '../../../layouts/MainAppBar';

// import T_citasT_mascotasNqo31Modal from '../../components/modals/T_citasT_mascotasNqo31Modal.js';

// import T_citasT_clienteswhSa6Modal from '../../components/modals/T_citasT_clienteswhSa6Modal.js';
//REPLACEIMPORTS



// Actions
import { AddCloseAction, cleanCloseAction, cleanOffAction, cleanOnAction, cleanOpenAction, deleteCloseAction, editCloseAction, editOpenAction, saveCloseAction, sonCloseAction } from '../../../redux/actions/MainAction';

// Material UI Components
import { Grid, Button, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Typography, IconButton, FormLabel, FormControl, FormControlLabel, Checkbox, Box, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@mui/material';

// Styles
import useStyles from '../../../assets/css/js/styles';

// Material UI Icons
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';

const C_citOxUh2Create = () => {

    // Date Instance
    const date = new Date();
    const day =
        date.getDate() > 9
            ? date.getDate().toString()
            : '0' + date.getDate().toString();
    const month =
        date.getMonth() > 8
            ? (date.getMonth() + 1).toString()
            : 0 + (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();

    // Dispatch Instance
    const dispatch = useDispatch();

    // Styles Instance
    const classes = useStyles();

    // Router Instance
    const router = useRouter();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Redux State Extraction
    const { edit, add, deleteData, save, cleanSwitch, son } = useSelector(state => state.main);

    // Local State
    const [loading, setLoading] = useState(false);
    const [idToSearch, setIdToSearch] = useState('');
    const [fieldToSearch, setFieldToSearch] = useState('');
    const [search, setSearch] = useState(false);
    const [queryParam, setQueryParam] = useState({});
    const [loadingConsult, setLoadingConsult] = useState({});
    const [searchResult, setSearchResult] = useState([]);
    const [elementToDelete, setElementToDelete] = useState('');
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState({

        paciente_cita: '',
        propietario_cita: '',
        hora_cita: ''
    });


    const [t_mascotas, setT_mascotas] = useState(false);
    const [t_clientes, setT_clientes] = useState(false);

    // REPLACERESULT

    // Function for handle Change Inputs
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        // REPLACESEARCH
        if (e.target.name === 'profecional_cita') {
            setFieldToSearch('profecional_cita');
            setIdToSearch(e.target.value)
        }


    }

    // Function for handle Submit Form
    const handleSubmit = async () => {
        try {

            // Query
            let response;
            if (add) {
                response = await axiosClient.post('/t_citas/create', data);
            } else if (edit) {
                response = await axiosClient.put('/t_citas/edit', data);
            }
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                if (response.data.id) {
                    setData({
                        ...data,
                        id_cita: response.data.id
                    })
                }
            } else {
                enqueueSnackbar('No se logró realizar la creación', { variant: 'error' });
            }

        } catch (err) {
            setLoading(false);
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            } else {
                enqueueSnackbar(err, { variant: 'error' });
            }
        }
    }

    // Handle Delete
    const handleDelete = (id) => {
        setElementToDelete(id);
        setModalDelete(true);
    }

    const handleClose = () => {
        setElementToDelete('');
        setModalDelete(false);
    }

    const deleteElement = async () => {
        try {

            // Query
            const { data } = await axiosClient.delete('/t_citas/delete/' + elementToDelete);
            if (data.code === 0) {
                enqueueSnackbar(data.msg, { variant: 'success' });
                dispatch(editCloseAction());
            }

        } catch (err) {
            setLoading(false);
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            }
        }
        setModalDelete(false);
    }

    useEffect(() => {
        if (deleteData) {
            handleDelete(data.id);
            dispatch(deleteCloseAction());
        }
    }, [deleteData]);

    useEffect(() => {
        if (save) {
            handleSubmit();
            dispatch(saveCloseAction());
            dispatch(cleanOnAction());
        }
    }, [save]);

    useEffect(() => {
        if (cleanSwitch) {
            setData({
                ...data,
                profecional_cita: ''
            })
            setIdToSearch('');
            dispatch(editCloseAction());
            dispatch(cleanOffAction());
            dispatch(cleanCloseAction());
            dispatch(sonCloseAction());
            setSearch(true);
            //REPLACESETSONS
        }
    }, [cleanSwitch]);


    useEffect(() => {
        const query = async () => {
            try {
                const response = await axiosClient.post('t_citas' + '/read/', { profecional_cita: idToSearch });
                if (response.data.code === 0) {
                    enqueueSnackbar('Se realizo la consulta correctamente', { variant: 'success' });
                    setData(response.data.msg);
                    dispatch(editOpenAction());
                } else {
                    enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
                }
            } catch (error) {
                enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
            }
        }
        if (search) {
            query();
            setSearch(false);
        }
    }, [search]);


    useEffect(() => {
        const query = async () => {
            if (queryParam.paciente_cita) {
                const response = await axiosClient.get('/t_mascotas/Dread/' + queryParam.paciente_cita);
                setData({
                    ...data,
                    paciente_citaDescripcion: response.data.msg[0].nombre_mascota
                })
            }
            setLoadingConsult({
                ...loadingConsult,
                paciente_cita: false
            });
        }
        if (loadingConsult.paciente_cita) {
            query()
        }
    }, [loadingConsult]);

    useEffect(() => {
        const query = async () => {
            if (queryParam.propietario_cita) {
                const response = await axiosClient.get('/t_clientes/Dread/' + queryParam.propietario_cita);
                setData({
                    ...data,
                    propietario_citaDescripcion: response.data.msg[0].primer_nombre
                })
            }
            setLoadingConsult({
                ...loadingConsult,
                propietario_cita: false
            });
        }
        if (loadingConsult.propietario_cita) {
            query()
        }
    }, [loadingConsult]);
    //REPLACECONSULTLIST



    // REPLACETABLE

    return <>
        <ReduxOptionsDial />
        <MainAppBar />
        <Dialog
            open={modalDelete}
            onClose={() => handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Esta Seguro de Eliminar " + elementToDelete}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Si elimina el elemento no podrá ser recuperado.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => deleteElement()} color="secondary" autoFocus>
                    Eliminar
                </Button>
            </DialogActions>
        </Dialog>


        <br />
        <Box m={0} p={1}>

            <Typography variant="h6" className="text-left ml-3 my-3">t_citas</Typography>

            <Grid container justifyContent="center" alignItems="center">


                <Grid item md={12} sm={12} xs={12} className="text-center mb-3">
                    <TextField
                        required={false}
                        type="number"
                        name="profecional_cita"
                        id="profecional_cita"
                        variant="outlined"
                        className={classes.width}
                        label="Profecional cita"
                        placeholder="Ingrese Profecional cita"
                        value={data.profecional_cita}
                        onChange={(e) => handleChange(e)}
                    />


                    <IconButton
                        className="border"
                        onClick={() => {
                            setSearch(true)
                            if (data.profecional_cita === '') {
                                dispatch(editCloseAction());
                                dispatch(cleanCloseAction());
                            }
                        }}
                        size="large">
                        <SearchIcon />
                    </IconButton>

                </Grid>
                {/* REPLACEBLURprofecional_cita */}

                {((add || edit) && !son) && (
                    <>
                        <Grid item md={2} sm={12} xs={12} className="text-center mb-3">

                            <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                                <Typography variant="h6" className="text-left text-info">T_mascotas</Typography>
                                <IconButton
                                    className="border ml-3"
                                    onClick={() => setT_mascotas(!t_mascotas)}
                                    size="large">
                                    {t_mascotas ? <CloseIcon /> : <AddIcon />}
                                </IconButton>
                            </div>


                            <TextField
                                required={false}
                                type="text"
                                name="paciente_cita"
                                id="paciente_cita"
                                variant="outlined"
                                className={classes.width}
                                label="Paciente cita"
                                placeholder="Ingrese Paciente cita"
                                value={data.paciente_citaDescripcion}
                                onChange={(e) => handleChange(e)}
                            />

                        </Grid><Grid item md={2} sm={12} xs={12} className="text-center mb-3">

                            <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                                <Typography variant="h6" className="text-left text-info">T_clientes</Typography>
                                <IconButton
                                    className="border ml-3"
                                    onClick={() => setT_clientes(!t_clientes)}
                                    size="large">
                                    {t_clientes ? <CloseIcon /> : <AddIcon />}
                                </IconButton>
                            </div>


                            <TextField
                                required={false}
                                type="text"
                                name="propietario_cita"
                                id="propietario_cita"
                                variant="outlined"
                                className={classes.width}
                                label="Propietario cita"
                                placeholder="Ingrese Propietario cita"
                                value={data.propietario_citaDescripcion}
                                onChange={(e) => handleChange(e)}
                            />

                        </Grid><Grid item md={2} sm={12} xs={12} className="text-center mb-3">


                            <TextField
                                required={false}
                                type="text"
                                name="hora_cita"
                                id="hora_cita"
                                variant="outlined"
                                className={classes.width}
                                label="Hora cita"
                                placeholder="Ingrese Hora cita"
                                value={data.hora_cita}
                                onChange={(e) => handleChange(e)}
                            />

                        </Grid>

                    </>
                )}


                {(data.id && data.id !== '') && (
                    <div className="all" style={{ zIndex: 3, height: '30vh' }}>
                        {/* REPLACESONSMENU */}
                        <div className="center">
                            <img src="/assets/img/folder.png" alt="" />
                        </div>
                    </div>
                )}



                {/* REPLACESON */}


                {t_mascotas && (
                    <T_citasT_mascotasNqo31Modal t_mascotas={t_mascotas} setT_mascotas={setT_mascotas} consultData={data} setConsultData={setData} />
                )}

                {t_clientes && (
                    <T_citasT_clienteswhSa6Modal t_clientes={t_clientes} setT_clientes={setT_clientes} consultData={data} setConsultData={setData} />
                )}
                {/* REPLACECOMPONENT */}



            </Grid>

        </Box>

    </>;
}

export default C_citOxUh2Create;
