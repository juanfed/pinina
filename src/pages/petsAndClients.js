import { useEffect, useState } from "react";
import ProfileComponent from "../components/ClientsAndPets/ProfileComponent";
import ClinicHistoryComponent from "../components/ClientsAndPets/ClinicHistoryComponent";
import CPNavBar from "../components/ClientsAndPets/CPNavBar";
import AppBar from "../layouts/AppBar";
import { Grid, Paper } from "@mui/material";
import Vaccines from "../components/ClientsAndPets/Vaccines";
import { Typography } from "@mui/material";
import profileStyles from "../assets/css/js/profileStyles";
//components
import Deworming from "../components/ClientsAndPets/Deworming";
// Snackbar
import { useSnackbar } from "notistack";
import { useRouter } from 'next/router';
import MainAppBar from "../layouts/MainAppBar";
import {
  getBusinessAdminAction,
  getBusinessByUserAction,
  getModulesAction,
  getUserModulesAction,
  getUsersBusinessAction,
  loadModulesByUserAction,
  saveUserTypeAction,
} from "../redux/actions/adminAction";
import { useSelector, useDispatch } from "react-redux";

import ContenedorIzquierdo from "../components/MainPrincipal/ContenedorIzquierdo";
import ContenedorCentral from "../components/MainPrincipal/ContenedorCentral";
import ContenedorDerecho from "../components/MainPrincipal/ContenederoDerecho";
import axiosClient from '../config/AxiosClient';
import { Modal } from "reactstrap";

export default function () {
  const router = useRouter();
  // Snackbar Instance
  const { usersBusiness, userAdmin, modules, userModules } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [checkModules, setCheckModules] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const classes = profileStyles();
  
  
  useEffect(() => {
    dispatch(getBusinessAdminAction({ id_usuario: user?.id }));
    dispatch(getBusinessByUserAction({ id_usuario: user?.id }));
    dispatch(getUsersBusinessAction());
    dispatch(getModulesAction());
    dispatch(getUserModulesAction());
  }, []);
  useEffect(() => {
    if (usersBusiness.length !== 0) {
      let userData = usersBusiness.filter((i) => i.id_usuario === user.id);
      console.log(userData);
      if (userData.length !== 0) {
        if (userData[0].t_adm) {
          dispatch(saveUserTypeAction("admin"));
        } else {
          dispatch(saveUserTypeAction("admin_restri"));
        }
      }
    }
  }, [usersBusiness]);
  useEffect(() => {
    if (userAdmin.length === 0) {
      if (userModules.length !== 0) {
        if (checkModules) {
          const data = userModules.filter((i) => i.id_usuario === user.id);
          console.log(data);
          const adminModules = data.filter((i) => i.t_adm === true);
          if (adminModules.length !== 0) {
            dispatch(loadModulesByUserAction(adminModules));
            dispatch(saveUserTypeAction("module_admin"));
          } else {
            dispatch(saveUserTypeAction("module_restri"));
          }
          setCheckModules(false);
        }
      }
    }
  }, [userModules, user, userAdmin]);
  console.log(usersBusiness)

  var login
  if(localStorage.getItem("token") == undefined){
    login = false
    setTimeout(()=>{router.push("/");}, 2000)
    
  }else{
    enqueueSnackbar("Sesi??n Iniciada", { variant: "success" });
    login = true
  }
  return (
    <div>
      {login ? <Grid container className="flex-container">
      <Grid container className="caja c1" xs={2} md={2}>
        <ContenedorIzquierdo />
      </Grid>

      <ContenedorCentral />

      <Grid container className="caja c4" xs={2} md={2}>
        <ContenedorDerecho />
      </Grid>
    </Grid>: 
    <div>
    </div>}
    </div>
  );
}
