import { Typography, Button, Grid, Dialog, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import dewormingStyles from '../../assets/css/js/dewormingStyle';
import MaterialTable from '../tables/MaterialTable'

export default function Deworming() {
    const classes = dewormingStyles();
    const [tableData, setTableData] = useState([]);
    const [dialog, setDialog] = useState(false);
    const [id, setId] = useState(3);
    const rows = [
        { id: 0, title: 'Desparasitación' },
        { id: 1, title: 'Fecha Desparasitación' },
        { id: 2, title: 'Dosis' },
        { id: 3, title: 'Fecha última Desparasitación' },
        { id: 4, title: 'Fecha próxima Desparasitación' },
        { id: 5, title: 'próxima Desparasitación' },
        { id: 6, title: 'Estado' },
    ]
    const [inputs, setInputs] = useState({
        id: id,
        deworming: '',
        dewormingDate: '',
        dose: '',
        lastDewormingDate: '',
        nextDewormingDate: '',
        nextDeworming: '',
        status: ''
    })
    const {
        deworming,
        dewormingDate,
        dose,
        lastDewormingDate,
        nextDewormingDate,
        nextDeworming,
        status
    } = inputs;
    const [dewormings, setDewormings] = useState([
        {
            id: 0,
            deworming: 'desparasitación-ejemplo',
            dewormingDate: '22-mayo-2021',
            dose: 'dosis-ejemplo',
            lastDewormingDate: '13-abril-2021',
            nextDewormingDate: '03-junio-2021',
            nextDeworming: 'proxima-ejemplo',
            status: 'Activa'
        },
        {
            id: 1,
            deworming: 'desparasitación-ejemplo-2',
            dewormingDate: '24-mayo-2021',
            dose: 'dosis-ejemplo-2',
            lastDewormingDate: '18-abril-2021',
            nextDewormingDate: '07-junio-2021',
            nextDeworming: 'proxima-ejemplo-2',
            status: 'Activa'
        },
        {
            id: 2,
            deworming: 'desparasitación-ejemplo-3',
            dewormingDate: '27-mayo-2021',
            dose: 'dosis-ejemplo-3',
            lastDewormingDate: '18-abril-2021',
            nextDewormingDate: '07-junio-2021',
            nextDeworming: 'proxima-ejemplo-3',
            status: 'Inactiva'
        }
    ]);
    function setData() {
        let data = [];
        for (let i = 0; i < dewormings.length; i++) {
            data.push({
                data_0: dewormings[i].id,
                data_1: dewormings[i].deworming,
                data_2: dewormings[i].dewormingDate,
                data_3: dewormings[i].dose,
                data_4: dewormings[i].lastDewormingDate,
                data_5: dewormings[i].nextDewormingDate,
                data_6: dewormings[i].nextDeworming,
                data_7: dewormings[i].status
            });
        }
        setTableData(data);
    };
    useEffect(() => {
        setData();
    }, [dewormings]);
    const handleOpenDialog = () => {
        setDialog(true);
    };
    const handleInputReset = () => {
        setInputs({
            id: id,
            deworming: '',
            dewormingDate: '',
            dose: '',
            lastDewormingDate: '',
            nextDewormingDate: '',
            nextDeworming: '',
            status: ''
        });
        setDialog(false);
    }
    const handleCloseDialog = () => {
        setDialog(false);
        handleInputReset();
    };
    const handleChange = ({ target }) => {
        setInputs({
            ...inputs, [target.name]: target.value
        })
    };

    const handleDewormingSave = () => {
        setId(id + 1);
        setDewormings([...dewormings, inputs]);
        handleInputReset();
    }

    return <>
        <Grid container justifyContent='center' className={classes.registryButton}>
            <Grid item xs={2} className={classes.title}>
                <Button
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    onClick={handleOpenDialog}
                >
                    <Typography
                        color='secondary'
                    >
                        Nueva desparasitación
                    </Typography>
                </Button>
            </Grid>
        </Grid>
        {
            tableData.length ?
                <MaterialTable
                    tableData={tableData}
                    rows={rows}
                />
                :
                null
        }
        <Dialog
            maxWidth='xs'
            open={dialog}
            onClose={handleCloseDialog}
        >
            <div className={classes.dialogContainer}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} className={classes.dialogTitle}>
                        <Typography
                            variant='h5'
                            color='secondary'
                        >
                            Registrar Desparasitación
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Desparasitación"
                            name="deworming"
                            onChange={handleChange}
                            value={deworming}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Fecha desparasitación"
                            name="dewormingDate"
                            onChange={handleChange}
                            value={dewormingDate}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Dosis"
                            name="dose"
                            onChange={handleChange}
                            value={dose}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Fecha última desparasitación"
                            name="lastDewormingDate"
                            onChange={handleChange}
                            value={lastDewormingDate}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Fecha Próxima desparasitación"
                            name="nextDewormingDate"
                            onChange={handleChange}
                            value={nextDewormingDate}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Próxima"
                            name="nextDeworming"
                            onChange={handleChange}
                            value={nextDeworming}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            label="Estado"
                            name="status"
                            onChange={handleChange}
                            value={status}
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleDewormingSave}
                            fullWidth
                        >
                            <Typography
                                color='secondary'
                            >
                                Registrar
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item md={4}>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleInputReset}
                            fullWidth
                        >
                            <Typography
                                color='secondary'
                            >
                                Cancelar
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </Dialog>
    </>;
}
