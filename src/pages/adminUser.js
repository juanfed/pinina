import { useEffect, useState } from 'react';
import { Grid, TablePagination, Card, CardContent, Typography } from '@material-ui/core';
import router, { useRouter } from 'next/router';
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
import { getBusinessAdminAction, getBusinessByUserAction, getEnterpriseDataAdminAction, getEnterpriseDataStandardAction, getModulesAction, getUpdateAdminStateAction, getUserModulesAction, getUsersBusinessAction, removeUserBusiness, saveFilteredUserModulesAction, saveFilteredUsersByBusinessAction, saveSelectedBusinessDataAction, saveUpdateAdminDataAction, saveUserSettingsHistoryAction, saveUserTypeAction, setAdminUserModulesAction, setUserAccessAction, setUserModulesAction, updateModulesAction } from '../redux/actions/adminAction';
import AdminTable from '../components/tables/AdminTable';
import SetUserPrivDialog from '../components/adminUsers/SetUserPrivDialog';
import MainAppBar from '../layouts/MainAppBar';
import ConfirmDeleteUserDialog from '../components/adminUsers/ConfirmDeleteUserDialog';
import AssignProfileDialog from '../components/adminUsers/AssignProfileDialog';
import ProfileOptionsDial from '../components/adminUsers/dials/ProfileOptionsDial';
import UserModulesDialog from '../components/adminUsers/UserModulesDialog';
import ConfirmDeleteProfileDialog from '../components/adminUsers/ConfirmDeleteProfileDialog';
import WhiteTable from '../components/tables/WhiteTable';
import ConfirmationDialog from '../components/modals/ConfirmationDialog';
import { ADMIN_USER_MODULES } from '../redux/types';

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
        adminUserModules,
        userAdmin,
        deleteProfileModule,
        updateAdminButton,
        updateAdminConfirmation,
        updateAdmin,
        deleteAdminButton,
        userProfileModules
    } = useSelector(state => state.admin);
    const { user } = useSelector(state => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null)
    const classes = adminUserStyles();
    const initialAdminRows = [
        { id: 0, title: 'TIPO DOCUMENTO' },
        { id: 1, title: 'CÉDULA' },
        { id: 2, title: 'NOMBRES Y APELLIDOS' },
        { id: 3, title: 'CORREO' },
        { id: 4, title: 'ESTADO' },
        { id: 5, title: 'NIVEL DE CUENTA' }
    ];
    const [rows, setRows] = useState(initialAdminRows);
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
    const [usersModuleTable, setUsersModuleTable] = useState([]);
    const [openModulesDialog, setOpenModulesDialog] = useState(false);
    const [userIdModules, setUserIdModules] = useState('');
    const [confirmUpdateAdminDialog, setConfirmUpdateAdminDialog] = useState(false);
    const [updateAdminUserMsg, setUpdateAdminUserMsg] = useState('');
    const [updateAdminSuccess, setUpdateAdminSuccess] = useState(false);
    const [moreInfoModule, setMoreInfoModule] = useState(false);
    const [adminAccess, setAdminAccess] = useState(false);

    useEffect(() => {
        switch (userAdmin) {
            case 'admin': setAdminAccess(true);
                break;
            case 'admin_restri': setAdminAccess(false);
                break;
            default: setAdminAccess(false);
        }
    }, [userAdmin]);

    //collapsed book state
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (usersBusiness.length || selectedBusinessData.length !== 0) {
            let filterData = usersBusiness.filter(i => i.id_empresa === selectedBusinessData.id_empresa);
            const quitUser = filterData.filter(i => i.id_usuario !== user?.id);
            dispatch(saveFilteredUsersByBusinessAction(quitUser));
        }
    }, [selectedBusinessData, usersBusiness]);

    useEffect(() => {
        if (userModules.length && selectedBusinessData !== 0) {
            let filterData = userModules.filter(i => i.id_empresa === selectedBusinessData.id_empresa);
            dispatch(saveFilteredUserModulesAction(filterData));
        }
    }, [userModules, selectedBusinessData]);

    const [array, setArray] = useState([]);
    useEffect(() => {
        if (filteredUserModules.length !== 0) {
            const memo = [];
            const data = filteredUserModules.map(i => {
                if (memo.includes(i.id_usuario)) {
                    return null
                } else {
                    if (i.id_usuario === user.id) {
                        return null
                    } else {
                        memo.push(i.id_usuario)
                        return i
                    };
                };
            });
            const usersFiltered = data.filter(i => i !== null);
            console.log(usersFiltered)
            /*   setUsersModuleTable(usersFiltered); */
            const adminModules = usersFiltered.filter(i => i.t_adm === true);
            const modulesProfile = filteredUserModules.filter(i => i.id_usuario === user.id);
            setUsersModuleTable(usersFiltered);
            dispatch(setAdminUserModulesAction(modulesProfile));
        }
    }, [filteredUserModules]);
    useEffect(() => {
        if (userAdmin === 'module_admin') {
            if (adminUserModules.length !== 0) {
                const array = [];
                adminUserModules.map(adminUserModule => {
                    const searchData = filteredUserModules.filter(i => i.id_modulo === adminUserModule.id_modulo);
                    if (searchData.length !== 0) {
                        array.push(...searchData);
                        return searchData
                    };
                });
                const newUserProfile = [...array]
                const removeUser = newUserProfile.filter(i => i.id_usuario !== user.id);
                const memo = [];
                const data = removeUser.map(i => {
                    if (memo.includes(i.id_usuario)) {
                        return null
                    } else {
                        if (i.id_usuario === user.id) {
                            return null
                        } else {
                            memo.push(i.id_usuario)
                            return i
                        };
                    };
                });
                const usersFiltered = data.filter(i => i !== null);
                console.log(usersFiltered)

                setUsersModuleTable(usersFiltered);
            }
        }
    }, [userAdmin, adminUserModules])
    /*     useEffect(() => {
            setModulesData();
        }, [usersModuleTable]) */

    //tableSettings
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [privDialog, setPrivDialog] = useState(false);
    const [profileDialog, setProfileDialog] = useState(false);
    function setModulesData() {
        if (deleteProfileModule) {
            const data = usersModuleTable.map(i => {
                return {
                    data_0: i.id,
                    data_1: i.tipo_documento,
                    data_2: i.identificacion,
                    data_3: i.nombre_apellidos,
                    data_4: i.correo,
                    data_5: i.descripcion_nivel,
                    id_usuario: i.id_usuario,
                    removeUserProfile: true
                }
            })
            setModulesTableData(data)
        } else {
            const data = usersModuleTable.map(i => {
                return {
                    data_0: i.id,
                    data_1: i.tipo_documento,
                    data_2: i.identificacion,
                    data_3: i.nombre_apellidos,
                    data_4: i.correo,
                    data_5: i.descripcion_nivel,
                    moreInfo: true,
                    id_usuario: i.id_usuario,
                }
            });
            setModulesTableData(data)
        }

    };
    function setData() {
        if (updateAdminButton) {
            setRows([
                { id: 0, title: 'TIPO DOCUMENTO' },
                { id: 1, title: 'CÉDULA' },
                { id: 2, title: 'NOMBRES Y APELLIDOS' },
                { id: 3, title: 'CORREO' },
                { id: 4, title: 'ESTADO' },
                { id: 5, title: 'NIVEL DE CUENTA' },
                { id: 6, title: 'GUARDAR CAMBIOS' }
            ]);
        } else if (!deleteAdminButton || !updateAdminButton) {
            setRows([
                { id: 0, title: 'TIPO DOCUMENTO' },
                { id: 1, title: 'CÉDULA' },
                { id: 2, title: 'NOMBRES Y APELLIDOS' },
                { id: 3, title: 'CORREO' },
                { id: 4, title: 'ESTADO' },
                { id: 5, title: 'NIVEL DE CUENTA' }
            ]);
        }
        const data = filteredUsers.map(i => {
            return {
                data_0: i.id,
                data_1: i.tipo_documento,
                data_2: i.identificacion,
                data_3: i.nombre_apellidos,
                data_4: i.correo,
                data_5: i.descripcion_nivel,
                data_6: i.t_adm ? 'Administrador' : 'Restringido',
                t_adm: i.t_adm,
                adminSwitch: updateAdminButton ? true : false,
                updateUser: updateAdminButton ? true : false,
                id_usuario: i.id_usuario,
                removeUser: deleteAdminButton ? true : false

            }
        })
        setTableData(data);
    };
    const handleChangePage = (newPage) => {
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
                data_0: i.id,
                data_1: i.tipo_documento,
                data_2: i.identificacion,
                data_3: i.nombre_apellidos,
                data_4: i.correo,
                data_5: i.descripcion_nivel,
                id_usuario: i.id_usuario,
                t_adm: i.t_adm,
                adminSwitch: true,
                updateUser: true
            });
        }
        setTableData(dataField);
    };
    const setModulesDialog = (state, userId) => {
        setOpenModulesDialog(state);
        setUserIdModules(userId);
    };
    //onDelete Event Button in Profile Modules
    useEffect(() => {
        setModulesData()
    }, [deleteProfileModule, usersModuleTable]);
    // update Event Button in Profile Modules
    useEffect(() => {
        setData();
    }, [updateAdminButton]);
    useEffect(() => {
        if (deleteAdminButton) {
            setRows([
                { id: 0, title: 'TIPO DOCUMENTO' },
                { id: 1, title: 'CÉDULA' },
                { id: 2, title: 'NOMBRES Y APELLIDOS' },
                { id: 3, title: 'CORREO' },
                { id: 4, title: 'ESTADO' },
                { id: 5, title: 'NIVEL DE CUENTA' },
                { id: 6, title: 'ELIMINAR' }
            ]);
            const data = filteredUsers.map(i => {
                return {
                    data_0: i.id,
                    data_1: i.tipo_documento,
                    data_2: i.identificacion,
                    data_3: i.nombre_apellidos,
                    data_4: i.correo,
                    data_5: i.descripcion_nivel,
                    data_6: i.t_adm ? 'Administrador' : 'Restringido',
                    t_adm: i.t_adm,
                    id_usuario: i.id_usuario,
                    removeUser: true
                }
            });
            setTableData(data);
        } else {
            setData();
        }
    }, [deleteAdminButton])
    useEffect(() => {
        dispatch(getUpdateAdminStateAction(filteredUsers));
    }, [filteredUsers])
    //updateAdminPrivsDialog
    const handleCloseConfirmUptDialog = () => {
        setConfirmUpdateAdminDialog(false);
        dispatch(saveUpdateAdminDataAction({}, false));
        setUpdateAdminSuccess(false);
        setUpdateAdminUserMsg('')
    };
    //confirmation Dialog boolean state
    useEffect(() => {
        if (updateAdminConfirmation) {
            if (updateAdmin?.t_adm) {
                setUpdateAdminUserMsg(`¿Desea establecer a éste usuario como administrador?`)
            } else {
                setUpdateAdminUserMsg(`¿Desea establecer a éste usuario como restringido?`)
            }
            setConfirmUpdateAdminDialog(true);
        } else {
            setConfirmUpdateAdminDialog(false);
        }
    }, [updateAdminConfirmation]);
    const handleConfirmUpdDialog = async () => {
        const response = await dispatch(setUserAccessAction({
            id_empresa: selectedBusinessData.id_empresa,
            id_usuario: updateAdmin.id_usuario,
            t_adm: updateAdmin.t_adm,
            t_restri: updateAdmin.t_restri
        }));
        console.log(response)
        if (response) {
            setUpdateAdminSuccess(true);
            setUpdateAdminUserMsg(response.msg.respuesta)
        }
    };
    const handleMoreInfo = (idUser) => {
        const userModulesData = filteredUserModules.filter(i => i.id_usuario === idUser);
        dispatch(setUserModulesAction(userModulesData));
        setMoreInfoModule(true);
        setProfileDialog(true);
        dispatch(updateModulesAction(true));
    };
    useEffect(() => {
        if (userProfileModules.length === 0) {
            setMoreInfoModule(false);
        }
    }, [userProfileModules])
    return (
        <>
            <MainAppBar />
            {selectedBusinessData?.id_empresa ?
                <>
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
                                {adminAccess &&
                                    <>
                                        <Grid item xs={12}>
                                            <Grid container spacing={0}>
                                                <Grid item xs={12} id='profile'>
                                                    <AdminOptionsDial
                                                        title='Administradores'
                                                        setPrivDialog={setPrivDialog}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <WhiteTable
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
                                    <WhiteTable
                                        tableData={modulesTableData}
                                        rows={modulesRows}
                                        setModulesDialog={setModulesDialog}
                                        handleMoreInfo={handleMoreInfo}
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
                    <ConfirmDeleteProfileDialog />
                    <AssignProfileDialog dialog={profileDialog} closeDialog={closeProfileDialog} moreInfo={moreInfoModule} />
                    <UserModulesDialog userId={userIdModules} dialog={openModulesDialog} closeDialog={setOpenModulesDialog} />
                    <ConfirmationDialog
                        success={updateAdminSuccess}
                        message={updateAdminUserMsg}
                        handleConfirm={handleConfirmUpdDialog}
                        dialog={confirmUpdateAdminDialog}
                        closeDialog={handleCloseConfirmUptDialog}
                    />
                </>
                :
                <Grid container alignItems='center' justify='center' style={{ minHeigth: '50vh', paddingTop: '500px' }}>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' color='secondary'>
                            Seleccione una Empresa
                        </Typography>
                    </Grid>
                </Grid>
            }
        </>

    );
}