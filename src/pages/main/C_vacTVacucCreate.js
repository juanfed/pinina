import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import ReduxOptionsDial from '../../layouts/speedDials/ReduxOptionsDial';
import MainAppBar from '../../layouts/MainAppBar';


import ListaTipoVacunasMain from '../../components/lists/T_vacunasT_tipo_vacunasSxx9zList.js';
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
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import WhiteTable from '../../components/tables/WhiteTable';
import { primaryColor } from '../../assets/css/js/mainTheme';


const C_vacTVacucCreate = () => {
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
        id_vacuna : '',
        
          id_tipo_vacunas: '',
          id_mascotas: '',
          id_clientes: '',
          id_usuario: '',
          sintomas_vacuna: '',
          fecha_vacuna: '',
          dosis: '',
          fecha_proxima_vacuna: ''
    });
    
    //general data for general consultation
    const [t_vacunas, setT_vacunas] = useState([]);
    //data for table
    const [tableData, setTableData] = useState([]);
    //initial rows displayed in table
    const initialTableRows = [
        
          { id: 0, title: 'Id de Tipo de Vacunas' },
          { id: 1, title: 'Id de Mascotas' },
          { id: 2, title: 'Id de Clientes' },
          { id: 3, title: 'Id de Usuario' },
          { id: 4, title: 'Sintomas de Vacuna' },
          { id: 5, title: 'Fecha de Vacuna' },
          { id: 6, title: 'Dosis' },
          { id: 7, title: 'Fecha de Proxima de Vacuna' },
        
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
                axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.post('/t_vacunas/create', data);
            } else if (edit) {
                axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.put('/t_vacunas/edit', data);
            }
            if (response.data.code === 0) {
                setOpenDialog(false);
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                query();
                setData(initialData);
                if (response.data.id) {
                    setData({
                        ...data,
                        id_vacuna: response.data.id
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
                
                data.id_tipo_vacunas.length &&
                data.id_mascotas.length &&
                data.id_clientes.length &&
                data.id_usuario.length &&
                data.sintomas_vacuna.length &&
                data.fecha_vacuna.length &&
                data.dosis.length &&
                data.fecha_proxima_vacuna.length !== 0
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
            axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
            const { data } = await axiosClient.delete('/t_vacunas/delete/' + elementToDelete);
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
            axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
            const response = await axiosClient.get('t_vacunas' + '/readG/');
            if (response.data.code != -1) {
                setT_vacunas(response.data.msg);
                setInitialData(response.data.msg);
            } else {
                enqueueSnackbar('La consulta no obtuvo ningún resultado', { variant: 'warning' });
            }
        } catch (error) {
            enqueueSnackbar('No se realizo la consulta correctamente', { variant: 'error' });
        }
    }

    //REPLACECONSULTLIST

    // REPLACETABLE

    const handleCloseModal = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        if (t_vacunas.length !== 0) {
            const data = t_vacunas.map(i => {
                return {
                    data_0: i.id_vacuna,
                    
                    data_1: i.id_tipo_vacunas,
                    data_2: i.id_mascotas,
                    data_3: i.id_clientes,
                    data_4: i.id_usuario,
                    data_5: i.sintomas_vacuna,
                    data_6: i.fecha_vacuna,
                    data_7: i.dosis,
                    data_8: i.fecha_proxima_vacuna,
                    
                }
            });
            setTableData(data);
        }
    }, [t_vacunas]);

    useEffect(() => {
        if (add) {
            setOpenDialog(true);
            setDialogTitle('Agregar Vacunas');
        }
    }, [add]);

    useEffect(() => {
        if (editItem) {
            setOpenDialog(true);
            setDialogTitle('Editar Vacunas')
            setEditItem(false);
        }
    }, [editItem]);

    useEffect(() => {
        if (edit) {
            setTableData(t_vacunas.map(i => {
                return {
                    data_0: i.id_vacuna,
                    
                    data_1: i.id_tipo_vacunas,
                    data_2: i.id_mascotas,
                    data_3: i.id_clientes,
                    data_4: i.id_usuario,
                    data_5: i.sintomas_vacuna,
                    data_6: i.fecha_vacuna,
                    data_7: i.dosis,
                    data_8: i.fecha_proxima_vacuna,
                    edit: true
                }
            }));
            setTableRows(
                [
                    
                    { id: 0, title: 'Id de Tipo de Vacunas' },
                    { id: 1, title: 'Id de Mascotas' },
                    { id: 2, title: 'Id de Clientes' },
                    { id: 3, title: 'Id de Usuario' },
                    { id: 4, title: 'Sintomas de Vacuna' },
                    { id: 5, title: 'Fecha de Vacuna' },
                    { id: 6, title: 'Dosis' },
                    { id: 7, title: 'Fecha de Proxima de Vacuna' },
                    { id: 8, title: 'Actualizar' }
                ]
            )
        } else {
            setTableData(t_vacunas.map(i => {
                return {
                    data_0: i.id_vacuna,
                    
                    data_1: i.id_tipo_vacunas,
                    data_2: i.id_mascotas,
                    data_3: i.id_clientes,
                    data_4: i.id_usuario,
                    data_5: i.sintomas_vacuna,
                    data_6: i.fecha_vacuna,
                    data_7: i.dosis,
                    data_8: i.fecha_proxima_vacuna,
                    
                }
            }));
            setTableRows(initialTableRows)
        }
    }, [edit, t_vacunas]);

    // Handle Delete
    const handleDelete = (id) => {
        setElementToDelete(id);
        setModalDelete(true);
    }

    const handleSelect = (i) => {
        setSearch(true);
        setFieldToSearch('id_vacuna');
        setIdToSearch(i.data_0)
    }

    //functions and effects for manage the searchBar
    const handleSearchBarChange = ({ target }) => {
        setSearchData(target.value.toLowerCase());
    }

    useEffect(() => {
        if (searchData.length !== 0) {
            const filterData = initialData.filter(i => {
                return (i.id_tipo_vacunas).toLowerCase().includes(searchData) ||
               (i.id_mascotas).toLowerCase().includes(searchData) ||
               (i.id_clientes).toLowerCase().includes(searchData) ||
               (i.id_usuario).toLowerCase().includes(searchData) ||
               (i.sintomas_vacuna).toLowerCase().includes(searchData) ||
               (i.fecha_vacuna).toLowerCase().includes(searchData) ||
               (i.dosis).toLowerCase().includes(searchData) ||
               (i.fecha_proxima_vacuna).toLowerCase().includes(searchData)
              
            });
            setT_vacunas(filterData);
        } else {
            setT_vacunas(initialData)
        }
        console.log(searchData)
    }, [searchData]);

    useEffect(() => {
        if (deleteData) {
            setTableData(t_vacunas.map(i => {
                return {
                    data_0: i.id_vacuna,
                    
                    data_1: i.id_tipo_vacunas,
                    data_2: i.id_mascotas,
                    data_3: i.id_clientes,
                    data_4: i.id_usuario,
                    data_5: i.sintomas_vacuna,
                    data_6: i.fecha_vacuna,
                    data_7: i.dosis,
                    data_8: i.fecha_proxima_vacuna,
                    delete: true
                }
            }));
            setTableRows(
                [
                    
                    { id: 0, title: 'Id de Tipo de Vacunas' },
                    { id: 1, title: 'Id de Mascotas' },
                    { id: 2, title: 'Id de Clientes' },
                    { id: 3, title: 'Id de Usuario' },
                    { id: 4, title: 'Sintomas de Vacuna' },
                    { id: 5, title: 'Fecha de Vacuna' },
                    { id: 6, title: 'Dosis' },
                    { id: 7, title: 'Fecha de Proxima de Vacuna' },
                    { id: 8, title: 'Eliminar' }
                ]
            )
        } else {
            setTableData(t_vacunas.map(i => {
                return {
                    data_0: i.id_vacuna,
                    
                    data_1: i.id_tipo_vacunas,
                    data_2: i.id_mascotas,
                    data_3: i.id_clientes,
                    data_4: i.id_usuario,
                    data_5: i.sintomas_vacuna,
                    data_6: i.fecha_vacuna,
                    data_7: i.dosis,
                    data_8: i.fecha_proxima_vacuna,
                    
                }
            }));
            setTableRows(initialTableRows)
        }
    }, [deleteData, t_vacunas, initialData]);

    const handleEdit = vacunas => {
        setData({
            ...data,
            id_vacuna: vacunas.data_0,
            
                id_tipo_vacunas: vacunas.data_1,
                id_mascotas: vacunas.data_2,
                id_clientes: vacunas.data_3,
                id_usuario: vacunas.data_4,
                sintomas_vacuna: vacunas.data_5,
                fecha_vacuna: vacunas.data_6,
                dosis: vacunas.data_7,
                fecha_proxima_vacuna: vacunas.data_8
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
                <ReduxOptionsDial title='Vacunas' />
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
                        <ListaTipoVacunasMain
                            consultData={data}
                            setConsultData={setData}
                        />
                    </Grid>
                    

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="id_mascotas"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Mascotas"
                            placeholder="Ingrese id de mascotas"
                            value={data.id_mascotas}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="id_clientes"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Clientes"
                            placeholder="Ingrese id de clientes"
                            value={data.id_clientes}
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
                            name="sintomas_vacuna"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Sintomas de Vacuna"
                            placeholder="Ingrese sintomas de vacuna"
                            value={data.sintomas_vacuna}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="fecha_vacuna"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Fecha de Vacuna"
                            placeholder="Ingrese fecha de vacuna"
                            value={data.fecha_vacuna}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="dosis"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Dosis"
                            placeholder="Ingrese dosis"
                            value={data.dosis}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="fecha_proxima_vacuna"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Fecha de Proxima de Vacuna"
                            placeholder="Ingrese fecha de proxima de vacuna"
                            value={data.fecha_proxima_vacuna}
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
        
        {data.id_vacuna &&
            <>
            {/* REPLACESON */}
            </>
        }
        {/* REPLACECOMPONENT */}
        

    </>;
}

export default C_vacTVacucCreate;
