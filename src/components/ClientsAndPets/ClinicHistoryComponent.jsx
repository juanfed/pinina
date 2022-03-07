
import { Grid, IconButton, Typography, Button, Menu, MenuItem, TextField, Divider, Dialog } from '@mui/material';
import { DataGrid } from '@material-ui/data-grid';
import { clinicHistoryStyles } from '../../assets/css/js/clinicHistoryStyles';
//iccons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import Table from '../tables/Table';
import OptionTable from '../tables/OptionTable';



export default function ClinicHistoryComponent() {
    const [dialog, setDialog] = useState(false);
    const classes = clinicHistoryStyles();
    const [data, setData] = useState(false);
    const [displayEdit, setDisplayEdit] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const [newConsultation, setNewConsultation] = useState(false);
    console.log(selectedTable);
    const [dataTable, setDataTable] = useState([
        { id: 0, title: "Fecha y Hora", description: "Escriba una fecha", onEdit: false, displayInput: false },
        { id: 1, title: "Profesional", description: "Escriba el nombre del profesional", onEdit: false, displayInput: false },
        { id: 2, title: "Antecedentes", description: "Escriba algún antecedente", onEdit: true, displayInput: false },
        { id: 3, title: "Síntomas", description: "Describa los síntomas", onEdit: false, displayInput: false },
        { id: 4, title: "Observaciones", description: "Describa observaciones del paciente", onEdit: false, displayInput: false },
        { id: 5, title: "Diagnóstico", description: "Describa algún diagnóstico", onEdit: false, displayInput: false }
    ]);
    const [inputs, setInputs] = useState({
        antecedentsInput: true,
        symptomsInput: false,
        diagnosisInput: false,
        observationsInput: false,
        formulaInput: false,
    });
    const { antecedentsInput, symptomsInput, diagnosisInput, observationsInput, formulaInput } = inputs;
    const [incrementData, setIncrementData] = useState(0);
    const [consultation, setConsultation] = useState([]);
    const [validation, setValidation] = useState(false);
    const [consultationData, setConsultationData] = useState({
        name: '',
        date: '',
        professional: '',
        room: '',
        nextConsultation: '',
        antecedents: '',
        symptons: '',
        diagnosis: '',
        observations: '',
        formula: '',
        id: incrementData
    });
    const {
        name,
        date,
        professional,
        room,
        nextConsultation,
        antecedents,
        symptons,
        diagnosis,
        observations,
        formula
    } = consultationData;
    const handleChange = ({ target }) => {
        setConsultationData({
            ...consultationData,
            [target.name]: target.value
        });
    };
    const handleNewConsultation = () => {
        setNewConsultation(true);
        setDialog(true);
        setData(true);
    };
    const handleCloseDialog = () => {
        setDialog(false);
    }
    const handleSave = () => {
        setIncrementData(incrementData + 1);
        setConsultation([...consultation, consultationData])
        setNewConsultation(false);
        setConsultationData({
            name: '',
            date: '',
            professional: '',
            room: '',
            nextConsultation: '',
            antecedents: '',
            symptons: '',
            diagnosis: '',
            observations: '',
            formula: '',
            id: incrementData
        });
        setDialog(false);
    };
    const handleCancel = () => {
        setConsultationData({
            name: '',
            date: '',
            professional: '',
            room: '',
            nextConsultation: '',
            antecedents: '',
            symptons: '',
            diagnosis: '',
            observations: '',
            formula: '',
            id: incrementData
        });
        setDialog(false);
    }
    useEffect(() => {
        if (name.trim().length &&
            date.trim().length &&
            professional.trim().length &&
            room.trim() &&
            nextConsultation.trim().length &&
            antecedents.trim().length &&
            symptons.trim().length &&
            diagnosis.trim().length &&
            observations.trim().length &&
            formula.trim().length !== 0) {
            setValidation(true);
        };
    }, [consultationData]);

    return <>
        <Dialog
            open={dialog}
            onClose={handleCloseDialog}
            maxWidth="md"
        >
            <div
                className={classes.newConsultation}
            >
                <Grid container
                    spacing={2}
                    justifyContent='center'
                >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography
                            variant='h5'
                            color='secondary'
                        >
                            Registro de Consulta
                        </Typography>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <TextField
                            label="Nombre de consulta"
                            name="name"
                            type='text'
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                            value={name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <TextField
                            label="Fecha de Consulta"
                            name="date"
                            type='text'
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                            value={date}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <TextField
                            label="Profesional"
                            name="professional"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                            value={professional}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <TextField
                            label="Consultorio"
                            name="room"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                            value={room}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField
                            label="Próxima Consulta"
                            name="nextConsultation"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                            value={nextConsultation}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={2} xl={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => setInputs({
                                    antecedentsInput: true,
                                    symptomsInput: false,
                                    diagnosisInput: false,
                                    observationsInput: false,
                                    formulaInput: false,
                                })}
                        >
                            <Typography
                                color='secondary'
                            >
                                Antecedentes
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => setInputs({
                                    antecedentsInput: false,
                                    symptomsInput: true,
                                    diagnosisInput: false,
                                    observationsInput: false,
                                    formulaInput: false,
                                })}
                        >
                            <Typography
                                color='secondary'
                            >
                                Síntomas
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => setInputs({
                                    antecedentsInput: false,
                                    symptomsInput: false,
                                    diagnosisInput: true,
                                    observationsInput: false,
                                    formulaInput: false,
                                })}
                        >
                            <Typography
                                color='secondary'
                            >
                                Diagnóstico
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => setInputs({
                                    antecedentsInput: false,
                                    symptomsInput: false,
                                    diagnosisInput: false,
                                    observationsInput: true,
                                    formulaInput: false,
                                })}
                        >
                            <Typography
                                color='secondary'
                            >
                                Observaciones
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                        <Button
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            onClick={
                                () => setInputs({
                                    antecedentsInput: false,
                                    symptomsInput: false,
                                    diagnosisInput: false,
                                    observationsInput: false,
                                    formulaInput: true,
                                })}
                        >
                            <Typography
                                color='secondary'
                            >
                                Fórmula
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        {
                            antecedentsInput ?
                                <TextField
                                    label="Antecedentes"
                                    name="antecedents"
                                    variant="outlined"
                                    color='secondary'
                                    fullWidth
                                    multiline
                                    value={antecedents}
                                    rows={4}
                                    onChange={handleChange}
                                />
                                :
                                null
                        }
                        {
                            symptomsInput ?
                                <TextField
                                    label="Síntomas"
                                    name="symptons"
                                    variant="outlined"
                                    color='secondary'
                                    fullWidth
                                    multiline
                                    value={symptons}
                                    rows={4}
                                    onChange={handleChange}
                                />
                                :
                                null
                        }
                        {
                            diagnosisInput ?
                                <TextField
                                    label="Diagnóstico"
                                    name="diagnosis"
                                    variant="outlined"
                                    color='secondary'
                                    fullWidth
                                    multiline
                                    value={diagnosis}
                                    rows={4}
                                    onChange={handleChange}
                                />
                                :
                                null
                        }
                        {
                            observationsInput ?
                                <TextField
                                    label="Observaciones"
                                    name="observations"
                                    variant="outlined"
                                    color='secondary'
                                    fullWidth
                                    multiline
                                    value={observations}
                                    rows={4}
                                    onChange={handleChange}
                                />
                                :
                                null
                        }
                        {
                            formulaInput ?
                                <TextField
                                    label="Fórmula"
                                    name="formula"
                                    variant="outlined"
                                    color='secondary'
                                    fullWidth
                                    multiline
                                    value={formula}
                                    rows={4}
                                    onChange={handleChange}
                                />
                                :
                                null
                        }
                    </Grid>
                    <Grid item lg={3}>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            onClick={handleSave}
                            disabled={validation === false}
                        >
                            <Typography
                                color='secondary'
                            >
                                Guardar
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item lg={3}>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            onClick={handleCancel}
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
        <Grid container className={classes.newConsultation} spacing={2} justifyContent='center'>
            <Grid item xl={2}>
                <Button
                    // className={classes.button}
                    color='secondary'
                    variant='outlined'
                    onClick={handleNewConsultation}
                    fullWidth
                >
                    <Typography
                        color='secondary'
                        style={{ textTransform: 'none' }}
                    >
                        Nueva Consulta
                    </Typography>
                </Button>
            </Grid>
            <Grid item xl={2}>
                <Button
                    // className={classes.button}
                    color='ssecondary'
                    variant='outlined'
                    fullWidth
                >
                    <Typography
                        color='secondary'
                        style={{
                            textTransform: 'none'
                        }}
                    >
                        Crear Nota
                    </Typography>
                </Button>
            </Grid>
        </Grid>
        {
            data ?
                consultation.map(item => (
                    (
                        <div
                            key={item.id}
                        >
                            <Grid container
                                justifyContent='center'
                                className={classes.container}
                            >

                                <Grid container
                                    alignItems='center'
                                    spacing={0}
                                    justifyContent='center'
                                >
                                    <Grid item xs={12}
                                        style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                                    >
                                        <Typography
                                            color='secondary'
                                            variant='h5'
                                        >
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Fecha/Hora'
                                            description={item.name}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Profesional'
                                            description={item.professional}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Antecedentes'
                                            description={item.antecedents}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Síntomas'
                                            description={item.symptons}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Observaciones'
                                            description={item.observations}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Table
                                            title='Fórmula'
                                            description={item.formula}
                                            displayEdit={displayEdit}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <OptionTable
                                            displayEdit={displayEdit}
                                            setDisplayEdit={setDisplayEdit}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>

                    )
                ))
                :
                (
                    <Grid container
                        justifyContent='center'
                        alignItems='center'
                        style={{
                            height: '500px'
                        }}
                    >
                        <Typography
                            color='secondary'
                            variant='h5'
                        >
                            No ha cargado ninguna consulta
                        </Typography>
                    </Grid>
                )
        }
    </>;
}
