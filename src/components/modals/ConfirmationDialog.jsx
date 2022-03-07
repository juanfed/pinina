import { Dialog, Typography, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import confirmDeleteUserDialogStyles from '../../assets/css/js/confirmDeleteUserDialogStyles';


export default function ConfirmationDialog({ message, dialog, closeDialog, handleConfirm, success }) {
    const classes = confirmDeleteUserDialogStyles();


    return (
        <Dialog
            open={dialog}
            onClose={closeDialog}
            maxWidth='lg'
        >
            <Grid container justifyContent='center' className={classes.rootContainer} >
                <Grid xs={12}>
                    <Grid container
                        spacing={2}
                        justifyContent='center'
                    >
                        <Grid item xs={12}>
                            <Grid container justifyContent='center' className={classes.msgContainer}>
                                {success ?
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            {message}
                                        </Typography>
                                    </Grid>
                                    :
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            {message}
                                        </Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                        {success ?
                            <Grid item xs={4}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    fullWidth
                                    onClick={() => closeDialog()}
                                >
                                    <Typography
                                        color='#fff'
                                    >
                                        Aceptar
                                    </Typography>
                                </Button>
                            </Grid>
                            :
                            <>
                                <Grid item xs={4}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        onClick={handleConfirm}
                                    >
                                        <Typography
                                            color='#fff'
                                        >
                                            Aceptar
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        onClick={closeDialog}
                                    >
                                        <Typography color='#fff'>
                                            Cancelar
                                        </Typography>
                                    </Button>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Dialog >
    );
};
