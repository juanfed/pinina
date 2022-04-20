import { Dialog } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { authStyles } from "../../assets/css/js/authStyles";

// Snackbar
import { useSnackbar } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

//components
import CheckEmailModal from "../../components/verifyCode/CheckEmailModal";

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
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import { registerStyles } from "../../assets/css/js/authStyles";

import { useState, useEffect, useRef } from "react";
import imagen from "../../assets/img/foto-perfil.svg";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import imagenLogo from "../../assets/img/Grupo 1352.png";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import PublicIcon from "@mui/icons-material/Public";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";

import Autocomplete from "@mui/material/Autocomplete";

import { Button, Divider, TextField, InputAdornment } from "@material-ui/core/";
import axiosClient from "../../config/AxiosClient";

export const Modalregistro = ({ modalRegis, setModalRegis }) => {
  // Styles Material UI instance
  const classes = registerStyles();

  // Router Instance
  const router = useRouter();

  // Snackbar Instance
  const { enqueueSnackbar } = useSnackbar();

  // Dispatch Instance
  const dispatch = useDispatch();

  // Redux State Extraction
  const { ubicaciones_geograficas, message } = useSelector(
    (state) => state.auth
  );
  const { countries } = useSelector((state) => state.main);
  // Local State
  const [userData, setUserData] = useState({
    tipo: "NO",
    correo: "",
    password: "",
    origen_cuenta: "Registro_Normal",
    nombres: "",
    apellidos: "",
    ubicacion: "169",
    password_2: "",
  });
  const { correo, nombres, apellidos, password, password_2, ubicacion } =
    userData;

  const [focusedNames, setFocusedNames] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verifyDialog, setVerifyDialog] = useState(false);
  const [checkEmailModal, setCheckEmailModal] = useState(true);
  const [verifyMsg, setVerifyMsg] = useState("");
  const [submitCode, setSubmitCode] = useState(false);
  const [registrySuccess, setRegistrySuccess] = useState(false);
  const [registerToLogin, setRegisterToLogin] = useState();
  const [verifyCode, setVerifyCode] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [idCountry, setIdCountry] = useState("");

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
    setVerifyMsg("Validando...");
    const response = await dispatch(genRegCodeAction(userData));
    if (response.code === "1") {
      console.log(response);
      setVerifyDialog(true);
      setVerifyMsg(response.msg);
    } else {
      enqueueSnackbar(response.msg, { variant: "error" });
    }
  };

  //function for verify the generate code
  const sendVerifyCode = async () => {
    let primer_nombre, segundo_nombre, primer_apellido, segundo_apellido;
    let nombre_completo = nombres.split(' ')
    if (nombre_completo && apellidos) {
      try {
        primer_nombre = nombre_completo[0];
        segundo_nombre = nombre_completo[1];
        if (segundo_nombre == undefined || segundo_nombre == null) {
          segundo_nombre = "";
        }

      } catch (err) {
        console.error(err)
        return null;
      }


      try {

        apellidos = apellidos.split(' ');
        primer_apellido = apellidos[0];
        segundo_apellido = apellidos[1];
        if (segundo_apellido == undefined || segundo_apellido == null) {
          segundo_apellido = "";
        }
      } catch (err) {
        console.error(err)
        return null;
      }
    }

    const userInfoUser = {
      correo: correo,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      codigo: verifyCode,
      password: password,
      ubicacion: ubicacion
    }

    console.log(userInfoUser)

    const response = await dispatch(
      verifyRegCodeAction(userInfoUser)
    );

    if (response.code === "1") {
      setRegistrySuccess(true);
      setVerifyMsg(response.msg);
    } else {
      setVerifyMsg(response.msg);
    }
  };
  //function to manage onChange event in inputs
  const handleChange = ({ target }) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  // verification code
  useEffect(() => {
    if (submitCode) {
      setTimeout(() => {
        sendVerifyCode();
      }, 1500);
    } else {
      setVerifyMsg("Validando...");
    }
    setSubmitCode(false);
  }, [submitCode]);
  // Menú
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickPass = () => {
    setShowPassword(!showPassword);
  };
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
    const token = response.accessToken;
    const userID = response.id;
    const origen_cuenta = "Facebook";
    const nivel_seguridad = "1";
    //dispatch(RegisterUser({ token, userID, origen_cuenta, nivel_seguridad }));
  };

  //Inicio de sesión con redes sociales (Google)
  const responseGoogle = (response) => {
    // Extraction
    let data = {
      token: response.tokenId,
      origen_cuenta: "Google",
    };
    dispatch(RegisterUser(data));
  };

  //register to Login
  useEffect(() => {
    if (registerToLogin) {
      setVerifyDialog(false);
      const userDataLogin = {
        correo: correo,
        password: password
      }
      const captura = async () =>{
        const responseRegister =  await axiosClient.post(`/login/loginPinina`, userDataLogin)
        localStorage.setItem('id_usuario', responseRegister.data.user.id_usuario);
        localStorage.setItem('token', responseRegister.data.user.tokenGenerado);
      }
      captura()

      router.push("/petsAndClients");
    }
  }, [registerToLogin]);
  //errors Validation
  //messages
  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [telMsg, setTelMsg] = useState("");
  const [passwMsg, setPasswMsg] = useState("");
  const [passw_2Msg, setPassw_2Msg] = useState("");
  const [countryMsg, setCountryMsg] = useState("");
  //Bool errors
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwError, setPasswError] = useState(false);
  const [passw_2Error, setPassw_2Error] = useState(false);
  const [registerError, setRegisterError] = useState(true);
  const [countryError, setCountryError] = useState(false);
  //checking onClick Event
  const [firstNameClicked, setFirstNameClicked] = useState(false);
  const [lastNameClicked, setLastNameClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
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
      setFirstNameMsg("*De 3 a 15 Caractéres");
      setFirstNameError(true);
      setFirstNameClicked(true);
    }
  };

  //Last Name
  const handleClickLastName = () => {
    if (!lastNameClicked) {
      setLastNameMsg("*De 3 a 15 Caractéres");
      setLastNameError(true);
      setLastNameClicked(true);
    }
  };

  //Email
  const handleClickEmail = () => {
    if (!emailClicked) {
      setEmailMsg("*Introduzca un correo válido");
      setEmailError(true);
      setEmailClicked(true);
    }
  };

  //Password
  const handleClickPassw = () => {
    if (!passwClicked) {
      setPasswMsg("*Digite una contraseña de 6 a 15 caracteres");
      setPasswError(true);
      setPasswClicked(true);
    }
  };
  //Repeat Password
  const handleClickPassw_2 = () => {
    if (!passw_2Clicked) {
      setPassw_2Msg("*Las contraseñas deben coincidir");
      setPassw_2Error(true);
      setPassw_2Clicked(true);
    }
  };
  //country
  const handleClickCountry = () => {
    if (!countryClicked) {
      setCountryMsg("*Inserte un país");
      setCountryError(true);
      setCountryClicked(true);
    }
  };
  //hook error event listener_ firstName
  useEffect(() => {
    if (firstNameClicked) {
      if (nombres.length <= 2 || nombres.length >= 15) {
        setFirstNameMsg("*De 3 a 15 Caractéres");
        setFirstNameError(true);
      } else {
        let charValidate = NAMES_REG_VAR.test(nombres);
        if (charValidate) {
          setFirstNameMsg("");
          setFirstNameError(false);
        } else {
          setFirstNameMsg("*Sólo Letras Mayúsculas o minúsculas");
          setFirstNameError(true);
        }
      }
    }
  }, [nombres, firstNameClicked]);

  //hook error event listener_ LastName
  useEffect(() => {
    if (lastNameClicked) {
      if (apellidos.length <= 2 || apellidos.length >= 15) {
        setLastNameMsg("*De 3 a 15 Caractéres");
        setLastNameError(true);
      } else {
        let charValidate = NAMES_REG_VAR.test(apellidos);
        if (charValidate) {
          setLastNameMsg("");
          setLastNameError(false);
        } else {
          setLastNameMsg("*Sólo Letras Mayúsculas o minúsculas");
          setLastNameError(true);
        }
      }
    }
  }, [apellidos, lastNameClicked]);

  //hook error event listener_ email
  useEffect(() => {
    if (emailClicked) {
      let charValidate = EMAIL_REG_VAR.test(correo);
      console.log(charValidate);
      if (charValidate) {
        setEmailMsg("");
        setEmailError(false);
      } else {
        setEmailMsg("*Introduzca un correo válido");
        setEmailError(true);
      }
    }
  }, [correo, emailClicked]);

  //hook error event listener_ password
  useEffect(() => {
    if (passwClicked) {
      if (password.length <= 5 || password.length >= 15) {
        setPasswMsg("*Digite una contraseña de 6 a 15 caracteres");
        setPasswError(true);
      } else {
        setPasswMsg("");
        setPasswError(false);
      }
    }
  }, [password, passwClicked]);
  //hook error event listener_ password_2
  useEffect(() => {
    if (passw_2Clicked) {
      if (password.trim() === password_2.trim()) {
        setPassw_2Msg("");
        setPassw_2Error(false);
      } else {
        setPassw_2Msg("*Las contraseñas deben coincidir");
        setPassw_2Error(true);
      }
    }
  }, [password_2, passw_2Clicked]);
  //hook error event listener_ country
  useEffect(() => {
    if (countryClicked) {
      if (ubicacion.length !== 0) {
        setCountryMsg("");
        setCountryError(false);
      } else {
        setCountryMsg("*Inserte un País");
        setCountryError(true);
      }
    }
  }, [ubicacion, countryClicked]);
  //hook error event Allow Registration

  useEffect(() => {
    if (
      nombres.length &&
      apellidos.length &&
      password.length &&
      password_2.length &&
      ubicacion.length &&
      correo.length &&
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwError &&
      !passw_2Error
    ) {
      setRegisterError(false);
    } else {
      setRegisterError(true);
    }
  }, [
    nombres,
    apellidos,
    password,
    ubicacion,
    correo,
    firstNameError,
    lastNameError,
    emailError,
    passwError,
    passw_2Error,
    countryError,
  ]);

  //functions for set the country api
  useEffect(() => {
    if (countryClicked) {
      if (countryValue?.length !== 0) {
        let idCountry = countries.filter(
          (item) => item.descripcion === countryValue
        );
        if (idCountry.length !== 0) {
          setIdCountry(idCountry[0].id_codigo);
        }
      } else {
        setIdCountry("");
        setCountryMsg("*Inserte un País");
        setCountryError(true);
      }
    }
  }, [countryValue]);

  useEffect(() => {
    if (idCountry.length !== 0) {
      setUserData({ ...userData, ubicacion: idCountry });
    }
  }, [idCountry]);
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
    setLastNameClicked(true);
    setEmailClicked(true);
    setPasswClicked(true);
    setPassw_2Clicked(true);
    setCountryClicked(true);
    handleSubmit();
  };

  const handleSubmit = () => {
    if (
      nombres.length &&
      apellidos.length &&
      password.length &&
      password_2.length &&
      ubicacion.length &&
      correo.length &&
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwError &&
      !passw_2Error
    ) {
      generateCode();
    }
  };

  return (
    <>
      <Dialog
        open={modalRegis}
        onClose={() => setModalRegis(false)}
        fullWidth
        maxWidth={"md"}
        PaperProps={{
          style: {
            borderRadius: "50px",
            overflow: "hidden",
            "&::WebkitScrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Grid container className={classes.root}>
          <Grid container justify="flex-end" alignItems="center">
            {/* aqui adento va todo el Formulario de registro */}

            <Grid item xs={12} md={12}>
              <Grid container spacing={1} alignItems="center">
                <Grid
                  className="scroll"
                  item
                  xs={6}
                  md={6}
                  style={{
                    backgroundColor: "#F0F2F5",
                    height: "770px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomLeftRadius: "40px",
                    borderTopLeftRadius: "40px",
                    paddingBottom: "5rem",
                    overflowY: "visible",
                  }}
                >
                  <Grid container spacing={1} /*alignItems="center" */>
                    {" "}
                    {/* aqui comienza el logo */}
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: "3rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <img
                        className="logoRegistro"
                        src={imagenLogo}
                        alt="logo-principal"
                      />
                    </Grid>
                    {/* hasta aqui va el logo */}
                    {/* aqui comienza el titulo */}
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        color: "#81623C",
                        marginBottom: "-1rem",
                      }}
                    >
                      <h2>Registro</h2>
                    </Grid>{" "}
                    {/* hasta aqui va el titulo */}
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <AccountCircleIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Nombre completo"
                            name="nombres"
                            value={nombres}
                            type="text"
                            onChange={handleChange}
                            helperText={firstNameMsg}
                            error={firstNameError}
                            onClick={handleClickFirstName}
                            InputProps={{
                              className: classes.input,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <PersonIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Apellidos"
                            name="apellidos"
                            value={apellidos}
                            type="text"
                            onChange={handleChange}
                            helperText={lastNameMsg}
                            error={lastNameError}
                            onClick={handleClickLastName}
                            InputProps={{
                              className: classes.input,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <MailIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Correo"
                            name="correo"
                            value={correo}
                            type="email"
                            onChange={handleChange}
                            onClick={handleClickEmail}
                            helperText={emailMsg}
                            error={emailError}
                            InputProps={{
                              className: classes.input,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <LockIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Contraseña"
                            name="password"
                            value={password}
                            type="password"
                            onChange={handleChange}
                            onClick={handleClickPassw}
                            helperText={passwMsg}
                            error={passwError}
                            InputProps={{
                              className: classes.input,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <NoEncryptionIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <TextField
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            fullWidth
                            id="input-with-icon-grid"
                            label="Confirmar contraseña"
                            name="password_2"
                            value={password_2}
                            type="password"
                            onChange={handleChange}
                            onClick={handleClickPassw_2}
                            helperText={passw_2Msg}
                            error={passw_2Error}
                            InputProps={{
                              className: classes.input,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid xs={1} md={1}>
                          <PublicIcon style={{ color: "#81623C" }} />
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <Autocomplete
                            className="textointerno"
                            inputProps={{
                              style: {
                                color: "#81623C",
                              },
                            }}
                            InputLabelProps={{
                              style: { color: "#81623C" },
                            }}
                            disablePortal
                            id="combo-box-demo"
                            fullWidth
                            inputValue={countryValue}
                            onInputChange={(event, newInputValue) => {
                              setCountryValue(newInputValue);
                            }}
                            noOptionsText="Sin elementos"
                            options={countries}
                            getOptionLabel={(option) => option.descripcion}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="País"
                                onClick={handleClickCountry}
                                helperText={countryMsg}
                                error={countryError}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        paddingLeft: "3rem",
                        paddingRight: "3rem",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        style={{
                          background: "#FFB713",
                          marginBottom: "1rem",
                          marginTop: "1rem",
                          fontFamily: "Bebas-Neue",
                          width: "100%",
                        }}
                        onClick={verifyFields}
                        disabled={registerError}
                      >
                        Registrarse
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    backgroundColor: "#FFB714",
                    height: "770px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                >
                  <img
                    className="foto-perfil"
                    src={imagen}
                    alt="imagen-perfil"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
      <Dialog open={verifyDialog} onClose={() => setVerifyDialog(false)}>
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
    </>
  );
};
