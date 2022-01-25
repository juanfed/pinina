import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import useStyles from '../../../../assets/css/js/styles';
import clsx from 'clsx';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@material-ui/core";
// Reactstrap
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
// Actions
import { AddAdminCloseAction } from "../../../../redux/actions/MainAction";

const OptionAdmin = () => {

    // Styles Material UI instance 
    const classes = useStyles();

    // Dispatch Instance
    const dispatch = useDispatch();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();
    
    // Redux
    const { addAdmin } = useSelector( state => state.main );

    // Local State
    const [ dataUserAdmin, setDataUserAdmin ] = useState({
        correo: '',
        cedula: ''
    });

    const handleSubmit = () => {

        // Extraction
        const { correo, cedula } = dataUserAdmin;
        //
        if (correo !== '' || cedula !== '') {
            //dispatch(RegisterUser(dataUserAdmin));
        } else {
            enqueueSnackbar('Los campos de Información no pueden ir vacios', { variant: 'warning' });
        }

    }
    
    return(
        <Dialog  open={addAdmin} onClose={ () => dispatch(AddAdminCloseAction()) } maxWidth={ 'lg' } fullWidth={ true }>
            <DialogTitle className="text-center"> Usuarios administradores de la empresa </DialogTitle>
            <DialogContent dividers>
                <Grid container display="flex" justify="center" alignItems="flex-end">
                    <Grid item md={ 4 } sm={ 12 } xs={ 12 } className="text-center">
                        <InputGroup className="input-group-merge input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-user-alt" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Cédula"
                                type="number"
                                name="cedula"
                                value={ dataUserAdmin.cedula }
                                onChange={ e => setDataUserAdmin({
                                    ...dataUserAdmin,
                                    [e.target.name] : e.target.value
                                }) }
                                onKeyPress={ (e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit();
                                    }
                                } }
                            />
                        </InputGroup>
                    </Grid>
                    <Grid item md={ 1 } sm={ 12 } xs={ 12 } className="text-center">
                    </Grid>
                    <Grid item md={ 4 } sm={ 12 } xs={ 12 }  className="text-center" >
                        <InputGroup className="input-group-merge input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fas fa-envelope" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Correo"
                                type="text"
                                name="correo"
                                value={ dataUserAdmin.correo }
                                onChange={ e => setDataUserAdmin({
                                    ...dataUserAdmin,
                                    [e.target.name] : e.target.value
                                }) }
                                onKeyPress={ (e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmit();
                                    }
                                } }
                            />
                        </InputGroup>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container justify="center" alignItems="center">
                    <Grid item md={ 12 } sm={ 12 } xs={ 12 } className="text-center mb-3">
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th" scope="row"> Cedula </TableCell>
                                        <TableCell align="center"> Nombre y apellidos </TableCell>
                                        <TableCell align="center"> Correo </TableCell>
                                        <TableCell align="center"> Cargo </TableCell>
                                        <TableCell align="center"> Estado</TableCell>
                                        <TableCell align="center"> Administrador </TableCell>
                                        <TableCell align="center"> Restringido </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
  
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}


export default OptionAdmin;