import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import ReduxOptionsDial from '../../layouts/speedDials/ReduxOptionsDial';
import MainAppBar from '../../layouts/MainAppBar';



import C_ofeTInvehCreateSon from '../../components/sons/C_ofeTInvehCreateSon';
//REPLACEIMPORTS
        

// Actions
import { AddCloseAction, saveOpenAction, searchCloseAction } from '../../redux/actions/MainAction';

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
import SearchIcon from '@mui/icons-material/Search';
import WhiteTable from '../../components/tables/WhiteTable';
import { primaryColor } from '../../assets/css/js/mainTheme';


const C_invTInvehCreate = () => {
    // Dispatch Instance
    const dispatch = useDispatch();

    // Styles Instance
    const classes = useStyles();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Redux State Extraction
    const { edit, add, deleteData, save, cleanSwitch, son, searchBar } = useSelector(state => state.main);
    //userId
    const { user } = useSelector(state => state.auth)

    // Local State
    const [elementToDelete, setElementToDelete] = useState('');
    const [idToSearch, setIdToSearch] = useState('');
    const [fieldToSearch, setFieldToSearch] = useState('');
    const [search, setSearch] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState({
        id_inventario : '',
        
          cantidad_producto: '',
          id_tipo_mascota: '',
          precio_producto: '',
          id_tipo_producto: '',
          id_usuario: '',
          nombre_producto: ''
    });
    //general data for general consultation
    const [t_inventarios, setT_inventarios] = useState([]);
    //data for table
    const [tableData, setTableData] = useState([]);
    //initial rows displayed in table
    const initialTableRows = [
        
          { id: 0, title: 'Cantidad de Producto' },
          { id: 1, title: 'Id de Tipo de Mascota' },
          { id: 2, title: 'Precio de Producto' },
          { id: 3, title: 'Id de Tipo de Producto' },
          { id: 4, title: 'Id de Usuario' },
          { id: 5, title: 'Nombre de Producto' },
        
          { id: 6, title: 'Más Información' }
    ]
    //usestate for change by CRUD manage
    const [tableRows, setTableRows] = useState(initialTableRows);
    //const for searchingBar
    const [searchData, setSearchData] = useState('');
    //save data from consultation
    const [initialData, setInitialData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');

    
    const [ initialDatat_ofertas, setInitialDatat_ofertas ] = useState(false);
    const [ t_ofertas, sett_ofertas ] = useState(false);
    const [ searchResultt_ofertas, setSearchResultt_ofertas ] = useState([]);
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
                response = await axiosClient.post('/t_inventarios/create', data);
            } else if (edit) {
                response = await axiosClient.put('/t_inventarios/edit', data);
            }
            if (response.data.code === 0) {
                setOpenDialog(false);
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                query();
                setData(initialData);
                if (response.data.id) {
                    setData({
                        ...data,
                        id_inventario: response.data.id
                    })
                }
            } else {
                enqueueSnackbar('No se logró realizar la creación', { variant: 'error' });
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
                
                data.cantidad_producto.length &&
                data.id_tipo_mascota.length &&
                data.precio_producto.length &&
                data.id_tipo_producto.length &&
                data.id_usuario.length &&
                data.nombre_producto.length !== 0
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
            const { data } = await axiosClient.delete('/t_inventarios/delete/' + elementToDelete);
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
            const response = await axiosClient.get('t_inventarios' + '/readG/');
            if (response.data.code != -1) {
                setT_inventarios(response.data.msg);
                setInitialData(response.data.msg);
            } else {
                enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
            }
        } catch (error) {
            enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
        }
    }

    //REPLACECONSULTLIST

    
useEffect(() => {
const query = async() => {
    try {
        const response = await axiosClient.get( 't_ofertas' + '/readS/' + fieldToSearch + '/' + idToSearch);
        if (response.data.code === 0) {
            setSearchResultt_ofertas(response.data.msg);
            setInitialDatat_ofertas(response.data.msg);
            setData(response.data.obj);
            //REPLACEQUERYPARAM
        } else {
            enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
            sett_ofertas(false);
            setSearchResultt_ofertas([]);
            setData({
                ...data,
                id_inventario: '',
                
cantidad_producto: '',
id_tipo_mascota: '',
precio_producto: '',
id_tipo_producto: '',
id_usuario: '',
nombre_producto: ''
            })
        }
    } catch (error) {
        enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
        sett_ofertas(false);
        setSearchResultt_ofertas([]);
        setData({
            ...data,
            id_inventario: '',
            
cantidad_producto: '',
id_tipo_mascota: '',
precio_producto: '',
id_tipo_producto: '',
id_usuario: '',
nombre_producto: ''
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
                        const response = await axiosClient.get( 't_ofertas' + '/readS/' + fieldToSearch + '/' + idToSearch);
                        if (response.data.code === 0) {
                            enqueueSnackbar('Se realizo la consulta correctamente', { variant: 'success' });
                            setSearchResultt_ofertas(response.data.msg);
                        } else {
                            enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
                            sett_ofertas(false);
                            setSearchResultt_ofertas([]);
                        }
                    } catch (error) {
                        enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
                        sett_ofertas(false);
                        setSearchResultt_ofertas([]);
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
        if (t_inventarios.length !== 0) {
            const data = t_inventarios.map(i => {
                return {
                    data_0: i.id_inventario,
                    
                    data_1: i.cantidad_producto,
                    data_2: i.id_tipo_mascota,
                    data_3: i.precio_producto,
                    data_4: i.id_tipo_producto,
                    data_5: i.id_usuario,
                    data_6: i.nombre_producto,
                    
                  select: true
                }
            });
            setTableData(data);
        }
    }, [t_inventarios]);

    useEffect(() => {
        if (add) {
            setOpenDialog(true);
            setDialogTitle('Agregar Inventarios');
        }
    }, [add]);

    useEffect(() => {
        if (editItem) {
            setOpenDialog(true);
            setDialogTitle('Editar Inventarios')
            setEditItem(false);
        }
    }, [editItem]);

    useEffect(() => {
        if (edit) {
            setTableData(t_inventarios.map(i => {
                return {
                    data_0: i.id_inventario,
                    
                    data_1: i.cantidad_producto,
                    data_2: i.id_tipo_mascota,
                    data_3: i.precio_producto,
                    data_4: i.id_tipo_producto,
                    data_5: i.id_usuario,
                    data_6: i.nombre_producto,
                    edit: true
                }
            }));
            setTableRows(
                [
                    
                    { id: 0, title: 'Cantidad de Producto' },
                    { id: 1, title: 'Id de Tipo de Mascota' },
                    { id: 2, title: 'Precio de Producto' },
                    { id: 3, title: 'Id de Tipo de Producto' },
                    { id: 4, title: 'Id de Usuario' },
                    { id: 5, title: 'Nombre de Producto' },
                    { id: 6, title: 'Actualizar' }
                ]
            )
        } else {
            setTableData(t_inventarios.map(i => {
                return {
                    data_0: i.id_inventario,
                    
                    data_1: i.cantidad_producto,
                    data_2: i.id_tipo_mascota,
                    data_3: i.precio_producto,
                    data_4: i.id_tipo_producto,
                    data_5: i.id_usuario,
                    data_6: i.nombre_producto,
                    
                  select: true
                }
            }));
            setTableRows(initialTableRows)
        }
    }, [edit, t_inventarios]);

    // Handle Delete
    const handleDelete = (id) => {
        setElementToDelete(id);
        setModalDelete(true);
    }

    const handleSelect = (i) => {
        setSearch(true);
        setFieldToSearch('id_inventario');
        setIdToSearch(i.data_0)
    }

    //functions and effects for manage the searchBar
    const handleSearchBarChange = ({ target }) => {
        setSearchData(target.value.toLowerCase());
    }

    useEffect(() => {
        if (searchData.length !== 0) {
            const filterData = initialData.filter(i => {
                return (i.cantidad_producto).toLowerCase().includes(searchData) ||
               (i.id_tipo_mascota).toLowerCase().includes(searchData) ||
               (i.precio_producto).toLowerCase().includes(searchData) ||
               (i.id_tipo_producto).toLowerCase().includes(searchData) ||
               (i.id_usuario).toLowerCase().includes(searchData) ||
               (i.nombre_producto).toLowerCase().includes(searchData)
              
            });
            setT_inventarios(filterData);
        } else {
            setT_inventarios(initialData)
        }
        console.log(searchData)
    }, [searchData]);

    useEffect(() => {
        if (deleteData) {
            setTableData(t_inventarios.map(i => {
                return {
                    data_0: i.id_inventario,
                    
                    data_1: i.cantidad_producto,
                    data_2: i.id_tipo_mascota,
                    data_3: i.precio_producto,
                    data_4: i.id_tipo_producto,
                    data_5: i.id_usuario,
                    data_6: i.nombre_producto,
                    delete: true
                }
            }));
            setTableRows(
                [
                    
                    { id: 0, title: 'Cantidad de Producto' },
                    { id: 1, title: 'Id de Tipo de Mascota' },
                    { id: 2, title: 'Precio de Producto' },
                    { id: 3, title: 'Id de Tipo de Producto' },
                    { id: 4, title: 'Id de Usuario' },
                    { id: 5, title: 'Nombre de Producto' },
                    { id: 6, title: 'Eliminar' }
                ]
            )
        } else {
            setTableData(t_inventarios.map(i => {
                return {
                    data_0: i.id_inventario,
                    
                    data_1: i.cantidad_producto,
                    data_2: i.id_tipo_mascota,
                    data_3: i.precio_producto,
                    data_4: i.id_tipo_producto,
                    data_5: i.id_usuario,
                    data_6: i.nombre_producto,
                    
                  select: true
                }
            }));
            setTableRows(initialTableRows)
        }
    }, [deleteData, t_inventarios, initialData]);

    const handleEdit = inventarios => {
        setData({
            ...data,
            id_inventario: inventarios.data_0,
            
                cantidad_producto: inventarios.data_1,
                id_tipo_mascota: inventarios.data_2,
                precio_producto: inventarios.data_3,
                id_tipo_producto: inventarios.data_4,
                id_usuario: inventarios.data_5,
                nombre_producto: inventarios.data_6
        })
        setEditItem(true);
    };

    const hideAndCleanSearchBar = () => {
        setSearchData('');
        dispatch(searchCloseAction());
    }

    return <>
        <MainAppBar />
        <Grid container justifyContent='flex-start' className={classes.mainContainer}>
            <Grid item>
                <ReduxOptionsDial title='Inventarios' />
            </Grid>
        </Grid>
        <Grid container justifyContent='center'>

            <Grid container justifyContent='center' spacing={2} alignItems='center' className={classes.search}>
                {searchBar &&
                    <>
                        <Grid item xs={4}>
                            <Grid container justifyContent='center' alignItems='center' className={classes.searchContainer}>
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
        </Grid>
        <Grid container justifyContent='center' className={classes.tableContainer}>
            <Grid item xs={12} md={10}>
                <WhiteTable
                    tableData={tableData}
                    rows={tableRows}
                    handleEdit={handleEdit}
                    handleSelect={handleSelect}
                    handleDelete={handleDelete}
                />
            </Grid>
        </Grid>
        <Dialog
            open={modalDelete}
            onClose={handleClose}
        >
            <Grid
                container
                justifyContent='center'
                className={classes.dialogContainer}
            >
                <Grid item>
                    <DialogTitle
                        align='center'
                        id="alert-dialog-title">
                        Esta Seguro de Eliminar el elemento seleccionado
                    </DialogTitle>
                </Grid>
                <Grid item xs={12}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" align='center'>
                            Si lo elimina no podrá ser recuperado.
                        </DialogContentText>
                    </DialogContent>
                </Grid>
                <Grid item>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            color="primary"
                            variant='contained'
                            fullWidth
                        >
                            <Typography
                                variant='body1'
                            >
                                Cancelar
                            </Typography>
                        </Button>
                        <Button
                            onClick={() => deleteElement()}
                            color="primary"
                            autoFocus
                            variant='contained'
                            fullWidth
                        >
                            <Typography
                                variant='body1'
                            >
                                Eliminar
                            </Typography>
                        </Button>
                    </DialogActions>
                </Grid>
            </Grid>
        </Dialog>
            
        <Dialog
            open={openDialog}
            onClose={handleCloseModal}
            minWidth='xl'
        >
            <Grid container className={classes.dialogContainer}>
                <Grid container
                    justifyContent='center'
                    spacing={1}
                >
                    <Grid container
                        justifyContent='center'
                        className={classes.dialogTitle}
                    >
                        <Grid item xs={8}>
                            <Typography
                                variant='h5'
                                align='center'
                            >
                                {`${dialogTitle}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="cantidad_producto"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Cantidad de Producto"
                            placeholder="Ingrese cantidad de producto"
                            value={data.cantidad_producto}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="id_tipo_mascota"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Tipo de Mascota"
                            placeholder="Ingrese id de tipo de mascota"
                            value={data.id_tipo_mascota}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="precio_producto"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Precio de Producto"
                            placeholder="Ingrese precio de producto"
                            value={data.precio_producto}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="id_tipo_producto"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Tipo de Producto"
                            placeholder="Ingrese id de tipo de producto"
                            value={data.id_tipo_producto}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="id_usuario"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Usuario"
                            placeholder="Ingrese id de usuario"
                            value={data.id_usuario}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="nombre_producto"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Nombre de Producto"
                            placeholder="Ingrese nombre de producto"
                            value={data.nombre_producto}
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
                            <Grid item xs={3}>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    fullWidth
                                    startIcon={<SaveIcon style={{
                                        height: 25,
                                        width: 25
                                    }} />}
                                    onClick={validateFields}
                                >
                                    <Typography
                                        align='center'

                                    >
                                        Guardar
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    onClick={handleCloseModal}
                                    startIcon={<CloseIcon style={{
                                        height: 25,
                                        width: 25
                                    }} />}
                                    fullWidth
                                >
                                    <Typography
                                        align='center'
                                    >
                                        Cancelar
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
        
        {data.id_inventario &&
            <>
            
                <C_ofeTInvehCreateSon
                    search={ search }
                    setSearch={ setSearch }
                    searchResult={ searchResultt_ofertas }
                    setSearchResult={ setSearchResultt_ofertas }
                    fatherParam={ data.id_inventario }
                    idToSearch={ idToSearch }
                    setIdToSearch={ setIdToSearch }
                    setFieldToSearch={ setFieldToSearch }
                    initialData={ initialDatat_ofertas }
                />
                {/* REPLACESON */}
    
            </>
        }
        {/* REPLACECOMPONENT */}
        

    </>;
}

export default C_invTInvehCreate;
