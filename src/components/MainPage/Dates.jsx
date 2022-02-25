import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {
    Box,
    Grid,
    Paper,
    Card,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import clsx from "clsx";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#fdfdff",
    },
    pageHeader: {
      padding: theme.spacing(4),
      display: "flex",
      // marginBottom:theme.spacing(2)
    },
    pageIcon: {
      display: "inline-block",
      padding: theme.spacing(2),
      color: "#3c44b1",
    },
    pageTitle: {
      padding: theme.spacing(2),
    },
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    iconos: {
      cursor: "pointer",
    },
    inputMaterial: {
      width: "100%",
    },
  }));

const empList = [
  { ID: 1, Mascota: "Neeraj", Propietario: 'Jhon', Medico: 'Dr Andres', Fecha: '10/05/2021', Hora: '10:20' },
  { ID: 2, Mascota: "Sam", Propietario: 'Ana', Medico: 'Dr Juan', Fecha: '11/05/2021', Hora: '04:20' },
  { ID: 3, Mascota: "Firulais", Propietario: 'Juan', Medico: 'Dr Andres', Fecha:'20/05/2021', Hora: '11:20' },
  { ID: 4, Mascota: "Fox", Propietario: 'Maik', Medico: 'Dr Vaquero', Fecha: '21/05/2021', Hora: '09:10' },
  { ID: 5, Mascota: "Can", Propietario: 'Laura', Medico: 'Dr Andres', Fecha: '24/05/2021', Hora: '10:20' },
  { ID: 6, Mascota: "Merly", Propietario: 'Fredy', Medico: 'Dr Andres', Fecha: '25/05/2021', Hora: '05:00' }
  
]

function Dates() {

  const classes = useStyles();

  const [data, setData] = useState(empList)

  const columns = [
    { title: "ID", field: "ID" , editable: false },
    { title: "Mascota", field: "Mascota" },
    { title: "Propietario", field: "Propietario" }, 
    { title: "Medico", field: 'Medico',lookup: { 34: 'Dr Andres', 63: 'Dr Juan', 60: 'Dr Vaquero', } },
    { title: "Fecha", field: "Fecha",
        editComponent: props => (
            <input
            type="Date"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            />  
        )  
    },
    { title: "Hora", field: "Hora",
        editComponent: props => (
        <input
        type="time"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        />  
    )
    }
  ] 
 

  return (
    <div className="App">
      <br></br>
      <br></br>
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
            <Card className={classes.pageIcon}>
            <EventNoteIcon
                fontSize="large"
                style={{ color: "#EDCD56" }}
            />
            </Card>
            <div className={classes.pageTitle}>
            <Typography variant="h5" component="div">
                Citas
            </Typography>
            </div>
        </div>
        {/* <div className="btn-agregar-alinear">
            <Button
            // onClick={handleShow}
            className=" btn-agregar"
            // data-toggle="modal"
            >
            <AddCircleOutlineOutlinedIcon className="mr-2" />
            <span> Agendar Cita</span>
            </Button>
        </div> */}
        </Paper>
      <MaterialTable
        icons={tableIcons}
        title=""
        data={data}
        columns={columns}
        editable={{
            onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                const updateRows=[...data,newRow]
                setTimeout(()=>{
                    setData(updateRows)
                    resolve()
                },2000)
            }),
            onRowDelete: selectedRow => new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                const updatedRows = [...data]
                updatedRows.splice(index, 1)
                setTimeout(() => {
                  setData(updatedRows)
                  resolve()
                }, 2000)
              }),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
                setData(updatedRows)
                resolve()
            }, 2000)
            })
        }}
        options={{
            actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default Dates;
