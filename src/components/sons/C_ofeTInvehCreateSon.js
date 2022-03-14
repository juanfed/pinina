import React, { useState, useEffect } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

// Components
import WhiteTable from '../tables/WhiteTable';
import SonOptionsDial from '../../layouts/speedDials/SonOptionsDial';


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
import CloseIcon from '@mui/icons-material/Close';


const C_ofeTInvehCreateSon = ({ setSearch, searchResult, setSearchResult, fatherParam, initialData }) => {

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
        
          porcentaje_oferta: '',
          tipo_descuento: '',
        id_inventario: '',
        id_inventario: fatherParam
    });
    const initialTableRows = [
        
          { id: 0, title: 'Porcentaje de Oferta' },
          { id: 1, title: 'Tipo de Descuento' }
    ];
    
const editRow = [
        { id: 2, title: 'Actualizar' },
    ];
    const deleteRow = [
        { id: 2, title: 'Eliminar' },
    ]; 

    const [tableData, setTableData] = useState([]);
    const [tableRows, setTableRows] = useState(initialTableRows);
    const [edit, setEdit] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const addTitle = 'Agregar ofertas';
    const editTitle = 'Actualizar ofertas';
    //search
    const [searchData, setSearchData] = useState('');
    const [searchState, setSearchState] = useState(false);

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
                response = await axiosClient.post('/t_ofertas/create', data);
            } else {
                response = await axiosClient.put('/t_ofertas/edit', data);
            }
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                setSearch(true);
                setData({
                    ...data,
                    
                  porcentaje_oferta: '',
                  tipo_descuento: '',
                    id_inventario: fatherParam
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
            const response = await axiosClient.delete('/t_ofertas/delete/' + id);
            if (response.data.code === 0) {
                enqueueSnackbar(response.data.msg, { variant: 'success' });
                setSearch(true);
                handleClose();
                setData({
                    ...data,
                    
                  porcentaje_oferta: '',
                  tipo_descuento: '',
                    id_inventario: fatherParam
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
            id_inventario: fatherParam,
        })
    }, [fatherParam]);

    //REPLACECONSULTLIST

    useEffect(() => {
        if (searchResult.length !== 0) {
            setTableData(searchResult.map(i => {
                return {
                    data_0: i.id_oferta,
                    
                    data_1: i.porcentaje_oferta,
                    data_2: i.tipo_descuento
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
                data_0: i.id_oferta,
                
                    data_1: i.porcentaje_oferta,
                    data_2: i.tipo_descuento,
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
                data_0: i.id_oferta,
                
                    data_1: i.porcentaje_oferta,
                    data_2: i.tipo_descuento
            }
        }))
    };

    const handleDelete = () => {
        setDeleteItem(true);
        setTableRows([...initialTableRows, ...deleteRow]);
        setTableData(searchResult.map(i => {
            return {
                data_0: i.id_oferta,
                
                    data_1: i.porcentaje_oferta,
                    data_2: i.tipo_descuento,
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
            id_oferta: i.data_0,
            
                porcentaje_oferta: i.data_1,
                tipo_descuento: i.data_2

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
                return (i.porcentaje_oferta).toLowerCase().includes(searchData) ||
               (i.tipo_descuento).toLowerCase().includes(searchData)
              
            });
            setSearchResult(filterData);
        } else {
            setSearchResult(initialData);
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
                    title='Ofertas'
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
                                    No ha registrado ofertas relacionadas con este paciente
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
                    
                    

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="porcentaje_oferta"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Porcentaje de Oferta"
                            placeholder="Ingrese porcentaje de oferta"
                            value={data.porcentaje_oferta}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            required={false}
                            type="text"
                            name="tipo_descuento"
                            color='secondary'
                            size='small'
                            variant="outlined"
                            label="Tipo de Descuento"
                            placeholder="Ingrese tipo de descuento"
                            value={data.tipo_descuento}
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

        {/* REPLACECOMPONENT */}


    </>;
}

export default C_ofeTInvehCreateSon;
