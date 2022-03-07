import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useEffect, useState } from 'react';
//icons
import PetsIcon from '@mui/icons-material/Pets';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
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
