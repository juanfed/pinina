/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
//material ui
import { Dialog, Grid, IconButton, TextField, Typography, Button, CircularProgress } from "@mui/material";
import { forgotPasswordStyles } from '../../assets/css/js/forgotPasswordStyles';
import { useDispatch, useSelector } from "react-redux";
//icons
import CloseIcon from '@mui/icons-material/Close';
import CheckEmailModal from '../../components/verifyCode/CheckEmailModal';
import { useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { genPassCodeAction, setForgotPasswordModal, updatePassCodeAction, verifyPassCodeAction } from '../../redux/actions/AuthAction';

function ForgotPassword() {
    const classes = forgotPasswordStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const fullScreenResponsive = useMediaQuery(theme.breakpoints.down('md'));
    const [submitCode, setSubmitCode] = useState(false);
    const { forgotPasswordModal } = useSelector(state => state.auth);
    const [displayMsg, setDisplayMsg] = useState(false);
    const [verifyCode, setVerifyCode] = useState('')
    const [verifyMsg, setVerifyMsg] = useState('');
    const [registrySuccess, setRegistrySuccess] = useState(false);
    const [correo, setCorreo] = useState('');
    const [loader, setLoader] = useState(false);
    const [displayPasswordChange, setDisplayPasswordChange] = useState(false);
    const [newPassword, setNewPassword] = useState({
        password: '',
        password_2: ''
    });
    const [checkEmailModal, setcheckEmailModal] = useState(false);
    const [updatePasswordSuccess, setUpdatePasswordSuccess] = useState(false);
    const [id_usuario, setId_Usuario] = useState('')
    const { password, password_2 } = newPassword;

    const handleChange = ({ target }) => {
        setNewPassword({
            ...newPassword,
            [target.name]: target.value
        })
    };

    const handleSavePassword = () => {
        if (password === password_2) {
            setDisplayMsg(false);
            sendNewPassword();
        } else {
            setVerifyMsg('Las contraseñas no coinciden');
            setDisplayMsg(true);
        }
    }

    const sendNewPassword = async () => {
        const response = await dispatch(updatePassCodeAction({
            id_usuario: id_usuario,
            password: password
        }));
        if (response) {
            setUpdatePasswordSuccess(true)
        }
    }

    const generateCode = async () => {
        setVerifyMsg('Validando...')
        setLoader(true);
        setDisplayMsg(false);
        const response = await dispatch(genPassCodeAction({ correo: correo }));
        if (response.code === '1') {
            setVerifyMsg(response.msg);
            setId_Usuario(response.id_usuario)
            setDisplayMsg(false);
            setLoader(false);
            setcheckEmailModal(true);
        } else {
            setTimeout(() => {
                setDisplayMsg(true);
                setLoader(false);
                setVerifyMsg('El correo no se encuentra registrado')
            }, 1500);

        }
    };

    const sendVerifyCode = async () => {
        const response = await dispatch(verifyPassCodeAction({
            correo: correo,
            codigo: verifyCode
        }));
        if (response.code === "1") {
            setRegistrySuccess(true);
            setVerifyMsg(response.msg)
            setTimeout(() => {
                setDisplayPasswordChange(true);
            }, 1500);

        } else {
            setVerifyMsg('Haz introducido un código inválido, verifica e inténtalo de nuevo')
        }
    }
    // verification code
    useEffect(() => {
        if (submitCode) {
            setTimeout(() => {
                sendVerifyCode()
            }, 1500);
        } else {
            setVerifyMsg('Validando...')
        }
        setSubmitCode(false);
    }, [submitCode]);

    const handleClose = () => {
        dispatch(setForgotPasswordModal(false));
    }
    return <>
        <Dialog
            open={forgotPasswordModal}
            onClose={handleClose}
            fullScreen={fullScreenResponsive}
        >
            {
                displayPasswordChange ?
                    updatePasswordSuccess ?
                        <Grid container className={classes.rootContainer}>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <IconButton onClick={handleClose} size="large">
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center' spacing={2} className={classes.mainContainer}>

                                <Grid item xs={12}>
                                    <Typography variant='h6'>
                                        La contraseña se ha actualizado correctamente
                                    </Typography>
                                </Grid>

                                <Grid container justifyContent='center' className={classes.buttonContainer}>
                                    <Grid item xs={4}>
                                        <Button
                                            onClick={handleClose}
                                            className={classes.button}
                                            variant='contained'
                                            color='secondary'>
                                            Aceptar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <Grid container className={classes.rootContainer}>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <IconButton onClick={handleClose} size="large">
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center' spacing={2} className={classes.mainContainer}>

                                <Grid item xs={12}>
                                    <Typography variant='h6'>
                                        Ingresa nueva contraseña
                                    </Typography>
                                </Grid>
                                {displayMsg &&
                                    <Grid item xs={12}>
                                        <Typography>
                                            {verifyMsg}
                                        </Typography>
                                    </Grid>
                                }
                                <Grid item xs={10}>
                                    {loader &&
                                        <CircularProgress />
                                    }
                                </Grid>
                                <Grid container spacing={2} justifyContent='center'>
                                    <Grid item xs={10}>
                                        <TextField
                                            onChange={handleChange}
                                            name='password' value={password}
                                            size='small' variant='outlined'
                                            label='Nueva contraseña'
                                            type='password'
                                            color='secondary'
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            onChange={handleChange}
                                            name='password_2'
                                            value={password_2}
                                            size='small'
                                            variant='outlined'
                                            label='Repite Contraseña'
                                            type='password'
                                            color='secondary'
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent='center' className={classes.buttonContainer}>
                                    <Grid item xs={4}>
                                        <Button
                                            disabled={password.length && password_2.length < 4}
                                            onClick={handleSavePassword}
                                            className={classes.button}
                                            variant='contained'
                                            color='secondary'>
                                            Enviar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    :
                    checkEmailModal ?
                        <Grid container className={classes.rootContainer}>
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <IconButton onClick={handleClose} size="large">
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <CheckEmailModal
                                submitCode={submitCode}
                                setSubmitCode={setSubmitCode}
                                setVerifyCode={setVerifyCode}
                                verifyMsg={verifyMsg}
                                registrySuccess={registrySuccess}
                                generateCode={generateCode}
                                loader={loader}
                                checkEmailModal={checkEmailModal}
                            />
                        </Grid>
                        :
                        <>
                            <Grid container justifyContent='flex-end' className={classes.closeButtonContainer}>
                                <Grid item>
                                    <IconButton onClick={handleClose} size="large">
                                        <CloseIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.rootContainer}>

                                <Grid container alignItems='center' justifyContent='center' spacing={2} className={classes.mainContainer}>
                                    <Grid item>
                                        <Grid container spacing={2} justifyContent='center'>
                                            <Grid item xs={12}>
                                                <Grid container justifyContent='center' className={classes.emailTitle}>
                                                    <Typography align='center' variant='h6'>
                                                        Ingresa tu correo electrónico
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            {displayMsg &&
                                                <Grid item xs={12}>
                                                    <Typography>
                                                        {verifyMsg}
                                                    </Typography>
                                                </Grid>
                                            }
                                            <Grid item xs={10}>
                                                {loader ?
                                                    <CircularProgress />
                                                    :
                                                    <TextField
                                                        fullWidth
                                                        className={classes.input}
                                                        onChange={(e) => setCorreo(e.target.value)}
                                                        value={correo} label='Correo'
                                                        variant='outlined'
                                                        type='email'
                                                        color='secondary'
                                                    />
                                                }
                                            </Grid>
                                            <Grid container justifyContent='center' className={classes.buttonContainer}>
                                                <Grid item xs={4}>
                                                    <Grid container className={classes.buttonEmail}>
                                                        <Button fullWidth disabled={correo.length === 0} onClick={generateCode} className={classes.button} variant='contained' color='secondary'>Continuar</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
            }
        </Dialog>
    </>;
}

export default ForgotPassword
