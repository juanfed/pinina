import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, Dialog, Divider } from '@mui/material/';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

//components
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
//component for check the verification code to register
import CheckEmailModal from "../../components/verifyCode/CheckEmailModal";

// Social redes
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// Classname


// Reactstrap
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, NavItem } from "reactstrap";

// Snackbar
import { useSnackbar } from "notistack";

// Actions
import { ConsultCountries, genRegCodeAction, RegisterUser, verifyRegCodeAction } from "../../redux/actions/AuthAction";
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

// Material UI Styles 
import { authStyles } from '../../assets/css/js/authStyles';
import { getCountriesAction } from "../../redux/actions/MainAction";


export default () => {
    const [login, setLogin] = useState(true);
    const [title, setTitle] = useState('Iniciar Sesión');
    const dispatch = useDispatch();
    const [buttonStyle, setButtonStyle] = useState({
        login: 'contained',
        register: 'outlined'
    })
    const classes = authStyles();
    useEffect(() => {
        if (login) {
            setTitle('Iniciar Sesión');
            setButtonStyle({
                login: 'contained',
                register: 'outlined'
            })
        } else {
            setTitle('Registrarse');
            setButtonStyle({
                login: 'outlined',
                register: 'contained'
            })
        }
    }, [login]);
    //get Countries from Backend
    useEffect(() => {
        dispatch(getCountriesAction());
    }, [])
    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Grid container
                    justifyContent='flex-end'
                    className={classes.toRightContainer}
                    alignItems='center'
                >
                    <Grid item xs={12} md={6}>
                        <Grid container justifyContent='center' className={classes.mainContainer}>
                            <Paper elevation={10} className={classes.paperStyle}>
                                <Grid container justifyContent='center' spacing={2} className={classes.paperContainer}>
                                    <Grid item xs={6}>
                                        <Button
                                            color='secondary'
                                            variant={buttonStyle.register}
                                            onClick={() => setLogin(false)}
                                            fullWidth>
                                            Registrarse
                                        </Button>
                                    </Grid>
                                    <Grid item item xs={6}>
                                        <Button
                                            color='secondary'
                                            variant={buttonStyle.login}
                                            onClick={() => setLogin(true)}
                                            fullWidth>
                                            Iniciar Sesión
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container className={classes.titleContainer}>
                                            <Grid item xs={12}>
                                                <Typography
                                                    variant='h4'
                                                    color='secondary'
                                                    align='center'
                                                >
                                                    {title}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {login ?
                                        <Login setLogin={setLogin} />
                                        :
                                        <Register />
                                    }
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


