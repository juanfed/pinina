import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import ReduxOptionsDial from '../../layouts/speedDials/ReduxOptionsDial';
import MainAppBar from '../../layouts/MainAppBar';



import C_hisTExamgCreateSon from '../../components/sons/C_hisTExamgCreateSon';
//REPLACEIMPORTS
        

import FotoVacuna from "../../assets/img/fotovacuna1.svg";
import FotoVacuna2 from "../../assets/img/señora1.png";
import FotoVacuna3 from "../../assets/img/señora2.png";
import FotoVacuna4 from "../../assets/img/señora3.png";
import Image from "../../assets/img/botonAceptar.svg";
import Image2 from "../../assets/img/botonCancelar.svg";
import Image3 from "../../assets/img/botonCancelar2.svg";
import Image4 from "../../assets/img/botonAceptar2.svg";

// Actions
import {
    AddCloseAction,
    saveOpenAction,
    searchCloseAction,
} from "../../redux/actions/MainAction";

// Material UI Components
import {
    Grid,
    Button,
    TextField,
    InputBase,
    Box,
    Typography,
    IconButton,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle
} from '@mui/material';

// Styles
import useStyles from '../../assets/css/js/styles';

// Material UI Icons
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import WhiteTable from '../../components/tables/WhiteTable';
import { primaryColor } from '../../assets/css/js/mainTheme';

import ContenedorIzquierdoAdmin from "../../components/interfazAdministrativa/ContenedorIzquierdoAdmin";
import ContenedorDerechoAdmin from "../../components/interfazAdministrativa/ContenedorDerechoAdmin";
import ContenedorDerecho from "../../components/MainPrincipal/ContenederoDerecho";
import FloatMenu from "../../components/floatMenu/index.jsx";

const C_exaTExamgCreate = () => {
    // Dispatch Instance
    const dispatch = useDispatch();

    // Styles Instance
    const classes = useStyles();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Redux State Extraction
    const { edit, add, deleteData, save, cleanSwitch, son, searchBar } = 
        useSelector((state) => state.main);
    //userId
    const { user } = useSelector((state) => state.auth)

    // Local State
    const [elementToDelete, setElementToDelete] = useState('');
    const [idToSearch, setIdToSearch] = useState('');
    const [fieldToSearch, setFieldToSearch] = useState('');
    const [search, setSearch] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState({
        id_examen : '',
        
          id_tipo_examen: '',
          descripcion: '',
          fecha_examen: '',
          resultados: ''
    });
    
    //general data for general consultation
    const [t_examen, setT_examen] = useState([]);
    //data for table
    const [tableData, setTableData] = useState([]);
    //initial rows displayed in table
    const initialTableRows = [
        
          { id: 0, title: 'Id de Tipo de Examen' },
          { id: 1, title: 'Descripcion' },
          { id: 2, title: 'Fecha de Examen' },
          { id: 3, title: 'Resultados' },
        
          { id: 4, title: 'Más Información' }
    ]
    //usestate for change by CRUD manage
    const [tableRows, setTableRows] = useState(initialTableRows);
    //const for searchingBar
    const [searchData, setSearchData] = useState('');
    //save data from consultation
    const [initialData, setInitialData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [loadingConsult, setLoadingConsult] = useState({});
    const [editItem, setEditItem] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');

    
    const [ initialDatat_historias_clinicas, setInitialDatat_historias_clinicas ] = useState(false);
    const [ t_historias_clinicas, sett_historias_clinicas ] = useState(false);
    const [ searchResultt_historias_clinicas, setSearchResultt_historias_clinicas ] = useState([]);
// REPLACERESULT
        

    // Function for handle Change Inputs
    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value.toString()
        });
    }

    //effect for listen the parameter for general consultation from reducer
    // useEffect(() => {
    //     setData({
    //         ...data,
    //         id_usuario: `${user.id}`
    //     })
    // }, [user]);

    // Function for handle Submit Form
    const handleSubmit = async () => {
        try {
            // Query
            let response;
            if (add) {
                axiosClient.defaults.headers.common[
                    'Authorization'
                ] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.post('/t_examen/create', data);
            } else if (edit) {
                axiosClient.defaults.headers.common[
                    'Authorization'
                ] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.put('/t_examen/edit', data);
            }
            if (response.data.code === 0) {
                setOpenDialog(false);
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                query();
                setData(initialData);
                if (response.data.id) {
                    setData({
                        ...data,
                        id_examen: response.data.id
                    })
                }
            } else {
                enqueueSnackbar('No se logró realizar la creación', {
                    variant: 'error'
                });
            }
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            } else {
                enqueueSnackbar(err, { variant: 'error' });
            }
        }
    }

    //function to manage empty fields in the create and update data
    const validateFields = () => {
        if (
                
                data.id_tipo_examen.length &&
                data.descripcion.length &&
                data.fecha_examen.length &&
                data.resultados.length !== 0
            ) {
            handleSubmit();
        } else {
            enqueueSnackbar('No ha rellenado todos los campos', { variant: 'error' });
        }
    }

    //function to close dialog displayed when delete an element
    const handleClose = () => {
        setElementToDelete('');
        setModalDelete(false);
    }

    //async function to manage delete in the CRUD
    const deleteElement = async () => {
        try {

            // Query
            axiosClient.defaults.headers.common[
                'Authorization'
            ] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
            const { data } = await axiosClient.delete(
                '/t_examen/delete/' + elementToDelete
            );
            if (data.code === 0) {
                query();
                enqueueSnackbar(data.msg, { variant: 'success' });
                dispatch(editCloseAction());
            }

        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            }
        }
        setModalDelete(false);
    }

    useEffect(() => {
        query();
    }, []);

    const query = async () => {
        try {
            axiosClient.defaults.headers.common[
                'Authorization'
            ] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
            const response = await axiosClient.get('t_examen' + '/readG/');
            if (response.data.code != -1) {
                setT_examen(response.data.msg);
                setInitialData(response.data.msg);
            } else {
                enqueueSnackbar('La consulta no obtuvo ningún resultado', {
                    variant: 'warning'
                });
            }
        } catch (error) {
            enqueueSnackbar('No se realizo la consulta correctamente', {
                variant: 'error'
            });
        }
    }

    //REPLACECONSULTLIST

    
useEffect(() => {
const query = async() => {
    try {
        axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
        const response = await axiosClient.get( 't_historias_clinicas' + '/readS/' + fieldToSearch + '/' + idToSearch);
        if (response.data.code === 0) {
            setSearchResultt_historias_clinicas(response.data.msg);
            setInitialDatat_historias_clinicas(response.data.msg);
            setData(response.data.obj);
            //REPLACEQUERYPARAM
        } else {
            enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
            sett_historias_clinicas(false);
            setSearchResultt_historias_clinicas([]);
            setData({
                ...data,
                id_examen: '',
                
id_tipo_examen: '',
descripcion: '',
fecha_examen: '',
resultados: ''
            })
        }
    } catch (error) {
        enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
        sett_historias_clinicas(false);
        setSearchResultt_historias_clinicas([]);
        setData({
            ...data,
            id_examen: '',
            
id_tipo_examen: '',
descripcion: '',
fecha_examen: '',
resultados: ''
        })
    }
}
if (search) {
    query();
    setSearch(false);
} 
}, [ search ]);

            useEffect(() => {
                const query = async() => {
                    try {
                        axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                        const response = await axiosClient.get( 't_historias_clinicas' + '/readS/' + fieldToSearch + '/' + idToSearch);
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
            }, [ search ]);
            // REPLACETABLE
        
        

    const handleCloseModal = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        if (t_examen.length !== 0) {
            const data = t_examen.map((i) => {
                return {
                    data_0: i.id_examen,
                    
                    data_1: i.id_tipo_examen,
                    data_2: i.descripcion,
                    data_3: i.fecha_examen,
                    data_4: i.resultados,
                    
                  select: true
                }
            });
            setTableData(data);
        }
    }, [t_examen]);

    useEffect(() => {
        if (add) {
            setOpenDialog(true);
            setDialogTitle('Agregar Examen');
        }
    }, [add]);

    useEffect(() => {
        if (editItem) {
            setOpenDialog(true);
            setDialogTitle('Editar Examen')
            setEditItem(false);
        }
    }, [editItem]);

    useEffect(() => {
        if (edit) {
            setTableData(
                t_examen.map((i) => {
                    return {
                        data_0: i.id_examen,
                        
                    data_1: i.id_tipo_examen,
                    data_2: i.descripcion,
                    data_3: i.fecha_examen,
                    data_4: i.resultados,
                        edit: true
                    };
                })
            );
            setTableRows([
                
                    { id: 0, title: 'Id de Tipo de Examen' },
                    { id: 1, title: 'Descripcion' },
                    { id: 2, title: 'Fecha de Examen' },
                    { id: 3, title: 'Resultados' },
                    { id: 4, title: 'Actualizar' }
            ]);
        } else {
            setTableData(
                t_examen.map((i) => {
                    return {
                        data_0: i.id_examen,
                        
                    data_1: i.id_tipo_examen,
                    data_2: i.descripcion,
                    data_3: i.fecha_examen,
                    data_4: i.resultados,
                        
                  select: true
                    };
                })
            );
            setTableRows(initialTableRows)
        }
    }, [edit, t_examen]);

    // Handle Delete
    const handleDelete = (id) => {
        setElementToDelete(id);
        setModalDelete(true);
    }

    const handleSelect = (i) => {
        setSearch(true);
        setFieldToSearch('id_examen');
        setIdToSearch(i.data_0)
    }

    //functions and effects for manage the searchBar
    const handleSearchBarChange = ({ target }) => {
        setSearchData(target.value.toLowerCase());
    }

    useEffect(() => {
        if (searchData.length !== 0) {
            const filterData = initialData.filter((i) => {
                return (i.id_tipo_examen).toLowerCase().includes(searchData) ||
               (i.descripcion).toLowerCase().includes(searchData) ||
               (i.fecha_examen).toLowerCase().includes(searchData) ||
               (i.resultados).toLowerCase().includes(searchData)
              
            });
            setT_examen(filterData);
        } else {
            setT_examen(initialData)
        }
        console.log(searchData)
    }, [searchData]);

    useEffect(() => {
        if (deleteData) {
            setTableData(
                t_examen.map((i) => {
                    return {
                        data_0: i.id_examen,
                        
                    data_1: i.id_tipo_examen,
                    data_2: i.descripcion,
                    data_3: i.fecha_examen,
                    data_4: i.resultados,
                        delete: true
                    };
                })
            );
            setTableRows([
                
                    { id: 0, title: 'Id de Tipo de Examen' },
                    { id: 1, title: 'Descripcion' },
                    { id: 2, title: 'Fecha de Examen' },
                    { id: 3, title: 'Resultados' },
                    { id: 4, title: 'Eliminar' }
            ])
        } else {
            setTableData(
                t_examen.map(i => {
                    return {
                        data_0: i.id_examen,
                        
                    data_1: i.id_tipo_examen,
                    data_2: i.descripcion,
                    data_3: i.fecha_examen,
                    data_4: i.resultados,
                        
                  select: true
                    };
                })
            );
            setTableRows(initialTableRows)
        }
    }, [deleteData, t_examen, initialData]);

    const handleEdit = examen => {
        setData({
            ...data,
            id_examen: examen.data_0,
            
                id_tipo_examen: examen.data_1,
                descripcion: examen.data_2,
                fecha_examen: examen.data_3,
                resultados: examen.data_4
        });
        setEditItem(true);
    };

    const hideAndCleanSearchBar = () => {
        setSearchData('');
        dispatch(searchCloseAction());
    }

    const buttons = [
        {
          id: 0,
          text: "prueba",
          className: "icon-1",
          icon: <img src="/img/icon-1.svg" width="100%" alt="" />
        },
        {
          id: 1,
          text: "prueba",
          className: "icon-2",
          icon: <img src="/img/icon-2.svg" width="100%" alt="" />
        },
        {
          id: 1,
          text: "prueba",
          className: "icon-3",
          icon: <img src="/img/icon-3.svg" width="100%" alt="" />
        },
        {
          id: 1,
          text: "prueba",
          className: "icon-4",
          icon: <img src="/img/icon-4.svg" width="100%" alt="" />,
        },
    ];

    return (
        <>
            <Grid container className="flex-container">
                <Grid container className="caja c1" xs={2} md={2}>
                    <ContenedorIzquierdoAdmin />

                    <Grid
                        item
                        className="container-floatmenu"
                        xs={12}
                        md={12}
                        style={{
                        zIndex: "1",
                        }}
                    >
                        <FloatMenu buttons={buttons} />
                    </Grid>
                </Grid>

                <Grid container className="caja c1" xs={8} md={8}>
                    {/* Aqui comoenza el contenedor principal */}

                    <Grid className="tituloVacuna" container xs={12} md={12}>
                        <Grid item xs={1} md={1}>
                            <img className="FotoDueños" src={FotoVacuna} alt="feed" />
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <ReduxOptionsDial /* title="Examen" */ />
                        </Grid>

                        <Grid item xs={2} md={2}></Grid>

                        <Grid item xs={1} md={1}>
                            <img className="FotoDueños" src={FotoVacuna2} alt="feed" />
                        </Grid>
                        <Grid item xs={1} md={1}>
                            <img className="FotoDueños" src={FotoVacuna3} alt="feed" />
                        </Grid>
                        <Grid item xs={1} md={1}>
                            <img className="FotoDueños" src={FotoVacuna4} alt="feed" />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid
                            container
                            justifyContent="center"
                            spacing={2}
                            alignItems="center"
                            className={classes.search}
                        >
                            {/*    Barra de busqueda */}
                            {searchBar && (
                                <>
                                    <Grid item xs={4}>
                                        <Grid
                                            container
                                            justifyContent='center'
                                            alignItems='center'
                                            className={classes.searchContainer}
                                        >
                                            <Grid item>
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                    className={classes.SearchIcon}
                                                >
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
                                            <CloseIcon
                                                style={{
                                                    position: 'absoulte',
                                                    width: '15px',
                                                    height: '15px'
                                                }}
                                            />
                                        </IconButton>
                                    </Grid>
                                </>
                            )}{" "}
                            {/*    aqui termina la Barra de busqueda */}
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent='center'
                        className={classes.tableContainer}
                    >
                        <Grid className="TablaGeneral" item xs={12} md={12}>
                            <WhiteTable
                                tableData={tableData}
                                rows={tableRows}
                                handleEdit={handleEdit}
                                handleSelect={handleSelect}
                                handleDelete={handleDelete}
                            />
                        </Grid>
                    </Grid>
                    <Dialog open={modalDelete} onClose={handleClose} >
                        <Grid
                            container
                            justifyContent='center'
                            className={classes.dialogContainer}
                        >
                            <Grid item>
                                <DialogTitle align='center' id="alert-dialog-title">
                                    Esta Seguro de Eliminar el elemento seleccionado
                                </DialogTitle>
                            </Grid>
                            <Grid item xs={12}>
                                <DialogContent>
                                    <DialogContentText
                                        id="alert-dialog-description"
                                        align='center'
                                    >
                                        Si lo elimina no podrá ser recuperado.
                                    </DialogContentText>
                                </DialogContent>
                            </Grid>
                            <Grid item >
                                <DialogActions>
                                    <Button
                                        onClick={handleClose}
                                        style={{
                                            color: "#8E5207",
                                            backgroundImage: `url(${Image4})`,
                                        }}
                                        variant='contained'
                                        fullWidth
                                    >
                                        <Typography variant='body1'>Cancelar</Typography>
                                    </Button>
                                    <Button
                                        onClick={() => deleteElement()}
                                        style={{
                                            color: "#FFB714",
                                        
                                            backgroundImage: `url(${Image3})`,
                                        }}
                                        autoFocus
                                        variant='contained'
                                        fullWidth
                                    >
                                        <Typography variant='body1'>Eliminar</Typography>
                                    </Button>
                                </DialogActions>
                            </Grid>
                        </Grid>
                    </Dialog>
                
                    <Dialog open={openDialog} onClose={handleCloseModal} minWidth='xl'>
                        <Grid container className={classes.dialogContainer}>
                            <Grid container justifyContent='center' spacing={1}>
                                <Grid
                                    container
                                    justifyContent='center'
                                    className={classes.dialogTitle}
                                >
                                    <Grid item xs={8}>
                                        <Typography variant='h5' align='center'>
                                            {`${dialogTitle}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                
                                

                                <Grid item md={6} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        required={false}
                                        type="text"
                                        name="id_tipo_examen"
                                        color='secondary'
                                        size='small'
                                        variant="outlined"
                                        label="Id de Tipo de Examen"
                                        placeholder="Ingrese id de tipo de examen"
                                        value={data.id_tipo_examen}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={6} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        required={false}
                                        type="text"
                                        name="descripcion"
                                        color='secondary'
                                        size='small'
                                        variant="outlined"
                                        label="Descripcion"
                                        placeholder="Ingrese descripcion"
                                        value={data.descripcion}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={6} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        required={false}
                                        type="text"
                                        name="fecha_examen"
                                        color='secondary'
                                        size='small'
                                        variant="outlined"
                                        label="Fecha de Examen"
                                        placeholder="Ingrese fecha de examen"
                                        value={data.fecha_examen}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={6} sm={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        required={false}
                                        type="text"
                                        name="resultados"
                                        color='secondary'
                                        size='small'
                                        variant="outlined"
                                        label="Resultados"
                                        placeholder="Ingrese resultados"
                                        value={data.resultados}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        justifyContent='center'
                                        spacing={2}
                                        style={{
                                            paddingTop: '20px'
                                        }}
                                    >
                                        <Grid item xs={6}>
                                            <Button
                                                variant='contained'
                                                fullWidth
                                                style={{
                                                    color: "#8E5207",
                                                    backgroundImage: `url(${Image})`,
                                                }}

                                                onClick={validateFields}
                                            >
                                                <Typography align='center'>Guardar</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                style={{
                                                    color: "#FFB714",
                                                
                                                    backgroundImage: `url(${Image2})`,
                                                }}
                                                variant='contained'
                                                onClick={handleCloseModal}
                                                
                                                fullWidth
                                            >
                                                <Typography align='center'>Cancelar</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Dialog>
            
                    {data.id_examen &&
                        <>
                        
                <C_hisTExamgCreateSon
                    search={ search }
                    setSearch={ setSearch }
                    searchResult={ searchResultt_historias_clinicas }
                    setSearchResult={ setSearchResultt_historias_clinicas }
                    fatherParam={ data.id_examen }
                    idToSearch={ idToSearch }
                    setIdToSearch={ setIdToSearch }
                    setFieldToSearch={ setFieldToSearch }
                    initialData={ initialDatat_historias_clinicas }
                />
                {/* REPLACESON */}
    
                        </>
                    }
                    {/* REPLACECOMPONENT */}
                </Grid>

                <Grid container className="caja c1" xs={2} md={2}>
                    <ContenedorDerechoAdmin />
                </Grid>
            </Grid>
        </>
    );
};

export default C_exaTExamgCreate;
