import { Grid, Button, Typography, TextField, Dialog } from '@mui/material'
import React, { useState } from 'react'
import vaccinesStyles from '../../assets/css/js/vaccinesStyles'
import Table from '../tables/Table'

export default function Vaccines() {
    const classes = vaccinesStyles();
    const [dialog, setDialog] = useState(false);
    const [vaccineRegistry, setVaccineRegistry] = useState(false);
    const [vaccinesArray, setVaccinesArray] = useState([]);
    const [displayEdit, setDisplayEdit] = useState(false);
    const handleNewVaccine = () => {
        setDialog(true);
    };
    const [vaccines, setVaccines] = useState({
        description: '',
        patient: '',
        vaccine: '',
        vaccineDate: '',
        lastVaccine: '',
        nextVaccineDate: '',
        nextVaccine: '',
        dose: ''
    });
    const { description, patient, vaccine, vaccineDate, lastVaccine, nextVaccineDate, nextVaccine, dose } = vaccines;
    const handleChange = ({ target }) => {
        setVaccines({
            ...vaccines,
            [target.name]: target.value
        });
    };
    const handleRegistryVaccine = () => {
        setVaccinesArray([...vaccinesArray, vaccines]);
        setVaccineRegistry(false);
        setVaccines({
            description: '',
            patient: '',
            vaccine: '',
            vaccineDate: '',
            lastVaccine: '',
            nextVaccineDate: '',
            nextVaccine: '',
            dose: ''
        });
    };
    const handleCloseDialog = () => {
        setDialog(false);
        setVaccines({
            description: '',
            patient: '',
            vaccine: '',
            vaccineDate: '',
            lastVaccine: '',
            nextVaccineDate: '',
            nextVaccine: '',
            dose: ''
        });
    }
    return (
        <Grid container
            className={classes.root}
        >
            <Dialog
                open={dialog}
                onClose={handleCloseDialog}
                fullWidth
                maxWidth='sm'
            >
                <div
                    className={classes.inputContainer}
                >
                    <Grid container spacing={2}
                    >
                        <Grid container justifyContent='center'>
                            <Grid item md={12} style={{ textAlign: 'center' }}>
                                <Typography
                                    variant='h5'
                                    color='secondary'
                                >
                                    Registrar Vacuna
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container
                            spacing={1}
                            justifyContent='center'

                        >
                            <Grid item md={12}>
                                <TextField
                                    label="Descripci??n"
                                    name="description"
                                    onChange={handleChange}
                                    value={description}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Paciente"
                                    name="patient"
                                    onChange={handleChange}
                                    value={patient}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Vacuna"
                                    name="vaccine"
                                    onChange={handleChange}
                                    value={vaccine}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Fecha de vacuna"
                                    name="vaccineDate"
                                    onChange={handleChange}
                                    value={vaccineDate}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="??ltima vacuna"
                                    name="lastVaccine"
                                    onChange={handleChange}
                                    value={lastVaccine}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Fecha de pr??xima vacuna"
                                    name="nextVaccineDate"
                                    onChange={handleChange}
                                    value={nextVaccineDate}
                                    variant="outlined"
                                    color='secondary'
                                    size='small'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Pr??xima vacuna"
                                    name="nextVaccine"
                                    onChange={handleChange}
                                    value={nextVaccine}
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
                            <Grid item md={4}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={handleRegistryVaccine}
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
                                    onClick={handleCloseDialog}
                                    fullWidth
                                >
                                    <Typography
                                        color='secondary'
                                    >
                                        Cancelar
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid >
                    </Grid>
                </div>
            </Dialog>
            <Grid container>
                <Grid container justifyContent='center'>
                    <Grid item md={2}>
                        <Button
                            color='secondary'
                            variant='outlined'
                            onClick={handleNewVaccine}
                            fullWidth
                        >
                            <Typography
                                color='secondary'
                                style={{ textTransform: 'none' }}
                            >
                                Nueva Vacuna
                            </Typography>
                        </Button >
                    </Grid >
                </Grid>
                {
                    vaccinesArray.length ?
                        vaccinesArray.map(item => (
                            <Grid container
                                alignItems='center'
                                spacing={0}
                                justifyContent='center'
                                className={classes.tables}
                                key={item.description}

                            >
                                <Grid item md={12}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Typography
                                        color='secondary'
                                        variant='h5'
                                    >
                                        {item.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Vacuna'
                                        description={item.vaccine}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Fecha/Hora'
                                        description={item.vaccineDate}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Dosis'
                                        description={item.dose}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Fecha ??ltima vacuna'
                                        description={item.lastVaccine}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Fecha pr??xima vacuna'
                                        description={item.nextVaccineDate}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Fecha pr??xima vacuna'
                                        description={item.nextVaccineDate}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Pr??xima vacuna'
                                        description={item.nextVaccine}
                                        displayEdit={displayEdit}
                                    />
                                </Grid>
                                <Grid item>
                                    <Table
                                        title='Estado'
                                        description='activo'
                                        displayEdit={displayEdit}
                                    />
                                </Grid>

                            </Grid>
                        ))
                        :
                        null
                }
            </Grid>
        </Grid >
    );
}
