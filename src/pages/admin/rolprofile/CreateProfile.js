import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from "../../../config/AxiosClient";
// icons
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// Components
import OptionProfile from './modals/OptionProfile';
// Actions
import { AddProfileOpenAction, AddProfileCloseAction, SearchUserBusinnessActionProfile } from "../../../redux/actions/MainAction";
// Material-UI
import { Typography, Grid, TextField, Checkbox, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
// Reactstrap
import { Input, Label } from "reactstrap";

const CreateProfile = (props) => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // State data
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(10);
    const [ data, setData ] = useState([]);
    //console.log(data)

    // Redux State Extraction
    const { addProfile, profileUsuariosEmpresas } = useSelector( state => state.main );

    useEffect(() => {
        dispatch(SearchUserBusinnessActionProfile());
        const query = async() => {
            try {
                const response = await axiosClient.post('/profile/userModule', { id: props.dataBusiness.id });
                if (response.data.code === 1) {
                    setData(response.data.msg);
                }
            } catch(err) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
        if(props.dataBusiness != "" || props.dataBusiness > 0){
            query();
        }else{
            setData(props);
        }
    }, [ props.dataBusiness.id ]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
    return (
        <>
           <Typography variant="h6" className="text-center mt-3 mb-4">
                Nueva Entrada Profile
                { addProfile ?
                    <IconButton className="mr-2" >
                        <AddIcon style={{ fontSize: 30 }}/>
                        <OptionProfile />
                    </IconButton> :
                    <IconButton className="mr-2" onClick={ () => dispatch(AddProfileOpenAction()) }>
                        <AddIcon style={{ fontSize: 30 }}/>
                    </IconButton>
                }
            </Typography>
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
                                {   data.length > 0 && (
                                <>
                                    {   profileUsuariosEmpresas.map(item => (        
                                    <>
                                        {   data.map(item2 => (
                                            <>
                                                {   item.id === item2.id_usuario && (
                                                    <>
                                                        <TableRow key={ item.id }>
                                                            <TableCell component="th" scope="row">{ item.identificacion }</TableCell>
                                                            <TableCell align="center">{ item.primer_nombre } { item.segundo_nombre } { item.primer_apellido } { item.segundo_apellido }</TableCell>
                                                            <TableCell align="center">{ item.correo }</TableCell>
                                                            <TableCell align="center">{ item.nivel_seguridad }</TableCell>
                                                            <TableCell align="center">{ item.estado }</TableCell>
                                                            <TableCell align="center" padding="checkbox">
                                                            <Checkbox
                                                                checked={ item2.t_adm }
                                                                disabled
                                                            />
                                                            </TableCell>
                                                            <TableCell align="center" padding="checkbox">
                                                            <Checkbox
                                                                checked={ item2.t_restri }
                                                                disabled
                                                            />
                                                            </TableCell>
                                                        </TableRow> 
                                                    </>
                                                )}
                                            </>
                                        ))}
                                    </>
                                    ))}   
                                </>
                                )} 
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={profileUsuariosEmpresas.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default CreateProfile;