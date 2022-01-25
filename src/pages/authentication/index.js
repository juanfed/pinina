import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, Dialog, Divider } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

//components
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
//component for check the verification code to register
import CheckEmailModal from "../../components/verifyCode/CheckEmailModal";

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
import { ConsultCountries, genRegCodeAction, RegisterUser, verifyRegCodeAction } from "../../redux/actions/AuthAction";
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

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
        <Grid container
            justify='flex-end'
            className={classes.toRightContainer}
            alignItems='center'
        >
            <Grid item xs={12} md={6}>
                <Grid container justify='center' className={classes.mainContainer}>
                    <Paper elevation={10} className={classes.paperStyle}>
                        <Grid container justify='center' spacing={2} className={classes.paperContainer}>
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
    )
}


