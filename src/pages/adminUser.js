import { useEffect, useState } from 'react';
import { Grid, TablePagination, Card, CardContent } from '@material-ui/core';
// Snackbar
import { useSnackbar } from "notistack";
import adminUserStyles from '../assets/css/js/adminUsersStyles';
//icons
import DirectionsIcon from '@material-ui/icons/Directions';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PublicIcon from '@material-ui/icons/Public';
//components
import AdminOptionsDial from '../components/adminUsers/dials/AdminOptionsDial';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinessAdminAction, getBusinessByUserAction, getEnterpriseDataAdminAction, getEnterpriseDataStandardAction, getModulesAction, getUserModulesAction, getUsersBusinessAction, removeUserBusiness, saveFilteredUserModulesAction, saveFilteredUsersByBusinessAction, saveSelectedBusinessDataAction, saveUserSettingsHistoryAction, saveUserTypeAction } from '../redux/actions/adminAction';
import AdminTable from '../components/tables/AdminTable';
import SetUserPrivDialog from '../components/adminUsers/SetUserPrivDialog';
import MainAppBar from '../layouts/MainAppBar';
import ConfirmDeleteUserDialog from '../components/adminUsers/ConfirmDeleteUserDialog';
import AssignProfileDialog from '../components/adminUsers/AssignProfileDialog';
import ProfileOptionsDial from '../components/adminUsers/dials/ProfileOptionsDial';

export default function AdminUser() {
    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();
    const {
        business,
        usersBusiness,
        selectedBusinessData,
        filteredUsers,
        currentUserDataSettings,
        userSettingsHistory,
        onDeleteUser,
        userModules,
        filteredUserModules,
        userAdmin
    } = useSelector(state => state.admin);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null)
    const classes = adminUserStyles();
    const [rows, setRows] = useState([
        { id: 0, title: 'TIPO DOCUMENTO' },
        { id: 1, title: 'CÉDULA' },
        { id: 2, title: 'NOMBRES Y APELLIDOS' },
        { id: 3, title: 'CORREO' },
        { id: 4, title: 'ESTADO' },
        { id: 5, title: 'NIVEL DE CUENTA' }
    ]);
    const [modulesRows, setModulesRows] = useState([
        { id: 0, title: 'TIPO DOCUMENTO' },
        { id: 1, title: 'CÉDULA' },
        { id: 2, title: 'NOMBRES Y APELLIDOS' },
        { id: 3, title: 'CORREO' },
        { id: 4, title: 'ESTADO' },
        { id: 5, title: 'MÓDULOS' }
    ]);
    const [tableData, setTableData] = useState([]);
    const [modulesTableData, setModulesTableData] = useState([]);
    //collapsed book state
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        dispatch(getBusinessAdminAction({ id_usuario: '1' }))
        dispatch(getBusinessByUserAction({ id_usuario: '1' }));
        dispatch(getUsersBusinessAction());
        dispatch(getModulesAction());
        dispatch(getUserModulesAction());
    }, []);
    useEffect(() => {
        if (usersBusiness.length !== 0) {
            let userData = usersBusiness.filter(i => i.id_usuario === user.id);
            console.log(userData)
            if (userData.length !== 0) {
                if (userData.t_adm) {
                    dispatch(saveUserTypeAction('admin'))
                } else {
                    dispatch(saveUserTypeAction('restringed'))
                }
            }
        }
    }, [usersBusiness])
    useEffect(() => {
        if (business.length !== 0) {
            dispatch(saveSelectedBusinessDataAction(business[0]))
        }
    }, [business]);
    useEffect(() => {
        if (usersBusiness.length || selectedBusinessData.length !== 0) {
            let filterData = usersBusiness.filter(i => i.id_empresa === selectedBusinessData.id_empresa);
            dispatch(saveFilteredUsersByBusinessAction(filterData));
        }
    }, [selectedBusinessData, usersBusiness]);

    useEffect(() => {
        if (userModules.length !== 0) {
            let filterData = userModules.filter(i => i.id_empresa === selectedBusinessData.id_empresa);
            dispatch(saveFilteredUserModulesAction(filterData));
        }
    }, [userModules]);

    useEffect(() => {
        if (filteredUserModules.length !== 0) {
            setModulesData();
        }
    }, [filteredUserModules]);

    //tableSettings
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [privDialog, setPrivDialog] = useState(false);
    const [profileDialog, setProfileDialog] = useState(false);
    function setModulesData() {
        let data = [];
        for (let i = 0; i < filteredUserModules.length; i++) {
            data.push({
                data_0: filteredUserModules[i].id,
                data_1: filteredUserModules[i].tipo_documento,
                data_2: filteredUserModules[i].identificacion,
                data_3: filteredUserModules[i].nombre_apellidos,
                data_4: filteredUserModules[i].correo,
                data_5: filteredUserModules[i].descripcion_nivel,
                data_6: 'Más información',
                modulesMenu: onDeleteUser ? true : false
            });
        }
        setModulesTableData(data);
    };
    function setData() {
        let data = [];
        for (let i = 0; i < filteredUsers.length; i++) {
            data.push({
                data_0: filteredUsers[i].id,
                data_1: filteredUsers[i].tipo_documento,
                data_2: filteredUsers[i].identificacion,
                data_3: filteredUsers[i].nombre_apellidos,
                data_4: filteredUsers[i].correo,
                data_5: filteredUsers[i].descripcion_nivel,
                data_6: filteredUsers[i].t_adm ? 'Administrador' : 'Restringido',
                removeUser: onDeleteUser ? true : false
            });
        }
        setTableData(data);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {
        if (filteredUsers.length !== 0) {
            setData();
        }
    }, [filteredUsers]);
    useEffect(() => {
        enqueueSnackbar('Sesión Iniciada', { variant: 'success' });
    }, []);
    const closePrivDialog = () => {
        setPrivDialog(false)
    };
    const closeProfileDialog = () => {
        setProfileDialog(false)
    };
    useEffect(() => {
        if (currentUserDataSettings.length !== 0) {
            let arrayData = [];
            arrayData.push(userSettingsHistory)
            arrayData.push(currentUserDataSettings);
            dispatch(saveUserSettingsHistoryAction(arrayData))
        }
    }, [currentUserDataSettings]);
    function setDeleteFieldData() {
        let dataField = [];
        for (let i = 0; i < filteredUsers.length; i++) {
            dataField.push({
                data_0: filteredUsers[i].id,
                data_1: filteredUsers[i].tipo_documento,
                data_2: filteredUsers[i].identificacion,
                data_3: filteredUsers[i].nombre_apellidos,
                data_4: filteredUsers[i].correo,
                data_5: filteredUsers[i].descripcion_nivel,
                data_6: filteredUsers[i].t_adm ? 'Administrador' : 'Restringido',
                removeUser: true
            });
        }
        setTableData(dataField);
    };
    const handleDeleteUser = () => {
        setRows([
            { id: 0, title: 'TIPO DOCUMENTO' },
            { id: 1, title: 'CÉDULA' },
            { id: 2, title: 'NOMBRES Y APELLIDOS' },
            { id: 3, title: 'CORREO' },
            { id: 4, title: 'ESTADO' },
            { id: 5, title: 'NIVEL DE CUENTA' },
            { id: 6, title: 'ELIMINAR USUARIO' }
        ]);
        setDeleteFieldData();
    };

    useEffect(() => {
        if (onDeleteUser) {
            setRows([
                { id: 0, title: 'TIPO DOCUMENTO' },
                { id: 1, title: 'CÉDULA' },
                { id: 2, title: 'NOMBRES Y APELLIDOS' },
                { id: 3, title: 'CORREO' },
                { id: 4, title: 'ESTADO' },
                { id: 5, title: 'NIVEL DE CUENTA' },
                { id: 6, title: 'ELIMINAR USUARIO' }
            ]);
        } else {
            setRows([
                { id: 0, title: 'TIPO DOCUMENTO' },
                { id: 1, title: 'CÉDULA' },
                { id: 2, title: 'NOMBRES Y APELLIDOS' },
                { id: 3, title: 'CORREO' },
                { id: 4, title: 'ESTADO' },
                { id: 5, title: 'NIVEL DE CUENTA' }
            ]);
        }
    }, [onDeleteUser])
    return (
        <>
            <MainAppBar />
            <Grid container justify='center' className={classes.background}>
                <Grid item xs={12}>
                    <Grid container spacing={4} justify='center' className={classes.root}>
                        <Grid item xl={12} sm={10} md={11} xs={10}>
                            <Grid container justify="flex-start">
                                <Grid item md={3} sm={3} xs={3} style={{ textAlign: "center" }}>
                                    <Card className={classes.mediaInfo}>
                                        <CardContent>
                                            <Grid container style={{ textAlign: "center" }}>
                                                <Grid item xs={4}>
                                                    <PhoneIcon color='secondary' color='secondary' className={classes.logoInfoDir} />
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <h6 className={classes.textInfoDir}>Telefono</h6>
                                                    <h4 className={classes.tituloInfoDir}> {selectedBusinessData?.telefono_uno} </h4>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={3} sm={3} xs={3} style={{ textAlign: "center" }}>

                                    <Card className={classes.mediaInfo}>
                                        <CardContent>
                                            <Grid container style={{ textAlign: "center" }}>
                                                <Grid item xs={5}>
                                                    {0 === 0 && (
                                                        <AssignmentIndIcon color='secondary' className={classes.logoInfoNit} />
                                                    )}
                                                    {1 === 0 && (
                                                        <DescriptionIcon color='secondary' className={classes.logoInfoNit} />
                                                    )}
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <h6 className={classes.textInfoNit}>NIT</h6>
                                                    <h4 className={classes.tituloInfoNit}>{selectedBusinessData?.nit}</h4>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={3} sm={3} xs={3} style={{ textAlign: "center" }}>
                                    <Card className={classes.mediaInfo}>
                                        <CardContent>
                                            <Grid container style={{ textAlign: "center" }}>
                                                <Grid item xs={4}>
                                                    <DirectionsIcon color='secondary' className={classes.logoInfoDir} />
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <h6 className={classes.textInfoDir}>Dirección</h6>
                                                    <h4 className={classes.tituloInfoDir}>{selectedBusinessData?.direccion_principal} </h4>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={3} sm={3} xs={3} style={{ textAlign: "center" }}>
                                    <Card className={classes.mediaInfo}>
                                        <CardContent>
                                            <Grid container style={{ textAlign: "center" }}>
                                                <Grid item xs={6}>
                                                    <PublicIcon color='secondary' className={classes.logoInfoId} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6 className={classes.textInfoId}>Pais</h6>
                                                    <h4 className={classes.tituloInfoId}>{selectedBusinessData?.pais} </h4>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        {userAdmin &&
                            <>
                                <Grid item xs={12}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} id='profile'>
                                            <AdminOptionsDial
                                                title='Administradores'
                                                setPrivDialog={setPrivDialog}
                                                handleDeleteUser={handleDeleteUser}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <AdminTable
                                        tableData={tableData}
                                        rows={rows}
                                    />
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </Grid>
                            </>
                        }
                        <Grid item xs={12} id='profile'>
                            <ProfileOptionsDial setProfileDialog={setProfileDialog} />
                        </Grid>
                        <Grid item xs={12}>
                            <AdminTable
                                tableData={modulesTableData}
                                rows={modulesRows}
                            />
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SetUserPrivDialog dialog={privDialog} closeDialog={closePrivDialog} />
            <ConfirmDeleteUserDialog />
            <AssignProfileDialog dialog={profileDialog} closeDialog={closeProfileDialog} />
        </>
    );
}