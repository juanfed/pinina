import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText, IconButton, Grid, Paper, makeStyles, Button, DialogActions, TextField } from "@material-ui/core";
// Icons
import CloseIcon from '@material-ui/icons/Close';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// Actions
import { RutCloseAction, UploadRut, UploadCComercio, UploadMMercantil } from "../../redux/actions/MainAction";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const RutUpload = () => {

    // Styles
    const classes = useStyles();

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { rut } = useSelector( state => state.main );

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // State data
    const [uploadfileRut, setUploadfileRut] = useState(null);
    const [uploadfileCComercio, setUploadfileCComercio] = useState(null);
    const [uploadfileMMercantil, setUploadfileMMercantil] = useState(null);

    // Rut
    const handleRut = (e) => {
        setUploadfileRut(e.target.files[0]);
    } 
    const enviarRut = () => {
        if (uploadfileRut === null) {
           enqueueSnackbar('No se a Cargado el Rut', { variant: 'warning' });
           return
        };
        console.log(uploadfileRut)
        let form = new FormData();
        form.append('archivoRut', uploadfileRut);
        console.log(form);
        dispatch(UploadRut(form));
    }
    //CComercio
    const handleCComercio = (e) => {
        setUploadfileCComercio(e.target.files[0]);
    } 
    const enviarCComercio = () => {
        if (uploadfileCComercio === null) {
           enqueueSnackbar('No se a Cargado la Camara de comercio', { variant: 'warning' });
           return
        };
        console.log(uploadfileCComercio)
        let form = new FormData();
        form.append('archivo', uploadfileCComercio);
        console.log(form);
        dispatch(UploadCComercio(form));
    }
    //MMercantil
    const handleMMercantil = (e) => {
        setUploadfileMMercantil(e.target.files[0]);
    } 
    const enviarMMercantil = () => {
        if (uploadfileMMercantil === null) {
           enqueueSnackbar('No se a Cargado la Matricula mercantil', { variant: 'warning' });
           return
        };
        console.log(uploadfileMMercantil)
        let form = new FormData();
        form.append('archivo', uploadfileMMercantil);
        console.log(form);
        dispatch(UploadMMercantil(form));
    }

    return(
        <Dialog  open={ rut } onClose={ () => dispatch(RutCloseAction()) } maxWidth={ 'md' } fullWidth={ true }>
            <DialogTitle className="text-center"> SUBIDA DE ARCHIVOS </DialogTitle>
            <DialogContent dividers>
                <Paper className={classes.paper}>
                    RUT
                    <br></br>
                    <IconButton disabled>
                        <PictureAsPdfIcon />
                    </IconButton>
                    <br></br>
                    <TextField type="file" variant="outlined" name="uploadfileRut" onChange={handleRut} />
                    <Button color="primary" variant="contained" className={classes.button} onClick={enviarRut}>Enviar PDF</Button>
                </Paper>
            </DialogContent>
            <DialogContent dividers>
                <Paper className={classes.paper}>CAMARA DE COMERCIO
                    <br></br>
                    <IconButton disabled>
                        <PictureAsPdfIcon />
                    </IconButton>
                    <br></br>
                    <TextField type="file" variant="outlined" name="uploadfileCComercio" onChange={handleCComercio} />
                    <Button color="primary" variant="contained" className={classes.button} onClick={enviarCComercio}>Enviar PDF</Button>
                </Paper>
            </DialogContent>
            <DialogContent dividers>
                <Paper className={classes.paper}>MATRICULA MERCANTIL
                    <br></br>
                    <IconButton disabled>
                        <PictureAsPdfIcon />
                    </IconButton>
                    <br></br>
                    <TextField type="file" variant="outlined" name="uploadfileMMercantil" onChange={handleMMercantil} />
                    <Button color="primary" variant="contained" className={classes.button} onClick={enviarMMercantil}>Enviar PDF</Button>
                </Paper>
            </DialogContent>
        </Dialog>
    )

}

export default RutUpload;