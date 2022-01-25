import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import useStyles from '../../../../assets/css/js/styles';
import axiosClient from "../../../../config/AxiosClient";
import clsx from 'clsx';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Checkbox } from "@material-ui/core";
// Reactstrap
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
// Actions
import { AddProfileCloseAction } from "../../../../redux/actions/MainAction";

const OptionProfile = () => {

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();
    
    // Redux
    const { addProfile } = useSelector( state => state.main );

    // Styles Material UI instance 
    const classes = useStyles();

    // Dispatch Instance
    const dispatch = useDispatch();

    // State data
    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(10);
    // Local State
    const [ dataUserProfile, setDataUserProfile ] = useState({
        correo: '',
        cedula: ''
    });

    useEffect(() => {
        const query = async() => {
            try {
                const response = await axiosClient.get('/profile/modulesSearch'); 
                setData(response.data.profileModulosBusqueda);
            } catch(err) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
        query();
    }, [ ]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleSubmit = () => {

        // Extraction
        const { correo, cedula } = dataUserProfile;
        //
        if (correo !== '' || cedula !== '') {
            //dispatch(RegisterUser(dataUser));
        } else {
            enqueueSnackbar('Los campos de Información no pueden ir vacios', { variant: 'warning' });
        }

    }
    
    return(
        <Dialog  open={addProfile} onClose={ () => dispatch(AddProfileCloseAction()) } maxWidth={ 'lg' } fullWidth={ true }>
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
                                value={ dataUserProfile.cedula }
                                onChange={ e => setDataUserProfile({
                                    ...dataUserProfile,
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
                                value={ dataUserProfile.correo }
                                onChange={ e => setDataUserProfile({
                                    ...dataUserProfile,
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
                                        <TableCell component="th" scope="row"> Módulos </TableCell>
                                        <TableCell align="center"> Administrador </TableCell>
                                        <TableCell align="center"> Restringido </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {   data.map(item => (   
                                    <>
                                        <TableRow key={ item.id }>
                                            <TableCell component="th" scope="row">{ item.modulo }</TableCell>
                                            <TableCell align="center" padding="checkbox">
                                            <Checkbox
                                            />
                                            </TableCell>
                                            <TableCell align="center" padding="checkbox">
                                            <Checkbox
                                            />
                                            </TableCell>
                                        </TableRow> 
                                    </>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        /> 
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}


export default OptionProfile;