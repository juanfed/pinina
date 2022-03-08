import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';

//components
import ForgotPassword from "../verifyCode/ForgotPassword";

//Material
import { Grid, TextField, Button } from '@mui/material/';

// Social redes
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// Classname
import classnames from 'classnames';

// Reactstrap
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

// Snackbar
import { useSnackbar } from "notistack";

// Actions
import { loginAction, setForgotPasswordModal } from "../../redux/actions/AuthAction";

// Material UI Styles 
import useStyles from '../../assets/css/js/loginStyles';
import { loginStyles } from "../../assets/css/js/authStyles";

const Login = ({ setLogin }) => {

    // Styles Material UI instance 
    const classes = loginStyles();

    // Router Instance
    const router = useRouter();

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { message, user } = useSelector(state => state.auth);

    // Local State
    const [userData, setUserData] = useState({
        correo: '',
        password: ''
    });
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { correo, password } = userData;

    // UseEffect for login
    useEffect(() => {
        //console.log(user)
        if (message.code) {
            if (message.code !== 1) {
                enqueueSnackbar(message.msg, { variant: 'warning' });
            } else {
                enqueueSnackbar(message.msg, { variant: 'success' });
                setTimeout(() => {
                    router.push('/petsAndClients');
                }, 1000);
            }
        }
    }, [message.msg]);

    // Function to submit
    const handleSubmit = async () => {
        // Validation
        if (correo !== '' && password !== '') {
            const response = await dispatch(loginAction(userData));
            if (response.code === 1) {
                router.push('/petsAndClients');
            }
        } else {
            enqueueSnackbar('Los campos de Información no pueden ir vacios', { variant: 'warning' });
        }
    }

    const handleClickPass = () => {
        setShowPassword(!showPassword);
    }

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
        dispatch(LoginAction(data));
    };

    const handleChange = ({ target }) => {
        setUserData({
            ...userData,
            [target.name]: target.value
        })

    };

    return <>
        <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Correo'
                    variant='outlined'
                    type='email'
                    size='small'
                    name='correo'
                    value={correo}
                    color='secondary'
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Contraseña'
                    type='password'
                    variant='outlined'
                    size='small'
                    name='password'
                    value={password}
                    color='secondary'
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Contraseñaaaa'
                    type='password'
                    variant='outlined'
                    size='small'
                    name='password'
                    value={password}
                    color='secondary'
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='Contraseñaaaa'
                    type='password'
                    variant='outlined'
                    size='small'
                    name='password'
                    value={password}
                    color='secondary'
                    onChange={handleChange}
                />
            </Grid>


            <Grid item xs={12}>
                <Grid container justifyContent='center' className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            color='secondary'
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Iniciar Sesión
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent='center' className={classes.buttonContainer}>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            color='secondary'
                            variant='inherit'
                            onClick={() => dispatch(setForgotPasswordModal(true))}
                        >
                            Recuperar contraseña
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            color='secondary'
                            variant='inherit'
                            onClick={() => router.push('/adminUser')}
                        >
                            Admin Usuarios
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <ForgotPassword />
    </>;
}

export default Login
