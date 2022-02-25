//hooks
import { useState, useEffect } from "react";
//material ui
import { Dialog, Grid, Typography, IconButton, Button, TextField, Box, Paper, Switch, ListItem, ListItemText, MenuItem, Checkbox } from "@material-ui/core"
import setUserPrivDialogStyles from "../../assets/css/js/setUserPrivDialogStyles";
//components
import WhiteTable from "../tables/WhiteTable";
//icons
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import CancelIcon from '@material-ui/icons/Cancel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import RightArrow from '../../assets/icons/right-arrow.svg'
import LeftArrow from '../../assets/icons/left-arrow.svg'
import RightSingleArrow from '../../assets/icons/right-single-arrow.svg'
import LeftSingleArrow from '../../assets/icons/left-single-arrow.svg'
import CloseIcon from '@material-ui/icons/Close';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//redux
import { useDispatch, useSelector } from "react-redux";
import { cleanUserProfileModulesData, cleanUserProfileModulesDataAction, createUserModulesAction, getModulesAction, getUserModulesAction, getUsersBusinessAction, loadModulesByUserAction, removeUserModulesAction, searchUserAction, setUserAccessAction, updateModulesAction } from "../../redux/actions/adminAction";
import { primaryColor, tableTypographyColor } from "../../assets/css/js/mainTheme";

export default function AssignProfileDialog({ dialog, closeDialog, moreInfo }) {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.auth.user)
    const { modules, userProfileModules } = useSelector(state => state.admin)
    const classes = setUserPrivDialogStyles();
    const { userSearch, updateModules, selectedBusinessData, createUserModulesRes, userAdmin, adminUserModules } = useSelector(state => state.admin);
    const [tableData, setTableData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [helperEmail, setHelperEmail] = useState('');
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState('')
    const [idError, setIdError] = useState(false);
    const [helperId, setHelperId] = useState('');
    const [displaySearch, setDisplaySearch] = useState(true);
    const [displayModules, setDisplayModules] = useState(false);
    const [localModulesList, setLocalModulesList] = useState([]);
    const [userModules, setUserModules] = useState([]);
    const [displayUserModules, setDisplayUserModules] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [title, setTitle] = useState('Módulos del usuario');
    const [showOnlyUserModules, setShowOnlyUserModules] = useState(false);
    const [allAdminChecked, setAllAdminChecked] = useState(false);
    const [modulesTable, setModulesTable] = useState([]);
    const [checkModulesList, setCheckModulesList] = useState(false);
    const [allLocalModuleCheck, setAllLocalModuleCheck] = useState(false);
    const [allUserModuleCheck, setAllUserModuleCheck] = useState(false);
    const [userModuleChanges, setUserModuleChanges] = useState(false);
    const [moduleRows, setModuleRows] = useState([
        { id: 0, title: 'MÓDULO' },
        { id: 0, title: 'PERMISOS' },
    ])
    const [searchData, setsearchData] = useState({
        identification: '',
        email: ''
    });
    const { identification, email } = searchData;
    const [user, setUser] = useState({});
    const rows = [
        { id: 0, title: 'CÉDULA' },
        { id: 1, title: 'NOMBRES Y APELLIDOS' },
        { id: 2, title: 'CORREO' },
        { id: 3, title: 'ASIGNAR MÓDULOS' },
    ];
    function setData() {
        const data = {
            data_0: user.id,
            data_1: user.identificacion,
            data_2: user.nombres_apellidos,
            data_3: user.correo,
            t_adm: user.t_adm,
            id_usuario: user.id_usuario,
            assignButton: true
        };
        setTableData([data]);
    };

    useEffect(() => {
        if (userAdmin) {
            switch (userAdmin) {
                case 'module_admin': dispatch(loadModulesByUserAction(userModules));
                    break;
                default:
            }
        }
    }, [userAdmin])

    useEffect(() => {
        if (modules.length !== 0) {
            setLocalModulesList(modules.map(i => {
                return {
                    ...i,
                    checked: false,
                    userChecked: false
                }
            }));
        }
        setCheckModulesList(false)
    }, [modules, checkModulesList])
    useEffect(() => {
        if (userSearch.length !== 0) {
            setUser(userSearch[0]);
        }
    }, [userSearch]);
    useEffect(() => {
        if (user.length !== 0) {
            setData();
        }
    }, [user]);
    const handleSearchById = async () => {
        const response = await dispatch(searchUserAction({
            id_usuario: userLogin?.id,
            cedula: identification.trim()
        }));
        if (response.code === 1) {
            setShowTable(true);
            setIdError(false);
            setHelperId('');
        } else {
            setIdError(true);
            setHelperId('Usuario no Registrado')
        };
    };
    const handleSearchByEmail = async () => {
        const response = await dispatch(searchUserAction({
            id_usuario: userLogin?.id,
            correo: email.trim()
        }));
        if (response.code === 1) {
            setShowTable(true);
            setEmailError(false);
            setHelperEmail('');
        } else {
            setEmailError(true);
            setHelperEmail('Usuario no Registrado')
        };
    };
    const handleChange = ({ target }) => {
        setsearchData({
            ...searchData,
            [target.name]: target.value
        })
    };
    useEffect(() => {
        if (email.length || identification.length === 0) {
            setEmailError(false);
            setHelperEmail('');
            setIdError(false);
            setHelperId('');
        }
    }, [email, identification]);

    const handleClose = () => {
        closeDialog();
        setDisplayConfirmation(false);
        setDisplaySearch(true);
        setDisplayUserModules(false);
        setDisplayModules(false);
        setShowSuccessMsg(false);
        setShowTable(false);
        setsearchData({
            identification: '',
            email: ''
        });
        setUser({});
        dispatch(cleanUserProfileModulesDataAction());
        dispatch(updateModulesAction(false));
        setCheckModulesList(true);
    };
    useEffect(() => {
        if (createUserModulesRes?.code) {
            setShowSuccessMsg(true);
            setSuccessMsg(createUserModulesRes.msg)
        }
    }, [createUserModulesRes]);

    const handleAddNewModule = (id) => {
        const newData = localModulesList.map(i => {
            if (i.id === id) {
                if (i.checked) {
                    return {
                        ...i,
                        checked: false
                    }
                } else {
                    return {
                        ...i,
                        checked: true
                    }
                }
            }
            return i;
        });
        setLocalModulesList(newData);
    };

    useEffect(() => {
        console.log(userModules)
    }, [userModules]);
    //handler function for manage the switch state onchange event
    const handlechangeSwitchModule = ({ target }, id) => {
        console.log(id);
        console.log(userModules)
        const changedData = userModules.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    t_adm: target.checked,
                    t_restri: !target.checked
                }
            };
            return i;
        });
        console.log(changedData)
        setUserModules(changedData);
    };
    const removeUserModule = id => {
        const newData = userModules.filter(i => i.id !== id);
        const addedData = userModules.filter(i => i.id === id);
        setLocalModulesList([...localModulesList, ...addedData]);
        setUserModules(newData);
    };
    const handleDisplayModules = () => {
        setDisplaySearch(false);
        setShowTable(false);
        setDisplayModules(true);
    }
    const handleChangeUser = () => {
        setDisplayModules(false);
        setDisplaySearch(true);
        setLocalModulesList(modules);
        setUserModules([]);
    }
    const handleSaveModules = async () => {
        if (userProfileModules.length !== 0) {
            const data = userProfileModules.map(profileModule => {
                const filterData = userModules.filter(i => i.id_modulo === profileModule.id_modulo);
                if (filterData.length !== 0) {
                    console.log(filterData)
                    return filterData[0].id
                }
                return profileModule.id
            });
            if (data) {
                dispatch(removeUserModulesAction({
                    id: data
                }))
            }
        }
        const idModulesData = userModules.map(i => {
            if (i.id_modulo) {
                return i.id_modulo
            }
            return i.id;
        });
        const t_adm = userModules.map(i => {
            return i.t_adm;
        });
        const t_restri = userModules.map(i => {
            return i.t_restri;
        });
        const res = await dispatch(createUserModulesAction(
            {
                id_usuario: user.id,
                id_modulo: idModulesData,
                id_empresa: selectedBusinessData.id_empresa,
                t_adm: t_adm,
                t_restri: t_restri
            }
        ));
        if (res) {
            setSuccessMsg(res.msg);
            dispatch(getUserModulesAction());
        }
    }
    const resetDialog = () => {
        /*  if (userProfileModules.length !== 0) {
             setShowOnlyUserModules(true);
         } else {
             setShowOnlyUserModules(false);
         } */
        setDisplayConfirmation(false);
        setDisplayModules(false);
        setDisplaySearch(true);
        setSuccessMsg('');
        setShowTable(false);
        setDisplayUserModules(false);
        setsearchData({
            identification: '',
            email: ''
        });
        handleClose();
    };
    useEffect(() => {
        if (moreInfo) {
            setDisplaySearch(false);
            setDisplayModules(true);
            setTitle('Módulos del usuario');
            setUser({
                id: userProfileModules[0].id_usuario,
                nombres_apellidos: userProfileModules[0].nombre_apellidos
            });
            console.log(userProfileModules)
        }
    }, [moreInfo]);
    useEffect(() => {
        if (userProfileModules.length !== 0) {
            if (userAdmin === 'module_admin') {
                const removeRestringedModules = userProfileModules.map(i => {
                    const searchData = adminUserModules.filter(userModule => userModule.id_modulo === i.id_modulo);
                    if (searchData.length === 0) {
                        return null
                    } else {
                        return {
                            ...i,
                            id: i.id_modulo,
                            userChecked: false
                        }
                    }
                });
                console.log(searchData)
                const removedNullData = removeRestringedModules.filter(i => i !== null);
                setUserModules(removedNullData);
                console.log(adminUserModules)
                console.log(removedNullData)
                const removedData = adminUserModules.map(i => {
                    const objSearch = removedNullData.filter(userModule => userModule.id_modulo !== i.id_modulo);
                    if (objSearch.length === 0) {
                        console.log(objSearch)
                        return i;
                    };
                });
                console.log(removedData)
                const cleanData = removedData.filter(i => i !== undefined);
                console.log(cleanData);
                setLocalModulesList(cleanData);
            } else {
                setUserModules(userProfileModules.map(i => {
                    return {
                        ...i,
                        id: i.id_modulo,
                        userChecked: false
                    }
                }));
            }
        }
    }, [userProfileModules, userAdmin]);
    /* const handleUpdateUserModules = () => {
        setShowOnlyUserModules(false);
    }; */

    const handleTransferModules = () => {
        const checkedModules = localModulesList.filter(i => i.checked === true);
        const unCheckedModules = localModulesList.filter(i => i.checked === false);
        const resetModules = checkedModules.map(i => {
            return {
                ...i,
                checked: false,
                t_adm: true,
                t_restri: false
            }
        });
        setUserModules([...userModules, ...resetModules]);
        setLocalModulesList([...unCheckedModules]);
        setUserModuleChanges(true);
    }

    const handleTransferRestringedModules = () => {
        const checkedModules = localModulesList.filter(i => i.checked === true);
        const unCheckedModules = localModulesList.filter(i => i.checked === false);
        const resetModules = checkedModules.map(i => {
            return {
                ...i,
                checked: false,
                t_adm: false,
                t_restri: true
            }
        });
        setUserModules([...userModules, ...resetModules]);
        setLocalModulesList([...unCheckedModules]);
        setUserModuleChanges(true);
    }

    useEffect(() => {
        if (userModules.length !== 0) {
            console.log(userModules)
            const removedData = localModulesList.map(i => {
                const objSearch = userModules.filter(userModule => userModule.id_modulo === i.id);
                if (objSearch.length === 0) {
                    return i;
                };
            });
            const cleanData = removedData.filter(i => i !== undefined);
            console.log(cleanData);
            setLocalModulesList(cleanData);
            setModulesTable(userModules.map(i => {
                return {
                    data_0: i.id,
                    data_1: i.modulo,
                    data_2: i.t_adm ? 'Administrador' : 'Restringido'
                };
            }));
        };
    }, [userModules, adminUserModules]);

    const handleSelectUserModule = id => {
        const newData = userModules.map(i => {
            if (i.id === id) {
                if (i.userChecked) {
                    return {
                        ...i,
                        userChecked: false
                    }
                } else {
                    return {
                        ...i,
                        userChecked: true
                    }
                }
            }
            return i;
        });
        setUserModules(newData);
    };

    const handleReturnModules = () => {
        const checkedModules = userModules.filter(i => i.userChecked === true);
        console.log(checkedModules)
        const unCheckedModules = userModules.filter(i => i.userChecked === false);
        console.log(unCheckedModules);
        const newUserModules = unCheckedModules.map(i => {
            return {
                ...i,
                userChecked: false
            }
        });
        console.log(newUserModules)
        setLocalModulesList([...localModulesList, ...checkedModules]);
        setUserModules(newUserModules);
        setUserModuleChanges(true);
    };

    const handleTransferAllModules = () => {
        if (localModulesList.length !== 0) {
            setUserModules([...userModules, ...localModulesList]);
            setLocalModulesList([]);
        };
    };

    const handleTransferAllAdminModules = () => {
        if (localModulesList.length !== 0) {
            setUserModules([...userModules, ...localModulesList.map(i => {
                return {
                    ...i,
                    t_adm: true,
                    t_restri: false
                }
            })]);
            setLocalModulesList([]);
        };
    }

    const handleReturnAllModules = () => {
        if (userModules.length !== 0) {
            setLocalModulesList([...localModulesList, ...userModules]);
            setUserModules([]);
        }
    };

    const handleSetAdminModules = () => {
        const newData = userModules.map(i => {
            return {
                ...i,
                t_adm: !allAdminChecked,
                t_restri: allAdminChecked,
                switch: true
            }
        })
        setUserModules(newData);
        setAllAdminChecked(!allAdminChecked);
    };

    const handleTransferAllRestringedModules = () => {
        if (localModulesList.length !== 0) {
            setUserModules([...userModules, ...localModulesList.map(i => {
                return {
                    ...i,
                    t_adm: false,
                    t_restri: true
                }
            })]);
            setLocalModulesList([]);
        };
    };

    const selectAllLocalListModule = () => {
        if (allLocalModuleCheck) {
            setLocalModulesList(localModulesList.map(i => {
                return {
                    ...i,
                    checked: false
                }
            }))
        } else {
            setLocalModulesList(localModulesList.map(i => {
                return {
                    ...i,
                    checked: true
                }
            }))
        }
        setAllLocalModuleCheck(!allLocalModuleCheck)
    }

    const selectAllUserModule = () => {
        if (allUserModuleCheck) {
            setUserModules(userModules.map(i => {
                return {
                    ...i,
                    userChecked: false
                }
            }))
        } else {
            setUserModules(userModules.map(i => {
                return {
                    ...i,
                    userChecked: true
                }
            }))
        };
        setAllUserModuleCheck(!allUserModuleCheck)
    };

    useEffect(() => {
        if (localModulesList.length === 0) {
            setAllLocalModuleCheck(false);
        }
    }, [localModulesList]);

    return (
        <>
            <Dialog
                open={dialog}
                onClose={handleClose}
                maxWidth='md'
            >
                <Grid container className={classes.closeContainer}>
                    <Grid item xs={12}>
                        <Grid container justify='flex-end'>
                            <Grid item>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon size='large' color='secondary' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    {displayConfirmation ?
                        <Grid container className={classes.rootContainer}>
                            {successMsg.length ?
                                <Grid container justify='center' spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography align='center' variant='body1'>
                                            {successMsg}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant='contained' fullWidth color='secondary' onClick={resetDialog}>
                                            <Typography>
                                                Aceptar
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container justify='center' spacing={2} >
                                    <Grid item xs={12}>
                                        <Typography align='center' variant='body1'>
                                            {`Se habilitarán los módulos anteriores al usuario ${user.nombres_apellidos} ¿Está seguro?`}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant='contained' fullWidth color='secondary' onClick={handleSaveModules}>
                                            <Typography>
                                                Aceptar
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant='contained' fullWidth color='secondary' onClick={() => setDisplayConfirmation(false)}>
                                            <Typography>
                                                Cancelar
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                        :
                        <Grid container
                            justify='center'
                            alignItems='center'
                            className={classes.rootContainer}
                        >
                            <Grid item xs={12}>
                                <Grid container justify='center' alignItems='center' style={{ height: '100%' }} className={classes.titleContainer}>
                                    <Grid item>
                                        <Typography
                                            align='center'
                                            variant='h5'
                                            className={classes.title}
                                            color='secondary'
                                        >
                                            {user?.id ?
                                                `Perfil de ${user?.nombres_apellidos}`
                                                :
                                                'Perfil'
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {displaySearch &&
                                <Grid item xs={8}>
                                    <Grid container spacing={4} justify='center' className={classes.inputContainer}>
                                        <Grid item xs={12}>
                                            <Grid container justify='center' alignItems='center'>
                                                <Grid item xs={2}>
                                                    <Box mt={3}>
                                                        <AssignmentIndIcon
                                                            color='secondary'
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <TextField
                                                        disabled={email.length > 0}
                                                        label="Busqueda por Cédula"
                                                        fullWidth
                                                        color='secondary'
                                                        onChange={handleChange}
                                                        name='identification'
                                                        value={identification}
                                                        error={idError}
                                                        helperText={helperId}
                                                    />
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Box mt={3}>
                                                        <IconButton
                                                            onClick={handleSearchById}
                                                            color='secondary'
                                                            disabled={email.length > 0 || identification.length <= 0}
                                                        >
                                                            <SearchIcon />
                                                        </IconButton>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container justify='center' alignItems='center'>
                                                <Grid item xs={2}>
                                                    <Box mt={3}>
                                                        <EmailIcon
                                                            color='secondary'
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <TextField
                                                        disabled={identification.length > 0}
                                                        label="Busqueda por Correo"
                                                        color='secondary'
                                                        fullWidth
                                                        onChange={handleChange}
                                                        name='email'
                                                        value={email}
                                                        error={emailError}
                                                        helperText={helperEmail}
                                                    />
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Box mt={3}>
                                                        <IconButton
                                                            onClick={handleSearchByEmail}
                                                            color='secondary'
                                                            disabled={identification.length > 0 || email.length <= 0}
                                                        >
                                                            <SearchIcon />
                                                        </IconButton>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }
                            {displayModules &&
                                <>
                                    <Grid item xs={4}>
                                        <Grid container justify='flex-start'>
                                            <Grid container justify='center' spacing={2} >
                                                <Grid item xs={12}>
                                                    <Typography align='center' variant='h6'>
                                                        Módulos
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Button
                                                        size='small'
                                                        onClick={selectAllLocalListModule}
                                                        fullWidth variant='outlined'
                                                        color='secondary'>
                                                        <Grid container justify='center' alignItems='center'>
                                                            <Grid item>
                                                                <Checkbox size='small' checked={allLocalModuleCheck} />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body2'>
                                                                    Seleccionar todos
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container
                                                        justify='center'
                                                        spacing={1}
                                                        style={{ height: '250px', overflow: 'scroll', overflowX: 'hidden' }}
                                                    >
                                                        {localModulesList.map(i => (
                                                            <Grid item xs={10} key={i.id}>
                                                                <Button
                                                                    onClick={() => handleAddNewModule(i.id)}
                                                                    fullWidth
                                                                    variant={i.checked ? 'outlined' : 'inherit'}
                                                                    color={i.checked ? 'secondary' : 'default'}
                                                                >
                                                                    <Typography
                                                                        align='center'
                                                                        variant='body1'
                                                                    >
                                                                        {i.modulo}
                                                                    </Typography>
                                                                </Button>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container style={{/*  height: '200px', */ paddingLeft: 10, paddingRight: 10 }} justify='center' alignItems='center' spacing={1}>
                                            {/*  <Grid item xs={8}>
                                                    <Button fullWidth onClick={handleTransferAllRestringedModules}>

                                                        <Grid container spacing={1} justify='center'  >
                                                            <Grid item>
                                                                <Typography variant='body2'>Full restringido</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <img src={RightArrow} style={{ height: 15 }} alt='Transferir todos los módulos' />
                                                            </Grid>
                                                        </Grid>
                                                    </Button>
                                                </Grid> */}
                                            <Grid item xs={8}>
                                                <Button fullWidth onClick={handleTransferRestringedModules} variant='outlined' color='secondary'>
                                                    <Grid container spacing={1} justify='center' alignItems='center'  >
                                                        <Grid item>
                                                            <Typography variant='body1'>Restringido</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <ArrowForwardIcon fontSize='small' />
                                                        </Grid>
                                                    </Grid>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Button fullWidth onClick={handleTransferModules} variant='outlined' color='secondary' >
                                                    <Grid container spacing={1} justify='center' alignItems='center'  >
                                                        <Grid item>
                                                            <Typography variant='body1'>Administrador</Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <ArrowForwardIcon fontSize='small' />
                                                        </Grid>
                                                    </Grid>
                                                </Button>

                                            </Grid>
                                            <Grid item>

                                            </Grid>
                                            {/*  <Grid item xs={8}>
                                                    <Button fullWidth onClick={handleTransferAllAdminModules}>
                                                        <Grid container spacing={1} justify='center' >
                                                            <Grid item>
                                                                <Typography variant='body2'>Full Administrador</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <img src={RightArrow} style={{ height: 15 }} alt='Transferir todos los módulos' />
                                                            </Grid>
                                                        </Grid>
                                                    </Button>
                                                </Grid> */}
                                            <Grid item xs={8}>
                                                <Button fullWidth onClick={handleReturnModules} variant='outlined' color='secondary'>
                                                    <Grid container spacing={1} justify='center' alignItems='center'>
                                                        <Grid item>
                                                            <ArrowBackIcon fontSize='small' />
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant='body1'>Retirar módulos</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Button>
                                            </Grid>
                                            {/*  <Grid item xs={8}>
                                                    <Button fullWidth onClick={handleReturnAllModules}>
                                                        <Grid container spacing={1} justify='center'>
                                                            <Grid item>
                                                                <img src={LeftArrow} style={{ height: 15 }} alt='Transferir todos los módulos' />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body2'>Quitar Todos</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Button>
                                                </Grid> */}
                                            <Grid item xs={12}>
                                                <Grid container className={classes.conventionsContainer} justify='center'>
                                                    <Grid item xs={6}>
                                                        <Grid container justify='center' alignItems='center'>
                                                            <Grid item>
                                                                <FiberManualRecordIcon style={{ color: primaryColor }} />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body2'>
                                                                    Administrador
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Grid container justify='center' alignItems='center'>
                                                            <Grid item>
                                                                <FiberManualRecordIcon style={{ color: '#A4A5A3' }} />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='body2'>
                                                                    Restringido
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={8}>


                                                <Button variant='contained' fullWidth color='primary' onClick={() => setDisplayConfirmation(true)}>
                                                    <Typography variant='body1'>
                                                        Aplicar cambios
                                                    </Typography>
                                                </Button>


                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container justify='center' spacing={2} alignItems='center'>
                                            {userModules.length ?
                                                <>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            align='center'
                                                            variant='h6'
                                                        >
                                                            {title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Button
                                                            size='small'
                                                            onClick={selectAllUserModule}
                                                            fullWidth
                                                            variant='outlined'
                                                            color='secondary'
                                                        >
                                                            <Checkbox size='small' checked={allUserModuleCheck} />
                                                            <Typography variant='body2'>
                                                                Seleccionar Todos
                                                            </Typography>
                                                        </Button>
                                                    </Grid>
                                                    {/*  <Grid item xs={10}>
                                                            <Button color='secondary' fullWidth variant='outlined' onClick={handleSetAdminModules}>
                                                                <Typography
                                                                    variant='body2'
                                                                >
                                                                    Establecer todos Administrador
                                                                </Typography>
                                                                <Switch size='small' checked={allAdminChecked} />
                                                            </Button>
                                                        </Grid> */}
                                                    <Grid item xs={12}>
                                                        <Grid container
                                                            justify='center'
                                                            spacing={1}
                                                            alignItems='flex-start'
                                                            style={{ height: '250px', overflow: 'scroll', overflowX: 'hidden' }}
                                                        >
                                                            {userModules.map(i => (
                                                                <Grid item xs={10} key={i.id}>
                                                                    <Button
                                                                        onClick={() => handleSelectUserModule(i.id)}
                                                                        variant='outlined'
                                                                        fullWidth
                                                                        color={i.t_adm ? 'primary' : '#CACACA'}
                                                                        size='small'
                                                                        variant='contained'
                                                                    /* style={{ backgroundColor: i.t_adm ? primaryColor : '#FFFF' }} */
                                                                    >
                                                                        <Grid container
                                                                            justify='center'
                                                                            alignItems='center'
                                                                        /*  spacing={1} */
                                                                        >
                                                                            <Grid item xs={2}>

                                                                                <Switch
                                                                                    size='small'
                                                                                    color='secondary'
                                                                                    checked={i.t_adm}
                                                                                    onChange={(e) => handlechangeSwitchModule(e, i.id)}
                                                                                />

                                                                            </Grid>
                                                                            <Grid item xs={8}>
                                                                                <Grid container justify='center'>
                                                                                    <Grid item>
                                                                                        <Typography
                                                                                            variant='body1'
                                                                                            color='default'
                                                                                            align='center'
                                                                                        >
                                                                                            {i.modulo}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid item xs={2}>
                                                                                <Checkbox size='small' checked={i.userChecked} />
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Button>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </Grid>

                                                </>
                                                :
                                                <Grid container
                                                    style={{ minHeight: '300px' }}
                                                    alignItems='center'
                                                    justify='center'
                                                    spacing={2}
                                                >
                                                    <Grid item  >
                                                        <Typography variant='body1' align='center'>
                                                            Seleccione los módulos para este usuario
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            }
                                        </Grid>
                                    </Grid>
                                </>
                            }
                            {showTable &&
                                <>
                                    <Grid item xs={12}>
                                        <Grid container spacing={3} justify='center' className={classes.tableContainer} >
                                            <Grid item xs={12}>
                                                <WhiteTable rows={rows} tableData={tableData} handleDisplayModules={handleDisplayModules} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            }
                            {showSuccessMsg &&
                                <Grid container justify='center' spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant='body1'
                                            align='center'
                                            color={tableTypographyColor}
                                        >
                                            {successMsg}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            color='secondary'
                                            onClick={handleClose}
                                        >
                                            <Typography>
                                                Aceptar
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            }

                            {/* <Grid container justify='center' className={classes.addModulesContainer}>
                                    <Grid item xs={4}>
                                        <Button variant='contained' fullWidth color='primary' onClick={() => setDisplayConfirmation(true)}>
                                            <Typography variant='body1'>
                                                Aplicar cambios
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid> */}

                        </Grid>
                    }
                </Grid>
            </Dialog>
        </>
    )
}
