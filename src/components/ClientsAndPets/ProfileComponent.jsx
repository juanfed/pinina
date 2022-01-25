import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid, Divider } from "@material-ui/core";
import profileStyles from "../../assets/css/js/profileStyles";
import ImageLoader from "../ImageLoader";



export default function ProfileComponent() {
    const classes = profileStyles();

    return (
        <>
            <Grid container justify='center' spacing={2} className={classes.profileContainer}>
                <Grid container style={{ width: '200px', height: '200px' }}>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <ImageLoader />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Typography
                        variant='h4'
                        color='secondary'
                    >
                        Paciente: Tony
                    </Typography>
                </Grid>
                <Grid container justify='center' spacing={1} className={classes.inputContainer}>
                    <Grid item md={6}>
                        <TextField
                            label="Identificación"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Nombre del paciente"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Fecha de Nacimiento"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Sexo"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Especie"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Edad"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Raza"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Color"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Propietario"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Dirección"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Correo"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Teléfono"
                            name="identy"
                            variant="outlined"
                            color='secondary'
                            size='small'
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}