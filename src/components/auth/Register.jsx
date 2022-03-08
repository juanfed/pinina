import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, TextField, Dialog, Divider } from '@mui/material/';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
//material lab for  autocomplete field countries
import Autocomplete from '@mui/material/Autocomplete';

//components
import CheckEmailModal from "../verifyCode/CheckEmailModal";
//component for check the verification code to register


// Social redes
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// Classname
import classnames from 'classnames';

// Reactstrap
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, NavItem } from "reactstrap";

// Snackbar
import { useSnackbar } from "notistack";

// Actions
import { ConsultCountries, genRegCodeAction, RegisterUser, verifyRegCodeAction } from '../../redux/actions/AuthAction';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

//icons
import googleLogo from '../../assets/icons/google.svg'
// Material UI Styles 
// import authStyles from '../assets/css/js/authStyles';
import { registerStyles } from "../../assets/css/js/authStyles";

export default function Register() {

    // Styles Material UI instance 
    const classes = registerStyles();

    // Router Instance
    const router = useRouter();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { ubicaciones_geograficas, message } = useSelector(state => state.auth);
    const { countries } = useSelector(state => state.main);
    // Local State
    const [userData, setUserData] = useState({
        tipo: 'NO',
        correo: '',
        password: '',
        origen_cuenta: 'Registro_Normal',
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        telefono: '',
        ubicacion: '169',
        nivel_seguridad: 1,
        password_2: ''
    });
    const { correo,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        telefono,
        codigo,
        password,
        password_2,
        ubicacion
    } = userData;
    const [focusedNames, setFocusedNames] = useState(false);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [verifyDialog, setVerifyDialog] = useState(false);
    const [checkEmailModal, setCheckEmailModal] = useState(true);
    const [verifyMsg, setVerifyMsg] = useState('');
    const [submitCode, setSubmitCode] = useState(false);
    const [registrySuccess, setRegistrySuccess] = useState(false);
    const [registerToLogin, setRegisterToLogin] = useState();
    const [verifyCode, setVerifyCode] = useState('');
    const [countryValue, setCountryValue] = useState('')
    const [idCountry, setIdCountry] = useState('')

    // UseEffect for login
    // useEffect(() => {
    //     dispatch(ConsultCountries());
    //         if (message.code !== 1) {
    //             enqueueSnackbar(message.msg, { variant: 'warning' });
    //         } else {
    //             enqueueSnackbar(message.msg, { variant: 'success' });
    //             setTimeout(() => {
    //                 router.push('main/MainPage');
    //             }, 1000);
    //         }       
    // }, [message.msg]);

    //function to generate verification Code
    const generateCode = async () => {
        setVerifyMsg('Validando...');
        const response = await dispatch(genRegCodeAction(userData));
        if (response.code === '1') {
            console.log(response)
            setVerifyDialog(true);
            setVerifyMsg(response.msg);
        } else {
            enqueueSnackbar(response.msg, { variant: 'error' });
        }
    };

    //function for verify the generate code
    const sendVerifyCode = async () => {
        const response = await dispatch(verifyRegCodeAction({
            correo: correo,
            primer_nombre: primer_nombre,
            segundo_nombre: segundo_nombre,
            primer_apellido: primer_apellido,
            segundo_apellido: segundo_apellido,
            telefono: telefono,
            codigo: verifyCode,
            password: password,
            ubicacion: ubicacion
        }));

        if (response.code === '1') {
            setRegistrySuccess(true);
            setVerifyMsg(response.msg);
        } else {
            setVerifyMsg(response.msg)
        }
    };
    //function to manage onChange event in inputs
    const handleChange = ({ target }) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        });
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
    // Menú
    const handleClick = () => {
        setOpen(!open);
    }
    const handleClickPass = () => {
        setShowPassword(!showPassword);
    }
    // Country
    // const handleClickCountry = (data) => {
    //     setDataUser({
    //         ...dataUser,
    //         codigo_ubicacion_geografica: data
    //     });
    // }

    //Inicio de sesión con redes sociales (Facebook)
    const responseFacebook = (response) => {
        console.log(response);
        const token = response.accessToken
        const userID = response.id
        const origen_cuenta = 'Facebook'
        const nivel_seguridad = '1'
        //dispatch(RegisterUser({ token, userID, origen_cuenta, nivel_seguridad }));
    }

    //Inicio de sesión con redes sociales (Google)
    const responseGoogle = (response) => {
        // Extraction
        let data = {
            token: response.tokenId,
            origen_cuenta: 'Google'
        };
        dispatch(RegisterUser(data));
    }

    //register to Login 
    useEffect(() => {
        if (registerToLogin) {
            setVerifyDialog(false);
            router.push('/petsAndClients');
        }
    }, [registerToLogin]);
    //errors Validation
    //messages
    const [firstNameMsg, setFirstNameMsg] = useState('');
    const [secNameMsg, setSecNameMsg] = useState('');
    const [lastNameMsg, setLastNameMsg] = useState('');
    const [secLastNameMsg, setSecLastNameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [telMsg, setTelMsg] = useState('');
    const [passwMsg, setPasswMsg] = useState('');
    const [passw_2Msg, setPassw_2Msg] = useState('');
    const [countryMsg, setCountryMsg] = useState('');
    //Bool errors
    const [firstNameError, setFirstNameError] = useState(false);
    const [secNameError, setSecNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [secLastNameError, setSecLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [telError, setTelError] = useState(false);
    const [passwError, setPasswError] = useState(false);
    const [passw_2Error, setPassw_2Error] = useState(false);
    const [registerError, setRegisterError] = useState(true);
    const [countryError, setCountryError] = useState(false);
    //checking onClick Event
    const [firstNameClicked, setFirstNameClicked] = useState(false);
    const [secNameClicked, setSecNameClicked] = useState(false);
    const [lastNameClicked, setLastNameClicked] = useState(false);
    const [secLastNameClicked, setSecLastNameClicked] = useState(false);
    const [emailClicked, setEmailClicked] = useState(false);
    const [telClicked, setTelClicked] = useState(false);
    const [passwClicked, setPasswClicked] = useState(false);
    const [passw_2Clicked, setPassw_2Clicked] = useState(false);
    const [countryClicked, setCountryClicked] = useState(false);
    //regular expressions
    const NAMES_REG_VAR = /^[a-zA-ZÁ-ÿ\s]{1,40}$/;
    const EMAIL_REG_VAR = /.@./;
    const TEL_REG_VAR = /[0-9]{10}/;
    // const PASSW_REG_VAR = /^[a-zA-ZÁ-ÿ-\s]{6,15}$/;
    //errors functions
    //First Name
    const handleClickFirstName = () => {
        if (!firstNameClicked) {
            setFirstNameMsg('*De 3 a 15 Caractéres');
            setFirstNameError(true);
            setFirstNameClicked(true)
        }
    }
    //Second Name
    const handleClickSecName = () => {
        if (!secNameClicked) {
            setSecNameMsg('*De 3 a 15 Caractéres');
            setSecNameError(true);
            setSecNameClicked(true)
        }
    }
    //Last Name
    const handleClickLastName = () => {
        if (!lastNameClicked) {
            setLastNameMsg('*De 3 a 15 Caractéres');
            setLastNameError(true);
            setLastNameClicked(true)
        }
    }
    //Second Last Name
    const handleClickSecLastName = () => {
        if (!secLastNameClicked) {
            setSecLastNameMsg('*De 3 a 15 Caractéres');
            setSecLastNameError(true);
            setSecLastNameClicked(true)
        }
    }
    //Email
    const handleClickEmail = () => {
        if (!emailClicked) {
            setEmailMsg('*Introduzca un correo válido');
            setEmailError(true);
            setEmailClicked(true)
        }
    }
    //Telephone
    const handleClickTel = () => {
        if (!telClicked) {
            setTelMsg('*Introduzca un teléfono válido');
            setTelError(true);
            setTelClicked(true)
        }
    }
    //Password
    const handleClickPassw = () => {
        if (!passwClicked) {
            setPasswMsg('*Digite una contraseña de 6 a 15 caracteres');
            setPasswError(true);
            setPasswClicked(true)
        }
    }
    //Repeat Password
    const handleClickPassw_2 = () => {
        if (!passw_2Clicked) {
            setPassw_2Msg('*Las contraseñas deben coincidir');
            setPassw_2Error(true);
            setPassw_2Clicked(true)
        }
    }
    //country
    const handleClickCountry = () => {
        if (!countryClicked) {
            setCountryMsg('*Inserte un país');
            setCountryError(true);
            setCountryClicked(true)
        }
    }
    //hook error event listener_ firstName
    useEffect(() => {
        if (firstNameClicked) {
            if (primer_nombre.length <= 2 || primer_nombre.length >= 15) {
                setFirstNameMsg('*De 3 a 15 Caractéres');
                setFirstNameError(true);
            } else {
                let charValidate = NAMES_REG_VAR.test(primer_nombre);
                if (charValidate) {
                    setFirstNameMsg('');
                    setFirstNameError(false);
                } else {
                    setFirstNameMsg('*Sólo Letras Mayúsculas o minúsculas');
                    setFirstNameError(true);
                }

            }
        }
    }, [primer_nombre, firstNameClicked]);
    //hook error event listener_ SecondName
    useEffect(() => {
        if (secNameClicked) {
            if (segundo_nombre.length <= 2 || segundo_nombre.length >= 15) {
                setSecNameMsg('*De 3 a 15 Caractéres');
                setSecNameError(true);
            } else {
                let charValidate = NAMES_REG_VAR.test(segundo_nombre);
                if (charValidate) {
                    setSecNameMsg('');
                    setSecNameError(false);
                } else {
                    setSecNameMsg('*Sólo Letras Mayúsculas o minúsculas');
                    setSecNameError(true);
                }
            }
        }
    }, [segundo_nombre, secNameClicked]);
    //hook error event listener_ LastName
    useEffect(() => {
        if (lastNameClicked) {
            if (primer_apellido.length <= 2 || primer_apellido.length >= 15) {
                setLastNameMsg('*De 3 a 15 Caractéres');
                setLastNameError(true);
            } else {
                let charValidate = NAMES_REG_VAR.test(primer_apellido);
                if (charValidate) {
                    setLastNameMsg('');
                    setLastNameError(false);
                } else {
                    setLastNameMsg('*Sólo Letras Mayúsculas o minúsculas');
                    setLastNameError(true);
                }
            }
        }
    }, [primer_apellido, lastNameClicked]);
    //hook error event listener_ Second LastName
    useEffect(() => {
        if (secLastNameClicked) {
            if (segundo_apellido.length <= 2 || segundo_apellido.length >= 15) {
                setSecLastNameMsg('*De 3 a 15 Caractéres');
                setSecLastNameError(true);
            } else {
                let charValidate = NAMES_REG_VAR.test(segundo_apellido);
                if (charValidate) {
                    setSecLastNameMsg('');
                    setSecLastNameError(false);
                } else {
                    setSecLastNameMsg('*Sólo Letras Mayúsculas o minúsculas');
                    setSecLastNameError(true);
                }
            }
        }
    }, [segundo_apellido, secLastNameClicked]);
    //hook error event listener_ email
    useEffect(() => {
        if (emailClicked) {
            let charValidate = EMAIL_REG_VAR.test(correo);
            console.log(charValidate)
            if (charValidate) {
                setEmailMsg('');
                setEmailError(false);
            } else {
                setEmailMsg('*Introduzca un correo válido');
                setEmailError(true);
            }
        }
    }, [correo, emailClicked]);
    //hook error event listener_ telephone
    useEffect(() => {
        if (telClicked) {
            let charValidate = TEL_REG_VAR.test(telefono);
            console.log(charValidate)
            if (charValidate) {
                setTelMsg('');
                setTelError(false);
            } else {
                setTelMsg('*Introduzca un teléfono válido');
                setTelError(true);
            }
        }
    }, [telefono, telClicked]);
    //hook error event listener_ password
    useEffect(() => {
        if (passwClicked) {
            if (password.length <= 5 || password.length >= 15) {
                setPasswMsg('*Digite una contraseña de 6 a 15 caracteres');
                setPasswError(true);
            } else {
                setPasswMsg('');
                setPasswError(false);
            }
        }
    }, [password, passwClicked]);
    //hook error event listener_ password_2
    useEffect(() => {
        if (passw_2Clicked) {
            if (password.trim() === password_2.trim()) {
                setPassw_2Msg('');
                setPassw_2Error(false);
            } else {
                setPassw_2Msg('*Las contraseñas deben coincidir');
                setPassw_2Error(true);
            }
        }
    }, [password_2, passw_2Clicked]);
    //hook error event listener_ country
    useEffect(() => {
        if (countryClicked) {
            if (ubicacion.length !== 0) {
                setCountryMsg('');
                setCountryError(false);
            } else {
                setCountryMsg('*Inserte un País');
                setCountryError(true);
            }
        }
    }, [ubicacion, countryClicked]);
    //hook error event Allow Registration
    useEffect(() => {
        if (
            primer_nombre.length &&
            segundo_nombre.length &&
            primer_apellido.length &&
            segundo_apellido.length &&
            password.length &&
            password_2.length &&
            ubicacion.length &&
            correo.length &&
            telefono.length !== 0 &&
            !firstNameError &&
            !secNameError &&
            !lastNameError &&
            !secLastNameError &&
            !emailError &&
            !telError &&
            !passwError &&
            !passw_2Error
        ) {
            setRegisterError(false);
        } else {
            setRegisterError(true);
        }
    }, [primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        password,
        ubicacion,
        correo,
        telefono,
        firstNameError,
        secNameError,
        lastNameError,
        secLastNameError,
        emailError,
        telError,
        passwError,
        passw_2Error,
        countryError
    ]);

    //functions for set the country api
    useEffect(() => {
        if (countryClicked) {
            if (countryValue?.length !== 0) {
                let idCountry = countries.filter(item => item.descripcion === countryValue);
                if (idCountry.length !== 0) {
                    setIdCountry(idCountry[0].id_codigo)
                }
            } else {
                setIdCountry('')
                setCountryMsg('*Inserte un País');
                setCountryError(true);
            }
        }
    }, [countryValue]);

    useEffect(() => {
        if (idCountry.length !== 0) {
            setUserData({ ...userData, ubicacion: idCountry })
        }
    }, [idCountry])
    // Function to submit
    const verifyFields = () => {

        // Extraction
        // const { correo, password, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, codigo_ubicacion_geografica } = dataUser;

        // if (correo !== '' && password !== '' && primer_nombre !== '' && segundo_nombre !== '' && primer_apellido !== '' && segundo_apellido !== '' && codigo_ubicacion_geografica !== '') {
        //     dispatch(RegisterUser(dataUser));
        // } else {
        //     enqueueSnackbar('Los campos de Información no pueden ir vacios', { variant: 'warning' });
        // }
        // setCheckEmailModal(true);
        setFirstNameClicked(true);
        setSecNameClicked(true);
        setLastNameClicked(true);
        setSecLastNameClicked(true);
        setEmailClicked(true);
        setTelClicked(true);
        setPasswClicked(true);
        setPassw_2Clicked(true);
        setCountryClicked(true);
        handleSubmit();
    }

    const handleSubmit = () => {
        if (
            primer_nombre.length &&
            segundo_nombre.length &&
            primer_apellido.length &&
            segundo_apellido.length &&
            password.length &&
            password_2.length &&
            ubicacion.length &&
            correo.length &&
            telefono.length !== 0 &&
            !firstNameError &&
            !secNameError &&
            !lastNameError &&
            !secLastNameError &&
            !emailError &&
            !telError &&
            !passwError &&
            !passw_2Error
        ) {
            generateCode()
        }
    }

    return <>
        <Grid container
            justifyContent='center'
            spacing={2}
            className={classes.mainContainer}
        >
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    name='primer_nombre'
                    value={primer_nombre}
                    type='text'
                    label='Primer nombre'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    helperText={firstNameMsg}
                    error={firstNameError}
                    onClick={handleClickFirstName}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    name='segundo_nombre'
                    value={segundo_nombre}
                    type='text'
                    label='Segundo nombre'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    helperText={secNameMsg}
                    error={secNameError}
                    onClick={handleClickSecName}
                />
            </Grid>


            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    name='segundo_nombre'
                    value={segundo_nombre}
                    type='text'
                    label='Segundo nombre'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    helperText={secNameMsg}
                    error={secNameError}
                    onClick={handleClickSecName}
                />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    name='primer_apellido'
                    value={primer_apellido}
                    type='text'
                    label='Primer apellido'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    helperText={lastNameMsg}
                    error={lastNameError}
                    onClick={handleClickLastName}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    name='segundo_apellido'
                    value={segundo_apellido}
                    type='text'
                    label='Segundo apellido'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    helperText={secLastNameMsg}
                    error={secLastNameError}
                    onClick={handleClickSecLastName}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    fullWidth
                    name='correo'
                    value={correo}
                    type='email'
                    label='Email'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    onClick={handleClickEmail}
                    helperText={emailMsg}
                    error={emailError}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='telefono'
                    value={telefono}
                    type='number'
                    label='Teléfono'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    onClick={handleClickTel}
                    helperText={telMsg}
                    error={telError}
                />
            </Grid>
            <Grid item xs={12}>
                {/* <TextField
                    fullWidth
                    name='ubicacion'
                    value={ubicacion}
                    type='text'
                    label='Ubicación'
                    variant='outlined'
                    size='small'
                    color='secondary'
                /> */}
                <Autocomplete
                    fullWidth
                    inputValue={countryValue}
                    onInputChange={(event, newInputValue) => {
                        setCountryValue(newInputValue);
                    }}
                    noOptionsText='Sin elementos'
                    options={countries}
                    getOptionLabel={(option) => option.descripcion}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="País"
                            variant="outlined"
                            size='small'
                            color='secondary'
                            onClick={handleClickCountry}
                            helperText={countryMsg}
                            error={countryError}
                        />}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='password'
                    value={password}
                    type='password'
                    label='Contraseña'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    onClick={handleClickPassw}
                    helperText={passwMsg}
                    error={passwError}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    name='password_2'
                    value={password_2}
                    type='password'
                    label='Escriba la contraseña nuevamente'
                    onChange={handleChange}
                    variant='outlined'
                    size='small'
                    color='secondary'
                    onClick={handleClickPassw_2}
                    helperText={passw_2Msg}
                    error={passw_2Error}
                />
            </Grid>
        </Grid>
        <Grid container className={classes.buttonContainer}>
            <Grid item xs={12}>
                <Button
                    onClick={verifyFields}
                    fullWidth
                    color='secondary'
                    variant='contained'
                    disabled={registerError}
                >
                    <Typography variant='body1'>
                        Registrarse
                    </Typography>
                </Button>
            </Grid>
        </Grid>
        <Grid container justifyContent='center' alignItems='center' className={classes.dividerContainer}>
            <Grid item xs={5}>
                <Divider />
            </Grid>
            <Grid item xs={2}>
                <Typography align='center' color='secondary' variant='body1'>O</Typography>
            </Grid>
            <Grid item xs={5}>
                <Divider />
            </Grid>
        </Grid>
        <Grid container justifyContent='center' className={classes.googleContainer}>
            <Grid item xs={8}>
                <GoogleLogin
                    clientId="469672794762-aidvf61eooqfbbdefvd1mfa6sg8r6o5v.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button fullWidth startIcon={<img className={classes.googleLogo} src={googleLogo} alt='google' />} className={classes.googleButton} onClick={renderProps.onClick}>
                            <Typography variant='body1'>
                                Registrarse con Google
                            </Typography>

                        </Button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Grid>
        </Grid>
        <Dialog
            open={verifyDialog}
            onClose={() => setVerifyDialog(false)}
        >
            <CheckEmailModal
                checkEmailModal={checkEmailModal}
                submitCode={submitCode}
                setSubmitCode={setSubmitCode}
                setVerifyCode={setVerifyCode}
                verifyMsg={verifyMsg}
                registrySuccess={registrySuccess}
                setRegisterToLogin={setRegisterToLogin}
                generateCode={generateCode}
            />
        </Dialog>
    </>;
}