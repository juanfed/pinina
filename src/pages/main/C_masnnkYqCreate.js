import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import ReduxOptionsDial from '../../layouts/speedDials/ReduxOptionsDial';
import MainAppBar from '../../layouts/MainAppBar';

import C_hisnnkYqCreateSon from '../../components/sons/C_hisnnkYqCreateSon';

import C_vacnnkYqCreateSon from '../../components/sons/C_vacnnkYqCreateSon';

import T_mascotasT_coloresRRkaCModal from '../../components/modals/T_mascotasT_coloresRRkaCModal.js';

import T_mascotasT_clientesfusxtModal from '../../components/modals/T_mascotasT_clientesfusxtModal.js';

import T_mascotasT_razasre0lsModal from '../../components/modals/T_mascotasT_razasre0lsModal.js';
import { primaryColor } from '../../assets/css/js/mainTheme';
//REPLACEIMPORTS






// Actions
import { AddCloseAction, cleanCloseAction, cleanOffAction, cleanOnAction, cleanOpenAction, deleteCloseAction, editCloseAction, editOpenAction, saveCloseAction, sonCloseAction, searchCloseAction } from '../../redux/actions/MainAction';

// Material UI Components
import { Grid, Button, TextField, List, ListItem, ListItemText, Divider, InputBase } from '@material-ui/core';
import { Typography, IconButton, FormLabel, FormControl, FormControlLabel, Checkbox, Box, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';

// Styles
import useStyles from '../../assets/css/js/styles';

// Material UI Icons
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import RemoveIcon from '@material-ui/icons/Remove';
import WhiteTable from '../../components/tables/WhiteTable';

const C_masnnkYqCreate = () => {

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
    const { edit, add, deleteData, save, cleanSwitch, son, searchBar } = useSelector(state => state.main);
    //userId
    const { user } = useSelector(state => state.auth);

    // Local State
    const [mascotas, setMascotas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [idToSearch, setIdToSearch] = useState(``);
    const [fieldToSearch, setFieldToSearch] = useState('');
    const [search, setSearch] = useState(false);
    const [queryParam, setQueryParam] = useState({});
    const [loadingConsult, setLoadingConsult] = useState({});
    const [searchResult, setSearchResult] = useState([]);
    const [elementToDelete, setElementToDelete] = useState('');
    const [modalDelete, setModalDelete] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [data, setData] = useState({

        id_color: '',
        id_clientes: '',
        escala_edad: '',
        id_raza: '',
        edad_mascota: '',
        nombre_mascota: '',
        fecha_nacimiento: ''
    });


    const [t_colores, setT_colores] = useState(false);
    const [t_clientes, setT_clientes] = useState(false);
    const [t_razas, setT_razas] = useState(false);


    const [t_historias_clinicas, sett_historias_clinicas] = useState(false);
    const [searchResultt_historias_clinicas, setSearchResultt_historias_clinicas] = useState([]);
    const [initialData_historias_clinicas, setinitialData_historias_clinicas] = useState([])

    const [t_vacunas, sett_vacunas] = useState(false);
    const [searchResultt_vacunas, setSearchResultt_vacunas] = useState([]);
    // REPLACERESULT



    // Function for handle Change Inputs
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'nombre_mascota') {
            setFieldToSearch('nombre_mascota');
            setIdToSearch(e.target.value)
        }
        // REPLACESEARCH



    }

    // Function for handle Submit Form
    const handleSubmit = async () => {
        try {

            // Query
            let response;
            if (add) {
                response = await axiosClient.post('/t_mascotas/create', data);
            } else if (edit) {
                response = await axiosClient.put('/t_mascotas/edit', data);
            }
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                if (response.data.id) {
                    setData({
                        ...data,
                        id_mascotas: response.data.id
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
            const { data } = await axiosClient.delete('/t_mascotas/delete/' + elementToDelete);
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
                nombre_mascota: ''
            })
            setIdToSearch('');
            dispatch(editCloseAction());
            dispatch(cleanOffAction());
            dispatch(cleanCloseAction());
            dispatch(sonCloseAction());
            setSearch(true);

            sett_historias_clinicas(false);

            sett_vacunas(false);
            //REPLACESETSONS


        }
    }, [cleanSwitch]);

    useEffect(() => {
        const query = async () => {
            if (queryParam.id_clientes) {
                const response = await axiosClient.get('/t_clientes/Dread/' + queryParam.id_clientes);
                setData({
                    ...data,
                    id_clientesDescripcion: response.data.msg[0].primer_nombre
                })
            }
            setLoadingConsult({
                ...loadingConsult,
                id_clientes: false
            });
        }
        if (loadingConsult.id_clientes) {
            query()
        }
    }, [loadingConsult]);

    useEffect(() => {
        const query = async () => {
            if (queryParam.id_raza) {
                const response = await axiosClient.get('/t_razas/Dread/' + queryParam.id_raza);
                setData({
                    ...data,
                    id_razaDescripcion: response.data.msg[0].nombre_raza
                })
            }
            setLoadingConsult({
                ...loadingConsult,
                id_raza: false
            });
        }
        if (loadingConsult.id_raza) {
            query()
        }
    }, [loadingConsult]);
    //REPLACECONSULTLIST





    useEffect(() => {
        const query = async () => {
            try {
                const response = await axiosClient.get('t_historias_clinicas' + '/readS/' + fieldToSearch + '/' + idToSearch);
                if (response.data.code === 0) {
                    enqueueSnackbar('Se realizo la consulta correctamente', { variant: 'success' });
                    setSearchResultt_historias_clinicas(response.data.msg);
                    setinitialData_historias_clinicas(response.data.msg);
                    setData(response.data.obj);
                    if (!son) {
                        dispatch(editOpenAction());
                        dispatch(cleanOpenAction());
                    }

                    setQueryParam({
                        ...queryParam,
                        id_color: response.data.obj.id_color
                    })
                    setLoadingConsult({
                        ...loadingConsult,
                        id_color: true
                    })
                    '//REPLACEQUERYPARAM'

                } else {
                    enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
                    sett_historias_clinicas(false);
                    setSearchResultt_historias_clinicas([]);
                    setinitialData_historias_clinicas([]);
                    setData({
                        ...data,
                        id_mascotas: '',

                        id_color: '',
                        id_clientes: '',
                        escala_edad: '',
                        id_raza: '',
                        edad_mascota: '',
                        nombre_mascota: '',
                        fecha_nacimiento: ''
                    })
                }
            } catch (error) {
                enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
                sett_historias_clinicas(false);
                setSearchResultt_historias_clinicas([]);
                setinitialData_historias_clinicas([]);
                setData({
                    ...data,
                    id_mascotas: '',

                    id_color: '',
                    id_clientes: '',
                    escala_edad: '',
                    id_raza: '',
                    edad_mascota: '',
                    nombre_mascota: '',
                    fecha_nacimiento: ''
                })
            }
        }
        if (search) {
            query();
            setSearch(false);
        }
    }, [search]);

    useEffect(() => {
        const query = async () => {
            try {
                const response = await axiosClient.get('t_historias_clinicas' + '/readS/' + fieldToSearch + '/' + idToSearch);
                if (response.data.code === 0) {
                    enqueueSnackbar('Se realizo la consulta correctamente', { variant: 'success' });
                    setSearchResultt_historias_clinicas(response.data.msg);
                } else {
                    enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
                    sett_historias_clinicas(false);
                    setSearchResultt_historias_clinicas([]);
                }
            } catch (error) {
                enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
                sett_historias_clinicas(false);
                setSearchResultt_historias_clinicas([]);
            }
        }
        if (search) {
            query();
            setSearch(false);
        }
    }, [search]);

    useEffect(() => {
        const query = async () => {
            try {
                const response = await axiosClient.get('t_vacunas' + '/readS/' + fieldToSearch + '/' + idToSearch);
                if (response.data.code === 0) {
                    enqueueSnackbar('Se realizo la consulta correctamente', { variant: 'success' });
                    setSearchResultt_vacunas(response.data.msg);
                } else {
                    enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
                    sett_vacunas(false);
                    setSearchResultt_vacunas([]);
                }
            } catch (error) {
                enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
                sett_vacunas(false);
                setSearchResultt_vacunas([]);
            }
        }
        if (search) {
            query();
            setSearch(false);
        }
    }, [search]);
    // REPLACETABLE

    //aditional code for general consultation
    const [initialData, setInitialData] = useState([]);
    const [tableData, setTableData] = useState([]);
    //initial rows displayed in table
    const initialTableRows = [
        { id: 0, title: 'Nombre de mascota' },
        { id: 1, title: 'Edad' },
        { id: 2, title: 'Especie' },
        { id: 3, title: 'Raza' },
        { id: 4, title: 'Sexo' },
        { id: 5, title: 'Propietario' },
        { id: 6, title: 'Tamaño' },
        { id: 7, title: 'Más información' }
    ];
    //usestate for change by CRUD manage
    const [tableRows, setTableRows] = useState(initialTableRows);
    const getMascotas = async () => {
        try {
            const res = await axiosClient.post('/mostrarclientes', { id_usuario: user.id });
            if (res.data.code === 1) {
                setMascotas(res.data.user)
            };
        }
        catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        getMascotas();
    }, []);

    useEffect(() => {
        if (mascotas.length !== 0) {
            const data = mascotas.map(i => {
                return {
                    data_0: i.id_clientes,
                    data_1: i.nombre_mascota,
                    data_2: i.edad_mascota,
                    data_3: i.nombre_tipo,
                    data_4: i.raza,
                    data_5: i.tipo,
                    data_6: `${i.primer_nombre} ${i.primer_apellido}`,
                    data_7: i.tamanio,
                    select: true
                }
            });
            setTableData(data);
        }
        console.log(mascotas)
    }, [mascotas]);

    const handleSelect = (mascota) => {
        setSearch(true);
        setFieldToSearch('nombre_mascota');
        setIdToSearch(mascota.data_1)
    }

    useEffect(() => {
        console.log(search)
        console.log(data.nombre_mascota)
    }, [data, search])

    const handleEdit = () => {

    }

    const handleSearchBarChange = ({ target }) => {
        setSearchData(target.value.toLowerCase());
    }

    useEffect(() => {
        if (searchData.length !== 0) {
            const filterData = initialData.filter(i => {
                return (i.nombre_mascota).toLowerCase().includes(searchData) ||
                    (i.nombre_propietario).toLowerCase().includes(searchData) ||
                    (i.apellido_propietario).toLowerCase().includes(searchData) ||
                    (i.nombre_profesional).toLowerCase().includes(searchData) ||
                    (i.apellido_profesional).toLowerCase().includes(searchData) ||
                    (i.descripcion_cita).toLowerCase().includes(searchData) ||
                    (i.fecha_cita).toLowerCase().includes(searchData) ||
                    (i.hora_cita).toLowerCase().includes(searchData)
            });
            setMascotas(filterData);
        } else {
            setMascotas(initialData)
        }
        console.log(searchData)
    }, [searchData])

    const hideAndCleanSearchBar = () => {
        setSearchData('');
        dispatch(searchCloseAction());
    }



    return (
        <>
            <MainAppBar />
            <Grid container justify='flex-start' className={classes.mainContainer}>
                <Grid item>
                    <ReduxOptionsDial title='Mascotas/Clientes' />
                </Grid>
            </Grid>
            <Grid container justify='center' spacing={2} alignItems='center' className={classes.search}>
                {searchBar &&
                    <>
                        <Grid item xs={4}>
                            <Grid container justify='center' alignItems='center' className={classes.searchContainer}>
                                <Grid item>
                                    <Grid container alignItems='center' className={classes.SearchIcon}>
                                        <Grid item>
                                            <SearchIcon className={classes.searchIcon} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBase
                                        fullWidth
                                        placeholder="Buscar..."
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleSearchBarChange}
                                        value={searchData}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size='small'
                                style={{
                                    backgroundColor: '#FFF7C9',
                                    border: `solid 3px ${primaryColor}`,
                                    width: '25px',
                                    height: '25px'
                                }}
                                onClick={hideAndCleanSearchBar}
                            >
                                <CloseIcon style={{
                                    position: 'absoulte',
                                    width: '15px',
                                    height: '15px'
                                }} />
                            </IconButton>
                        </Grid>
                    </>
                }
            </Grid>

            <Grid container justify='center' className={classes.tableContainer}>
                <Grid item xs={12} md={10}>
                    <WhiteTable
                        tableData={tableData}
                        rows={tableRows}
                        handleEdit={handleEdit}
                        handleSelect={handleSelect}
                    /* handleDelete={handleDelete} */
                    />
                </Grid>
            </Grid>

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

                {/* <Typography variant="h6" className="text-left ml-3 my-3">t_mascotas</Typography> */}

                <Grid container justify="center" alignItems="center">


                    {/* <Grid item md={12} sm={12} xs={12} className="text-center mb-3">
                        <TextField
                            required={false}
                            type="text"
                            name="nombre_mascota"
                            id="nombre_mascota"
                            variant="outlined"
                            color='secondary'
                            className={classes.width}
                            label="Nombre mascota"
                            placeholder="Ingrese Nombre mascota"
                            value={data.nombre_mascota}
                            onChange={(e) => handleChange(e)}
                        />


                        <IconButton className="border"
                            onClick={() => {
                                setSearch(true)
                                if (data.nombre_mascota === '') {
                                    dispatch(editCloseAction());
                                    dispatch(cleanCloseAction());
                                }
                            }}
                        >
                            <SearchIcon />
                        </IconButton>

                    </Grid> */}
                    {/* REPLACEBLURnombre_mascota */}

                    {((add || edit) && !son) && (
                        <>
                            <Grid item md={12} sm={12} xs={12} className="text-center mb-3">

                                <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                                    <Typography variant="h6" className="text-left text-info">T_colores</Typography>
                                    <IconButton className="border ml-3" onClick={() => setT_colores(!t_colores)}>
                                        {t_colores ? <CloseIcon /> : <AddIcon />}
                                    </IconButton>
                                </div>


                                <TextField
                                    required={true}
                                    type="text"
                                    name="id_color"
                                    id="id_color"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Id color"
                                    placeholder="Ingrese Id color"
                                    value={data.id_colorDescripcion}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">

                                <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                                    <Typography variant="h6" className="text-left text-info">T_clientes</Typography>
                                    <IconButton className="border ml-3" onClick={() => setT_clientes(!t_clientes)}>
                                        {t_clientes ? <CloseIcon /> : <AddIcon />}
                                    </IconButton>
                                </div>


                                <TextField
                                    required={true}
                                    type="text"
                                    name="id_clientes"
                                    id="id_clientes"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Id clientes"
                                    placeholder="Ingrese Id clientes"
                                    value={data.id_clientesDescripcion}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">


                                <TextField
                                    required={true}
                                    type="text"
                                    name="escala_edad"
                                    id="escala_edad"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Escala edad"
                                    placeholder="Ingrese Escala edad"
                                    value={data.escala_edad}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">

                                <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                                    <Typography variant="h6" className="text-left text-info">T_razas</Typography>
                                    <IconButton className="border ml-3" onClick={() => setT_razas(!t_razas)}>
                                        {t_razas ? <CloseIcon /> : <AddIcon />}
                                    </IconButton>
                                </div>


                                <TextField
                                    required={true}
                                    type="text"
                                    name="id_raza"
                                    id="id_raza"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Id raza"
                                    placeholder="Ingrese Id raza"
                                    value={data.id_razaDescripcion}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">


                                <TextField
                                    required={true}
                                    type="text"
                                    name="edad_mascota"
                                    id="edad_mascota"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Edad mascota"
                                    placeholder="Ingrese Edad mascota"
                                    value={data.edad_mascota}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">


                                <TextField
                                    required={false}
                                    type="text"
                                    name="nombre_mascota"
                                    id="nombre_mascota"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Nombre mascota"
                                    placeholder="Ingrese Nombre mascota"
                                    value={data.nombre_mascota}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid><Grid item md={12} sm={12} xs={12} className="text-center mb-3">


                                <TextField
                                    required={false}
                                    type="text"
                                    name="fecha_nacimiento"
                                    id="fecha_nacimiento"
                                    color='secondary'
                                    variant="outlined"
                                    className={classes.width}
                                    label="Fecha nacimiento"
                                    placeholder="Ingrese Fecha nacimiento"
                                    value={data.fecha_nacimiento}
                                    onChange={(e) => handleChange(e)}
                                />

                            </Grid>

                        </>
                    )}




                    {data.nombre_mascota &&
                        <>
                            <C_hisnnkYqCreateSon
                                search={search}
                                setSearch={setSearch}
                                searchResult={searchResultt_historias_clinicas}
                                fatherParam={data.id_mascotas}
                                idToSearch={idToSearch}
                                setIdToSearch={setIdToSearch}
                                setFieldToSearch={setFieldToSearch}
                                initialData={initialData_historias_clinicas}
                                setSearchResult={setSearchResultt_historias_clinicas}
                            />

                            <C_vacnnkYqCreateSon
                                search={search}
                                setSearch={setSearch}
                                searchResult={searchResultt_vacunas}
                                fatherParam={data.id_mascotas}
                                idToSearch={idToSearch}
                                setIdToSearch={setIdToSearch}
                                setFieldToSearch={setFieldToSearch}
                            />
                            {/* REPLACESON */}
                        </>
                    }



                    {t_colores && (
                        <T_mascotasT_coloresRRkaCModal t_colores={t_colores} setT_colores={setT_colores} consultData={data} setConsultData={setData} />
                    )}

                    {t_clientes && (
                        <T_mascotasT_clientesfusxtModal t_clientes={t_clientes} setT_clientes={setT_clientes} consultData={data} setConsultData={setData} />
                    )}

                    {t_razas && (
                        <T_mascotasT_razasre0lsModal t_razas={t_razas} setT_razas={setT_razas} consultData={data} setConsultData={setData} />
                    )}
                    {/* REPLACECOMPONENT */}




                </Grid>

            </Box>

        </>
    )
}

export default C_masnnkYqCreate;
