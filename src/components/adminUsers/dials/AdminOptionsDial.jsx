import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { useEffect, useState } from 'react';
//icons
import PetsIcon from '@material-ui/icons/Pets';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import AppsIcon from '@material-ui/icons/Apps';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { secondaryColor } from '../../../assets/css/js/mainTheme';
import { displayDeleteButtonAdminAction, displayUpdateButtonAdminAction } from '../../../redux/actions/adminAction';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    speedDial: {

        top: theme.spacing(1),
        left: theme.spacing(2),
    },
    icons: {
        width: 400
    },
    dial: {
        width: 100
    },
    fabIcons: {
        color: secondaryColor
    },
    toolTips: {
        backgroundColor: 'white'
    },
    dialFab: {
        width: 300,
        borderRadius: '25px',
        backgroundColor: '#fff',
        '&:hover': { backgroundColor: '#fff' },
    },
    appIcon: {
        width: 40
    }
}));
export default function AdminOptionsDial({ setPrivDialog, title, handleDeleteUser }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { updateAdminButton, deleteAdminButton } = useSelector(state => state.admin)
    const initialActions = [{
        icon: <EditIcon />,
        name:
            <Typography>
                Actualizar Permisos
            </Typography>,
        id: 0
    },
    {
        icon: <AddIcon />,
        name:
            <Typography>
                Añadir
            </Typography>,
        id: 1
    },
    {
        icon: <DeleteIcon />,
        name:
            <Typography>
                Eliminar
            </Typography>,
        id: 2
    }];
    const backAction = [
        {
            icon: <KeyboardReturnIcon />,
            name:
                <Typography>
                    Volver
                </Typography>,
            id: 3
        }
    ]
    const [actions, setActions] = useState(initialActions);

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (updateAdminButton) {
            setActions(backAction);
        } else {
            setActions(initialActions);
        }
    }, [updateAdminButton, deleteAdminButton])
    useEffect(() => {
        if (deleteAdminButton) {
            setActions(backAction);
        } else {
            setActions(initialActions);
        }
    }, [deleteAdminButton])

    const handleClickMenu = idButton => {
        switch (idButton) {
            case 0:
                dispatch(displayUpdateButtonAdminAction(true));
                break;
            case 1:
                setPrivDialog(true);
                handleClose();
                break;
            case 2:
                dispatch(displayDeleteButtonAdminAction(true));
                handleClose();
                break;
            case 3:
                dispatch(displayUpdateButtonAdminAction(false));
                dispatch(displayDeleteButtonAdminAction(false));
                handleClose();
                break;
            default: handleClose();
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <SpeedDial
                direction='right'
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<Dial classes={classes.appIcon} title={title} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{ className: classes.dialFab }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.id}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleClickMenu(action.id)}
                        FabProps={{
                            style: {
                                color: secondaryColor,
                                backgroundColor: '#ffff',
                                width: 50,
                                height: 50
                            }
                        }}
                        tooltipPlacement='bottom'
                    />
                ))}
            </SpeedDial>
        </>
    );
};

const Dial = ({ classes, title }) =>
    <Grid container alignI='center'>
        <Grid item>
            <AppsIcon color='secondary' fontSize='large' />
        </Grid>
        <Grid item>
            <Typography
                color='secondary'
                align='center'
                variant='h5'
            >
                {title}
            </Typography>
        </Grid>
    </Grid>
