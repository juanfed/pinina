import React, { useState, useEffect } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import WhiteTable from '../tables/WhiteTable';
import SonOptionsDial from '../../layouts/speedDials/SonOptionsDial';



import T_historias_clinicasT_mascotasoaNMbModal from '../modals/T_historias_clinicasT_mascotasoaNMbModal.js';
//REPLACEIMPORTS


// Material UI Components
import {
    Grid,
    Button,
    InputBase,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import { Typography, IconButton } from '@mui/material';

// Styles
import useStyles from '../../assets/css/js/styles';

// Material UI Icons
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const C_hisTExamgCreateSon = ({ setSearch, searchResult, setSearchResult, fatherParam, initialData }) => {

    // Styles Instance
    const classes = useStyles();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Local State
    const [addState, setAddState] = useState(false);
    const [editState, setEditState] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState({
        
          profesional: '',
          id_usuario: '',
          id_formula: '',
          id_mascotas: '',
          observaciones: '',
          fecha_grabacion: '',
          hora: '',
          diagnostico: '',
          antecedentes: '',
          sintomas: '',
        id_examen: '',
        id_examen: fatherParam
    });
    const initialTableRows = [
        
          { id: 0, title: 'Profesional' },
          { id: 1, title: 'Id de Usuario' },
          { id: 2, title: 'Id de Formula' },
          { id: 3, title: 'Id de Mascotas' },
          { id: 4, title: 'Observaciones' },
          { id: 5, title: 'Fecha de Grabacion' },
          { id: 6, title: 'Hora' },
          { id: 7, title: 'Diagnostico' },
          { id: 8, title: 'Antecedentes' },
          { id: 9, title: 'Sintomas' }
    ];
    
const editRow = [
        { id: 10, title: 'Actualizar' },
    ];
    const deleteRow = [
        { id: 10, title: 'Eliminar' },
    ]; 

    const [tableData, setTableData] = useState([]);
    const [tableRows, setTableRows] = useState(initialTableRows);
    const [edit, setEdit] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [loadingConsult, setLoadingConsult] = useState({});
    const addTitle = 'Agregar historias clinicas';
    const editTitle = 'Actualizar historias clinicas';
    //search
    const [searchData, setSearchData] = useState('');
    const [searchState, setSearchState] = useState(false);

    
    const [ t_mascotas, setT_mascotas ] = useState(false);
    // REPLACERESULT
                

    // Function for handle Change Inputs
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    // Function for handle Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Query
            let response;
            if (addState) {
                axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.post('/t_historias_clinicas/create', data);
            } else {
                axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                response = await axiosClient.put('/t_historias_clinicas/edit', data);
            }
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                setSearch(true);
                setData({
                    ...data,
                    
                  profesional: '',
                  id_usuario: '',
                  id_formula: '',
                  id_mascotas: '',
                  observaciones: '',
                  fecha_grabacion: '',
                  hora: '',
                  diagnostico: '',
                  antecedentes: '',
                  sintomas: '',
                    id_examen: fatherParam
                });
                setAddState(false);
                setEditState(false);
            } else {
                enqueueSnackbar('No se logró realizar la creación', { variant: 'error' });
            }
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            }
        }
    };

    const deleteElement = async (id) => {
        try {
            // Query
            axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
            const response = await axiosClient.delete('/t_historias_clinicas/delete/' + id);
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                setSearch(true);
                handleClose();
                setData({
                    ...data,
                    
                  profesional: '',
                  id_usuario: '',
                  id_formula: '',
                  id_mascotas: '',
                  observaciones: '',
                  fecha_grabacion: '',
                  hora: '',
                  diagnostico: '',
                  antecedentes: '',
                  sintomas: '',
                    id_examen: fatherParam
                });
                setAddState(false);
                setEditState(false);
            }
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' });
            } else {
                enqueueSnackbar(err, { variant: 'error' });
            }
        }
    };

    const handleClose = () => {
        setIdToDelete('');
        setModalDelete(false);
    };

    useEffect(() => {
        setData({
            ...data,
            id_examen: fatherParam,
        })
    }, [fatherParam]);

    
    useEffect(() => {
        const query = async() => {
            if(queryParam.id_mascotas) {
                axiosClient.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token').replace(/['"]+/g, '')}`
                const response = await axiosClient.get('/t_mascotas/Dread/' + queryParam.id_mascotas);
                setData({
                    ...data,
                    id_mascotasDescripcion: response.data.msg[0].nombre_mascota
                })
            }
            setLoadingConsult({
                ...loadingConsult,
                id_mascotas: false
            });
        }
        if(loadingConsult.id_mascotas) {
            query()
        }
    }, [loadingConsult]);
    //REPLACECONSULTLIST
                                

    useEffect(() => {
        if (searchResult.length !== 0) {
            setTableData(searchResult.map(i => {
                return {
                    data_0: i.id_historias,
                    
                    data_1: i.profesional,
                    data_2: i.id_usuario,
                    data_3: i.id_formula,
                    data_4: i.id_mascotas,
                    data_5: i.observaciones,
                    data_6: i.fecha_grabacion,
                    data_7: i.hora,
                    data_8: i.diagnostico,
                    data_9: i.antecedentes,
                    data_10: i.sintomas
                }
            }));
        }
    }, [searchResult]);

    const handleAdd = () => {
        setDialogTitle(addTitle);
        setAddState(true);
        setEditState(false);
    };

    const handleEdit = () => {
        setDialogTitle(editTitle);
        setEdit(true);
        setTableRows([...initialTableRows, ...editRow]);
        setTableData(searchResult.map(i => {
            return {
                data_0: i.id_historias,
                
                    data_1: i.profesional,
                    data_2: i.id_usuario,
                    data_3: i.id_formula,
                    data_4: i.id_mascotas,
                    data_5: i.observaciones,
                    data_6: i.fecha_grabacion,
                    data_7: i.hora,
                    data_8: i.diagnostico,
                    data_9: i.antecedentes,
                    data_10: i.sintomas,
                edit: true
            }
        }))
    };

    const handleBack = () => {
        setEdit(false);
        setDeleteItem(false);
        setTableRows(initialTableRows);
        setTableData(searchResult.map(i => {
            return {
                data_0: i.id_historias,
                
                    data_1: i.profesional,
                    data_2: i.id_usuario,
                    data_3: i.id_formula,
                    data_4: i.id_mascotas,
                    data_5: i.observaciones,
                    data_6: i.fecha_grabacion,
                    data_7: i.hora,
                    data_8: i.diagnostico,
                    data_9: i.antecedentes,
                    data_10: i.sintomas
            }
        }))
    };

    const handleDelete = () => {
        setDeleteItem(true);
        setTableRows([...initialTableRows, ...deleteRow]);
        setTableData(searchResult.map(i => {
            return {
                data_0: i.id_historias,
                
                    data_1: i.profesional,
                    data_2: i.id_usuario,
                    data_3: i.id_formula,
                    data_4: i.id_mascotas,
                    data_5: i.observaciones,
                    data_6: i.fecha_grabacion,
                    data_7: i.hora,
                    data_8: i.diagnostico,
                    data_9: i.antecedentes,
                    data_10: i.sintomas,
                delete: true
            }
        }))
    };

    const handleDeleteItem = id => {
        setIdToDelete(id);
        setModalDelete(true);
    };

    const handleEditItem = i => {
        setData({
            ...data,
            id_historias: i.data_0,
            
                profesional: i.data_1,
                id_usuario: i.data_2,
                id_formula: i.data_3,
                id_mascotas: i.data_4,
                observaciones: i.data_5,
                fecha_grabacion: i.data_6,
                hora: i.data_7,
                diagnostico: i.data_8,
                antecedentes: i.data_9,
                sintomas: i.data_10

        })

        setEditState(true);
    };

    useEffect(() => {
        if (deleteItem) {
            handleDelete();
        }
    }, [searchResult]);

    useEffect(() => {
        if (edit) {
            handleEdit();
        }
    }, [searchResult]);

    //search
    const handleSearch = () => {
        setSearchState(true);
    }
    const hideAndCleanSearchBar = () => {
        setSearchData('');
        setSearchState(false);
    };
    const handleSearchBarChange = ({ target }) => {
        setSearchData(target.value.toLowerCase());
    }
    useEffect(() => {
        if (searchData.length !== 0) {
            const filterData = initialData.filter(i => {
                return (i.profesional).toLowerCase().includes(searchData) ||
               (i.id_usuario).toLowerCase().includes(searchData) ||
               (i.id_formula).toLowerCase().includes(searchData) ||
               (i.id_mascotas).toLowerCase().includes(searchData) ||
               (i.observaciones).toLowerCase().includes(searchData) ||
               (i.fecha_grabacion).toLowerCase().includes(searchData) ||
               (i.hora).toLowerCase().includes(searchData) ||
               (i.diagnostico).toLowerCase().includes(searchData) ||
               (i.antecedentes).toLowerCase().includes(searchData) ||
               (i.sintomas).toLowerCase().includes(searchData)
              
            });
            setSearchResult(filterData);
        } else {
            if (initialData !== false) {
                setSearchResult(initialData);
            } else {
                setSearchResult([]);
            }
        }
    }, [searchData]);

    return <>
        <Dialog
            open={modalDelete}
            onClose={() => handleClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Esta Seguro de Eliminar " + idToDelete}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Si elimina el elemento no podrá ser recuperado.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()} color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => deleteElement(idToDelete)} color="secondary" autoFocus>
                    Eliminar
                </Button>
            </DialogActions>
        </Dialog>
        <Grid container className={classes.sonContainer}>
            <Grid item xs={10}>
                <SonOptionsDial
                    title='Historias Clinicas'
                    handleAdd={handleAdd}
                    handleEdit={handleEdit}
                    handleBack={handleBack}
                    handleDelete={handleDelete}
                    handleSearch={handleSearch}
                    addState={addState}
                    editState={edit}
                    deleteState={deleteItem}
                />
            </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2} alignItems="center">
            {searchState &&
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
                            className={classes.searchIconButton}
                            onClick={hideAndCleanSearchBar}
                        >
                            <CloseIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                </>
            }


            <Grid item md={10} className="text-center">
                {searchResult.length > 0 ? (
                    <WhiteTable
                        tableData={tableData}
                        rows={tableRows}
                        handleEdit={handleEditItem}
                        handleDelete={handleDeleteItem}
                    />
                )
                    :
                    (
                        <Grid container justifyContent='center' className={classes.noEntries}>
                            <Grid item>
                                <Typography align='center' variant='h6' color='secondary'>
                                    No ha registrado historias clinicas relacionadas con este paciente
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
        <Dialog
            open={addState || editState}
            onClose={() => {
                setAddState(false);
                setEditState(false);
            }}>
            <Grid container className={classes.dialogContainer} justifyContent='center'>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid container justifyContent='center' className={classes.dialogTitle}>
                        <Grid item>
                            <Typography align='center' variant='h5'>
                                {dialogTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                    

                    <div className="d-flex align-items-center ml-3 mb-3 mt-3">
                        <Typography variant="h6" className="text-left text-info">Mascotas</Typography>
                        <IconButton className="border ml-3" onClick={ () => setT_mascotas(!t_mascotas) }>
                            {t_mascotas ? <CloseIcon /> : <AddIcon /> }
                        </IconButton>
                    </div>
                    

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="profesional"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Profesional"
                            placeholder="Ingrese profesional"
                            value={data.profesional}
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
                            name="id_formula"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Id de Formula"
                            placeholder="Ingrese id de formula"
                            value={data.id_formula}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="observaciones"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Observaciones"
                            placeholder="Ingrese observaciones"
                            value={data.observaciones}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="fecha_grabacion"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Fecha de Grabacion"
                            placeholder="Ingrese fecha de grabacion"
                            value={data.fecha_grabacion}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="hora"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Hora"
                            placeholder="Ingrese hora"
                            value={data.hora}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="diagnostico"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Diagnostico"
                            placeholder="Ingrese diagnostico"
                            value={data.diagnostico}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="antecedentes"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Antecedentes"
                            placeholder="Ingrese antecedentes"
                            value={data.antecedentes}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="sintomas"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Sintomas"
                            placeholder="Ingrese sintomas"
                            value={data.sintomas}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Grid item md={6} sm={12} xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color='primary'
                                onClick={e => handleSubmit(e)}
                            >
                                <Typography>
                                    {addState ? 'Nuevo Registro' : 'Editar Registro'}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>

        
                    { t_mascotas && (
                        <T_historias_clinicasT_mascotasoaNMbModal t_mascotas={ t_mascotas } setT_mascotas={ setT_mascotas } consultData={ data } setConsultData={ setData } />
                    ) }
                    {/* REPLACECOMPONENT */}
                    


    </>;
}

export default C_hisTExamgCreateSon;
