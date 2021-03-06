//hooks
import { useState, useEffect } from "react";
//material ui
import { Dialog, Grid, Typography, IconButton, Button, TextField, Box } from "@mui/material"
import setUserPrivDialogStyles from "../../assets/css/js/setUserPrivDialogStyles";
//components
import WhiteTable from "../tables/WhiteTable";
//icons
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
//redux
import { useDispatch, useSelector } from "react-redux";
import { getUsersBusinessAction, searchUserAction, setUserAccessAction } from "../../redux/actions/adminAction";
import { tableTypographyColor } from "../../assets/css/js/mainTheme";

export default function SetUserPrivDialog({ dialog, closeDialog }) {
    const dispatch = useDispatch();
    const classes = setUserPrivDialogStyles();
    const {
        userSearch,
        currentUserDataSettings,
        selectedBusinessData
    } = useSelector(state => state.admin);
    const { user } = useSelector(state => state.auth);
    const [tableData, setTableData] = useState([]);
    const [privUserText, setPrivUserText] = useState('Restringido')
    const [showTable, setShowTable] = useState(false);
    const [showConfirmMsg, setShowConfirmMsg] = useState(false)
    const [emailError, setEmailError] = useState(false);
    const [helperEmail, setHelperEmail] = useState('');
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState('')
    const [idError, setIdError] = useState(false);
    const [helperId, setHelperId] = useState('')
    const [searchData, setsearchData] = useState({
        identification: '',
        email: ''
    });
    const { identification, email } = searchData;
    const [users, setUsers] = useState([]);
    const rows = [
        { id: 0, title: 'CÉDULA' },
        { id: 1, title: 'NOMBRES Y APELLIDOS' },
        { id: 2, title: 'CORREO' },
        { id: 3, title: 'ESTADO' },
        { id: 4, title: 'ADMINISTRADOR' },
    ];
    function setData() {
        let data = [];
        for (let i = 0; i < users.length; i++) {
            data.push({
                data_0: users[i].id,
                data_1: users[i].identificacion,
                data_2: users[i].nombres_apellidos,
                data_3: users[i].correo,
                data_4: users[i].descripcion_nivel,
                adminSwitch: true,
                t_adm: users[i].t_adm,
                id_usuario: users[i].id_usuario
            });
        }
        setTableData(data);
    };
    useEffect(() => {
        if (userSearch.length !== 0) {
            setUsers(userSearch);
        }
    }, [userSearch]);
    useEffect(() => {
        if (users.length !== 0) {
            setData();
        }
    }, [users]);
    const handleSearchById = async () => {
        const response = await dispatch(searchUserAction({
            id_usuario: user.id,
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
            id_usuario: user.id,
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
    useEffect(() => {
        if (currentUserDataSettings) {
            if (currentUserDataSettings.t_adm) {
                setPrivUserText('Administrador')
            } else {
                setPrivUserText('Restringido')
            }
        }
    }, [currentUserDataSettings]);
    const handleSaveUser = async () => {
        const response = await dispatch(setUserAccessAction({
            id_usuario: userSearch[0].id,
            id_empresa: selectedBusinessData.id_empresa,
            t_adm: currentUserDataSettings.t_adm,
            t_restri: currentUserDataSettings.t_restri
        }));
        if (response.data?.code) {
            setSuccessMsg(response.msg.respuesta);
            setShowConfirmMsg(false);
            setShowTable(false);
            setShowSuccessMsg(true);
        }
    };
    const handleResetModal = () => {
        dispatch(getUsersBusinessAction());
        setShowSuccessMsg(false);
        setsearchData({
            identification: '',
            email: ''
        })
    }
    const handleClose = () => {
        setShowSuccessMsg(false);
        setShowTable(false);
        setShowConfirmMsg(false);
        setsearchData({
            identification: '',
            email: ''
        })
        closeDialog();
    }
    return <>
        <Dialog
            open={dialog}
            onClose={handleClose}
            maxWidth='lg'
        >
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent='flex-end' className={classes.titleContainer}>
                        <Grid item>
                            <IconButton onClick={handleClose} size="large">
                                <CloseIcon size='large' color='secondary' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container
                    justifyContent='center'
                    className={classes.rootContainer}
                >

                    <Grid item xs={12}>
                        <Grid container justifyContent='center' className={classes.titleContainer}>
                            <Grid item>
                                <Typography
                                    align='center'
                                    variant='h5'
                                    className={classes.title}
                                    color='secondary'
                                >
                                    Agregar Administradores
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={4} alignItems='center' justifyContent='center' className={classes.inputContainer}>
                            <Grid item xs={4}>
                                <Grid container justifyContent='center' alignItems='center'>
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
                                                size="large">
                                                <SearchIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container alignItems='center' justifyContent='center'>
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
                                                size="large">
                                                <SearchIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {showTable &&
                        <>
                            <Grid item xs={12}>
                                <Grid container spacing={3} justifyContent='center' className={classes.tableContainer} >
                                    <Grid item xs={12}>
                                        <WhiteTable rows={rows} tableData={tableData} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            {!showConfirmMsg &&
                                <Grid item xs={3}>
                                    <Button
                                        color='secondary'
                                        fullWidth
                                        variant='contained'
                                        onClick={() => setShowConfirmMsg(true)}
                                    >
                                        <Typography
                                            color='#fff'
                                        >
                                            Agregar Usuario
                                        </Typography>
                                    </Button>
                                </Grid>
                            }
                        </>
                    }
                    {showConfirmMsg &&
                        <Grid container justifyContent='center' spacing={3}>
                            <Grid item xs={12}>
                                <Typography
                                    variant='body1'
                                    align='center'
                                    color={tableTypographyColor}
                                >
                                    Se agregará este usuario como <b>{privUserText}</b> ¿Desea Continuar?
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    color='secondary'
                                    onClick={handleSaveUser}
                                >
                                    <Typography>
                                        Aceptar
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => setShowConfirmMsg(false)}
                                >
                                    <Typography>
                                        Cancelar
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    }
                    {showSuccessMsg &&
                        <Grid container justifyContent='center' spacing={3}>
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
                                    onClick={handleResetModal}
                                >
                                    <Typography>
                                        Aceptar
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Dialog>
    </>;
}
