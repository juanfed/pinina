import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
/* import Link from "next/link"; */
import imagen from "../mockup.png";
import imagen2 from "../../../src/assets/img/logoperro.png";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import imagen3 from "../../../src/assets/css/js/Googlehuella.png";
import imagen4 from "../../../src/assets/css/js/Grupo 2012.png";
import imagen5 from "../../../src/assets/img/Grupo 1352.png";
import imagen6 from "../../../src/assets/img/logofacebook.svg";
import imagen7 from "../../../src/assets/img/logoinstagram.svg";
import imagen8 from "../../../src/assets/img/logotwitter.svg";

import {
  loginAction,
  setForgotPasswordModal,
} from "../../redux/actions/AuthAction";

//components
import ForgotPassword from "../../components/verifyCode/ForgotPassword";

// Social redes
import FacebookLogin from "react-facebook-login";
import { GoogleLogin, GoogleLogout } from "react-google-login";

// Classname
import classnames from "classnames";

import {
  Button,
  Dialog,
  Divider,
  TextField,
  Link,
  InputAdornment,
} from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//components
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
//component for check the verification code to register
import CheckEmailModal from "../../components/verifyCode/CheckEmailModal";

// Classname

// Reactstrap
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem,
} from "reactstrap";

// Snackbar
import { useSnackbar } from "notistack";

// Actions
import {
  ConsultCountries,
  genRegCodeAction,
  RegisterUser,
  verifyRegCodeAction,
} from "../../redux/actions/AuthAction";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import InboxIcon from "@mui/icons-material/Inbox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

// Material UI Styles
import { authStyles } from "../../assets/css/js/authStyles";
import { getCountriesAction } from "../../redux/actions/MainAction";
import { Modalregistro } from "../../layouts/modals/modalregistro";

export default () => {
 

  const [login, setLogin] = useState(true);
  const [title, setTitle] = useState("Iniciar Sesión");
  const [modalRegis, setModalRegis] = useState(false);
  const dispatch = useDispatch();
  const [buttonStyle, setButtonStyle] = useState({
    login: "contained",
    register: "outlined",
  });

  const classes = authStyles();
  useEffect(() => {
    if (login) {
      setTitle("Iniciar Sesión");
      setButtonStyle({
        login: "contained",
        register: "outlined",
      });
    } else {
      setTitle("Registrarse");
      setButtonStyle({
        login: "outlined",
        register: "contained",
      });
    }
  }, [login]);
  //get Countries from Backend
  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);

  // Router Instance
  const router = useRouter();

  // Redux State Extraction
  const { message, user } = useSelector((state) => state.auth);

  // Snackbar Instance
  const { enqueueSnackbar } = useSnackbar();

  // Local State
  const [userData, setUserData] = useState({
    correo: "",
    password: "",
  });
  const { correo, password } = userData;

  const handleChange = ({ target }) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  // Function to submit
  const handleSubmit = async () => {
    // Validation
    if (correo !== "" && password !== "") {
      const response = await dispatch(loginAction(userData));
      if (response.code === 1) {
        router.push("/petsAndClients");
      }
    } else {
      enqueueSnackbar("Los campos de Información no pueden ir vacios", {
        variant: "warning",
      });
    }
  };

  const handleClickPass = () => {
    setShowPassword(!showPassword);
  };

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    //console.log(user)
    if (message.code) {
      if (message.code !== 1) {
        enqueueSnackbar(message.msg, { variant: "warning" });
      } else {
        enqueueSnackbar(message.msg, { variant: "success" });
        setTimeout(() => {
          router.push("/petsAndClients");
        }, 1000);
      }
    }
  }, [message.msg]);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        justify="flex-end"
        className={classes.toRightContainer}
        alignItems="center"
      >
        <Grid
          item
          xs={11}
          md={11}
          style={{
            display: "flex",
            gap: "3rem",
          }}
        >
          <img className="headerlogin" src={imagen5} alt="logo-principal" />

          <Link
            style={{
              color: "#3B3D3E",
            }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("Conócenos");
            }}
          >
            Conócenos
          </Link>

          <Link
            style={{
              color: "#3B3D3E",
            }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("Conócenos");
            }}
          >
            Nuestra App
          </Link>
        </Grid>

        <Grid
          item
          xs={1}
          md={1}
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <img className="logodefacebook" src={imagen6} alt="logo-facebook" />
          <img className="logodeinstagram" src={imagen7} alt="logo-instagram" />
          <img className="logodetwitter" src={imagen8} alt="logo-twitter" />
        </Grid>

        <Grid item xs={6} md={6}>
          <img className="mockup" src={imagen} alt="imagen-mockup" />
        </Grid>

        <Grid item xs={6} md={6}>
          <div className="partesuperior">
            <Grid container spacing={1} style={{ textAlign: "center" }}>
              <Grid item xs={12}>
                <img
                  className="perro"
                  style={{
                    marginBottom: "-3rem",
                    marginTop: "-3rem",
                  }}
                  src={imagen2}
                  alt="imagen-perro"
                />
              </Grid>

              {/* correo electronico */}
              <Grid item xs={12}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid xs={1} md={1}>
                    <AccountCircleIcon style={{ color: "#EBEBEB" }} />
                  </Grid>
                  <Grid item xs={11} md={11}>
                    <TextField
                      className="textointerno"
                      inputProps={{
                        style: {
                          color: "#FFB714",
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#EBEBEB" },
                      }}
                      fullWidth
                      type='email'
          
                      id="input-with-icon-grid"
                      label="Correo electrónico"
                      name="correo"
                      value={correo}
                      onChange={handleChange}
                      InputProps={{
                        className: classes.input,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* contraseña */}
              <Grid item xs={12}>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid xs={1} md={1}>
                      <LockIcon style={{ color: "#EBEBEB" }} />
                    </Grid>
                    <Grid item xs={11} md={11}>
                      <TextField
                        inputProps={{
                          style: {
                            color: "#FFB714",
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#EBEBEB" },
                        }}
                        fullWidth
                        type='password'
                        id="input-with-icon-grid"
                        label="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              {/* boton iniciar sesión */}
              <Grid item xs={6}>
                <Button
                  style={{
                    background: "#FFB713",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    fontFamily: "Bebas-Neue",
                  }}
                  onClick={handleSubmit}
                >
                  Iniciar sesión
                </Button>
              </Grid>

              {/* olvide mi contraseña */}
              <Grid item xs={6}>
                <Link
                  style={{
                    marginTop: "1.5rem",
                    color: "#FFB713",
                  }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("Olvidé mi contraseña");
                  }}
                >
                  Olvide mi contraseña
                </Link>
              </Grid>
            </Grid>
          </div>
          {/* Registrarme */}
          <div className="parteinferior">
            <Grid item xs={12}>
              <Link
                style={{
                  fontSize: "21px",
                  fontFamily: "Bebas-Neue",
                  color: "#FFB714",
                }}
                component="button"
                variant="body2"
                onClick={() => setModalRegis(true)}
              >
                Registrarse
              </Link>
            </Grid>
          </div>

          {/* Ingresar con google */}
          <div className="conredes">
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} style={{ textAlign: "center" }}>
                <img className="googlehuella" src={imagen3} alt="icon-google" />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                style={{ textAlign: "left", marginLeft: "-4rem" }}
              >
                <Link
                  style={{
                    color: "#3B3D3E",
                    marginTop: "1.5rem",
                    textAlign: "left",
                  }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("registarme-con-google");
                  }}
                >
                  Ingresar con Google
                </Link>
              </Grid>
            </Grid>

            {/* Ingresar con facebook */}
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} style={{ textAlign: "center" }}>
                <img
                  className="facebookhuella"
                  src={imagen4}
                  alt="icon-facebook"
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                style={{ textAlign: "left", marginLeft: "-4rem" }}
              >
                <Link
                  style={{
                    color: "#3B3D3E",
                  }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("registrame-con-google");
                  }}
                >
                  Ingresar con Facebook
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      {<Modalregistro setModalRegis={setModalRegis} modalRegis={modalRegis} />}
    </Grid>
  );

  {
    /* /*  <Grid container className={classes.root}>
            <Grid item>
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
                                            style={{background:'#FFB713'}}
                                            variant={buttonStyle.register}
                                            onClick={() => setLogin(false)}
                                            fullWidth>
                                            Registrarse
                                        </Button>
                                    </Grid>
                                    <Grid item item xs={6}>
                                        <Button
                                             style={{background:'#FFB713'}}
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
        </Grid> */
    /*  <Contenedor className="inicio">
      <div>
      <Imagen 
        src={imagen}
        alt="imagen-mockup"
      />
    </div>
    <div>
    <Contenedor2>

        <Contenedor3 className="recuadro">

        </Contenedor3>
    </Contenedor2>
     </div>
      </Contenedor> */
  }
};

/* import { useState, useEffect } from "react";
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


 */
