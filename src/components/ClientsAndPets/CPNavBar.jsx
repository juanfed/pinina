import { Grid, Button, Typography, Divider } from '@material-ui/core'
import { useRouter } from 'next/router';
import React from 'react'
import CPNavbarStyles from '../../assets/css/js/CPNavBarStyles'
import { Link as Scroll } from 'react-scroll';

export default function CPNavBar() {
    const classes = CPNavbarStyles();
    const router = useRouter();
    return (
        <Grid container
            justify='center'
            spacing={2}
            className={classes.root}>
            <Grid item md={2} lg={2} xl={2}>
                <Scroll to="profile" smooth={true} offset={-300}>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        <Typography
                            color='secondary'
                        // variant='h6'
                        >
                            Perfil
                        </Typography>
                    </Button>
                </Scroll>
            </Grid>
            <Grid item md={2}>
                <Scroll to="clinic-history" smooth={true}>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        <Typography
                            color='secondary'
                        // variant='h6'
                        >
                            Historia Clínica
                        </Typography>
                    </Button>
                </Scroll>
            </Grid>
            <Grid item md={2}>
                <Scroll to="vaccines" smooth={true}>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        <Typography
                            color='secondary'
                        // variant='h6'
                        >
                            Vacunas
                        </Typography>
                    </Button>
                </Scroll>
            </Grid>
            <Grid item md={2}>
                <Scroll to="deworming" smooth={true}>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        <Typography
                            color='secondary'
                        // variant='h6'
                        >
                            Desparasitaciones
                        </Typography>
                    </Button>
                </Scroll>
            </Grid>
            <Grid item md={2}>
                <Scroll to="hospitalization" smooth={true}>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth
                    >
                        <Typography
                            color='secondary'
                        // variant='h6'
                        >
                            Hospitalización
                        </Typography>
                    </Button>
                </Scroll>
            </Grid>
            <Grid item md={12}>
                <Divider />
            </Grid>

        </Grid>

    )
}
