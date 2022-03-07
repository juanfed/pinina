import { Dialog, Typography, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import confirmDeleteUserDialogStyles from '../../assets/css/js/confirmDeleteUserDialogStyles';
import { closeConfirmDeleteDialogAction, deleteUserProfileAction, getUserModulesAction, getUsersBusinessAction, removeUserModulesAction, setConfirmProfileDialogAction } from '../../redux/actions/adminAction';

export default function ConfirmDeleteProfileDialog() {
    const { deleteProfileDialog, deleteUserId, selectedBusinessData } = useSelector(state => state.admin);
    const classes = confirmDeleteUserDialogStyles();
    const dispatch = useDispatch();
    const [removeSuccess, setRemoveSuccess] = useState(false);
    const [removeMsg, setRemoveMsg] = useState('');
    const closeDialog = () => {
        dispatch(setConfirmProfileDialogAction(false));
    };
    const handleDeleteProfiles = async () => {
        const res = await dispatch(deleteUserProfileAction({
            id_usuario: deleteUserId,
            id_empresa: selectedBusinessData.id_empresa
        }));
        if (res) {
            setRemoveSuccess(true);
            setRemoveMsg(res.msg);
            dispatch(getUserModulesAction());
        }
    };
    const handleResetDialog = () => {
        closeDialog();
        setRemoveSuccess(false);
        setRemoveMsg('');
    };

    return (
        <Dialog
            open={deleteProfileDialog}
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
                                {removeSuccess ?
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            {removeMsg}
                                        </Typography>
                                    </Grid>
                                    :
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            ¿Desea Eliminar todos los perfiles de este usuario?
                                        </Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                        {removeSuccess ?
                            <Grid item xs={4}>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    fullWidth
                                    onClick={handleResetDialog}
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
                                        onClick={handleDeleteProfiles}
                                    >
                                        <Typography
                                            color='#fff'
                                        >
                                            Eliminar
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
