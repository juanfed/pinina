import { useState, useEffect } from "react";
import axiosClient from "../../config/AxiosClient";
import { useSnackbar } from "notistack";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import Masc from "../../assets/img/mascotas.svg";
import Masc2 from "../../assets/img/mascotas2.svg";

// Styles
import useStyles from "../../assets/css/js/styles";

const T_mascotas = ({
  t_mascotas,
  setT_mascotas,
  consultData,
  setConsultData,
}) => {
  // Snackbar Instance
  const { enqueueSnackbar } = useSnackbar();

  // Styles Instance
  const classes = useStyles();

  //Local State
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [info, setInfo] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [idToDelete, setIdToDelete] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [reload, setReload] = useState(true);
  const [modalT_mascotas, setModalT_mascotas] = useState(false);

  useEffect(() => {
    const query = async () => {
      try {
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token").replace(/['"]+/g, "")}`;
        const response = await axiosClient.get("/t_mascotas/DreadG");

        setData(response.data.msg);
      } catch (err) {
        if (err.response) {
          enqueueSnackbar(err.response.data.msg, { variant: "error" });
        }
      }
    };
    if (t_mascotas && reload) {
      query();
      setReload(false);
    }
  }, [t_mascotas, reload]);

  useEffect(() => {
    if (data.length > 0) {
      let filter = data.filter((item) => {
        return (
          item[Object.keys(item)[0]]
            .toString()
            .toLowerCase()
            .includes(searchWord) ||
          item.nombre_mascota.toString().toLowerCase().includes(searchWord)
        );
      });

      // Conditional
      if (searchWord !== "") {
        setFilterData(filter);
      } else {
        setFilterData(data);
      }
    }
  }, [searchWord, data]);

  const handleClick = (id_mascotas, descripcion) => {
    setConsultData({
      ...consultData,
      id_mascotas: id_mascotas,
      id_mascotasDescripcion: descripcion,
    });
  };

  return (
    <>
      <Dialog
        open={t_mascotas}
        onClose={() => setT_mascotas(false)}
        fullWidth
        
      >
          <Grid container className="con3" md={12} xs={12} sm={12}>
          <Grid item md={3} xs={2} sm={2}>
          <img
                className="Masc2"
                src={Masc2}
                alt="Masc2"
              />

          </Grid>
          <Grid item md={4} xs={8} sm={8} className="mb-3">
            <Typography variant="h5" className="MascTitle">
              Mascotas registradas
            </Typography>
            

            </Grid>

            <Grid item md={3} xs={2} sm={2}>
              <img
                className="Masc"
                src={Masc}
                alt="Masc"
              />
            </Grid>
            
          </Grid> 
          
        <DialogContent>
        
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-5"
          >
            {/* <Grid item md={ 6 } xs={ 12 } sm={ 12 } className="mb-3 text-center">
                    <Button variant="outlined" color="primary" onClick={ () => setModalT_ubicacion(true) }>
                        Crear Nueva Entrada <AddIcon className="ml-3" />
                    </Button>
                </Grid> */}
            <Grid item md={12} xs={12} sm={12} className="my-3 text-center">
              <TextField
                variant="outlined"
                color="secondary"
                inputProps={{
                  style: {
                    color: "#8E5207",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#8E5207" },
                }}
                fullWidth
                placeholder="Ingrese el nombre de la mascota"
                label="Ingrese el nombre de la mascota"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </Grid>
          </Grid>
          <List>
            {filterData.length > 0 && (
              <>
                <ListItem button key={Object.keys(data[0])[0]}>
                  <ListItemText
                    className="text-center text-info"
                    style={{ width: "100%" }}
                    primary={"nombre_mascota".toUpperCase()}
                  />
                  {/* <ListItemText className="text-center text-info" style={{ width: '100%' }} primary="Acciones"/> */}
                </ListItem>
                {filterData.map((item) => (
                  <>
                    <Divider />
                    <ListItem
                      button
                      key={Object.values(item)[0]}
                      onClick={() =>
                        handleClick(item.id_mascotas, item.nombre_mascota)
                      }
                      style={{
                        backgroundColor:
                          consultData.id_mascotas ===
                          //REPLACECONSTRAINT
                          item.id_mascotas
                            ? "#e1e1e1"
                            : null,
                      }}
                    >
                      <ListItemText
                        className="text-center"
                        style={{ width: "100%" }}
                        primary={item.nombre_mascota}
                      />
                      {/* <div style={{ width: '8%' }} className="text-center">
                                        <IconButton onClick={ () => { 
                                            setModalDelete(true);
                                            setIdToDelete(Object.values(item)[0]);
                                        } }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ width: '8%' }} className="text-center">
                                        <IconButton onClick={ () => handleEdit(Object.values(item)[0]) } >
                                            <CreateIcon />
                                        </IconButton>
                                    </div> */}
                    </ListItem>
                  </>
                ))}
              </>
            )}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default T_mascotas;
