import { useState, useEffect } from "react";
import axiosClient from "../../config/AxiosClient";
import { useSnackbar } from "notistack";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";

// Material UI Icons
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

// Styles
import useStyles from "../../assets/css/js/styles";

const T_actividades_dian = ({ t_actividades_dian, setT_actividades_dian, consultData, setConsultData }) => {

// Snackbar Instance
const { enqueueSnackbar } = useSnackbar();

// Styles Instance
const classes = useStyles();

//Local State
const [ data, setData ] = useState([]);
const [ filterData, setFilterData ] = useState([]);
const [ info, setInfo ] = useState({});
const [ searchWord, setSearchWord ] = useState('');
const [ idToDelete, setIdToDelete ] = useState('');
const [ modalDelete, setModalDelete ] = useState(false);
const [ reload, setReload ] = useState(true);
const [ modalT_actividades_dian, setModalT_actividades_dian ] = useState(false);

useEffect(() => {
    const query = async() => {
        try {
            const response = await axiosClient.get('/t_actividades_dian/DreadG');
        
            setData(response.data.msg)
        } catch(err) {
            if(err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
    }   
    if (t_actividades_dian && reload) {
        query();
        setReload(false);
    }
}, [ t_actividades_dian, reload ]);

useEffect(() => {
    if (data.length > 0) {

        let filter = data.filter( item => {
            return item[ Object.keys(item)[0] ].toString().toLowerCase().includes(searchWord) || item.descripcion.toString().toLowerCase().includes(searchWord) 
        });

        // Conditional
        if (searchWord !== '' )  {
            setFilterData(filter);
        } else {
            setFilterData(data);
        }
    }
}, [ searchWord, data ]); 


                const handleClick = (id, descripcion) => {
                    setConsultData({
                        ...consultData,
                        actividad_principal: id,
                        actividad_principalDescripcion: descripcion
                    });
                }
            

return (
<>
    <Dialog
        open={ t_actividades_dian }
        onClose={ () => setT_actividades_dian(false) }
        fullWidth
        maxWidth={ 'md' }
    >
        <DialogContent>
            <Grid container display="flex" justify="center" alignItems="center" className="mt-5">
                <Grid item md={ 6 } xs={ 12 } sm={ 12 } className="mb-3">
                    <Typography variant="h5" className="text-center text-info">T_actividades_dian</Typography>
                </Grid>
                {/* <Grid item md={ 6 } xs={ 12 } sm={ 12 } className="mb-3 text-center">
                    <Button variant="outlined" color="primary" onClick={ () => setModalT_ubicacion(true) }>
                        Crear Nueva Entrada <AddIcon className="ml-3" />
                    </Button>
                </Grid> */}
                <Grid item md={ 12 } xs={ 12 } sm={ 12 } className="my-3 text-center">
                    <TextField
                        variant="outlined"
                        style={{ width: '80%' }}
                        placeholder="Ingrese su Termino de Busqueda"
                        label="Ingrese su Termino de Busqueda"
                        value={ searchWord }
                        onChange={ e => setSearchWord(e.target.value) }
                    />
                </Grid>
            </Grid>
            <List>
                { filterData.length > 0 && (
                    <>
                        <ListItem button key={ Object.keys(data[0])[0] }>
                            <ListItemText className="text-center text-info" style={{ width: '100%' }} primary={ 'descripcion'.toUpperCase() } />
                            {/* <ListItemText className="text-center text-info" style={{ width: '100%' }} primary="Acciones"/> */}
                        </ListItem>
                        { filterData.map( item => (
                            <>
                                <Divider />
                                <ListItem button key={ Object.values(item)[0] } onClick={ () => handleClick(item.id, item.descripcion) } style={{ backgroundColor: (consultData.actividad_principal
                //REPLACECONSTRAINT
                 === item.id ? '#e1e1e1' : null) }}>
                                    <ListItemText className="text-center" style={{ width: '100%' }} primary={ item.descripcion } />
                                    {/* <div style={{ width: '8%' }} className="text-center">
                                        <IconButton onClick={ () => { 
                                            setModalDelete(true);
                                            setIdToDelete(Object.values(item)[0]);
                                        } }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ width: '8%' }} className="text-center">
                                        <IconButton onClick={ () => handleEdit(Object.values(item)[0]) } >
                                            <CreateIcon />
                                        </IconButton>
                                    </div> */}
                                </ListItem>
                            </>
                        )) }
                    </>
                ) }
            </List>
        </DialogContent>
    </Dialog>
</>
)
}

export default T_actividades_dian;