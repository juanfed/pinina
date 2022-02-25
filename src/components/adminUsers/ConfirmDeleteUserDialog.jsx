import { Dialog, Typography, Grid, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import confirmDeleteUserDialogStyles from '../../assets/css/js/confirmDeleteUserDialogStyles';
import { closeConfirmDeleteDialogAction, getUsersBusinessAction, removeUserBusinessAction } from '../../redux/actions/adminAction';

export default function ConfirmDeleteUserDialog() {
    const { deleteUserDialog, deleteUserId } = useSelector(state => state.admin);
    const classes = confirmDeleteUserDialogStyles();
    const dispatch = useDispatch();
    const [removeSuccess, setRemoveSuccess] = useState(false);
    const [removeMsg, setRemoveMsg] = useState('');
    const closeDialog = () => {
        dispatch(closeConfirmDeleteDialogAction());
    };
    const handleDeleteUser = async () => {
        const response = await dispatch(removeUserBusinessAction({ id: deleteUserId }));
        if (response.code === 1) {
            setRemoveSuccess(true);
            setRemoveMsg(response.msg);
        }
    };
    const handleResetDialog = () => {
        dispatch(getUsersBusinessAction());
        closeDialog();
        setRemoveSuccess(false);
        setRemoveMsg('');
    };

    return (
        <Dialog
            open={deleteUserDialog}
            onClose={closeDialog}
            maxWidth='lg'
        >
            <Grid container justify='center' className={classes.rootContainer} >
                <Grid xs={12}>
                    <Grid container
                        spacing={2}
                        justify='center'
                    >
                        <Grid item xs={12}>
                            <Grid container justify='center' className={classes.msgContainer}>
                                {removeSuccess ?
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            {removeMsg}
                                        </Typography>
                                    </Grid>
                                    :
                                    <Grid item>
                                        <Typography align='center' variant='h5'>
                                            ¿Desea Eliminar a éste Usuario?
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
                                        onClick={handleDeleteUser}
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
    )
};
