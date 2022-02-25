import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Typography, Grid } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

//icons
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SearchIcon from '@material-ui/icons/Search';

import AppsIcon from '@material-ui/icons/Apps';
import EditIcon from '@material-ui/icons/Edit';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router';
import { AddCloseAction, AddOpenAction, cleanOnAction, deleteCloseAction, deleteOpenAction, editCloseAction, editOpenAction, saveOpenAction, searchOpenAction } from '../../redux/actions/MainAction';

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
        width: 400,
        borderRadius: '25px',
        backgroundColor: '#FFF',
        border: 'solid 3px  #FFE400',
        "&:hover": {
            backgroundColor: '#FFF'
        }

    },
    appIcon: {
        width: 40
    },
    title: {
        height: '100%'
    }
}));
export default function SonOptionsDial({ title, handleAdd, handleEdit, addState, editState, handleBack, handleDelete, deleteState, handleSearch }) {
    const classes = useStyles();

    const initialActions = [
        { icon: <AddIcon />, name: <Typography>Crear</Typography>, mode: 'create' },
        { icon: <EditIcon />, name: <Typography>Actualizar</Typography>, mode: 'update' },
        { icon: <DeleteIcon />, name: <Typography>Eliminar</Typography>, mode: 'delete' },
        { icon: <SearchIcon />, name: <Typography>Buscar</Typography>, mode: 'search' }
    ]
    const [actions, setActions] = useState(initialActions);

    const [open, setOpen] = useState(false);
    const [addActions, setAddActions] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheck = mode => {
        console.log(mode)
        switch (mode) {
            case 'create':
                handleAdd();
                break;
            case 'close':
                break;
            case 'cancel':
                handleBack();
                break;
            case 'save':
                break;
            case 'update':
                handleEdit();
                break;
            case 'delete':
                handleDelete();
                break;
            case 'search':
                handleSearch();
                break;
            default:
        }
    };

    useEffect(() => {
        if (editState || deleteState) {
            setActions([
                { icon: <KeyboardReturnIcon />, name: <Typography>Volver</Typography>, mode: 'cancel' },
            ])
        } else {
            setActions(initialActions);
        }
    }, [editState, deleteState]);

    return (
        <>
            <SpeedDial
                direction='right'
                ariaLabel="Opciones"
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
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleCheck(action.mode)}
                        FabProps={{
                            style: {
                                color: secondaryColor,
                                backgroundColor: '#FFF',
                                width: 50,
                                height: 50,
                                border: 'solid 3px  #FFE400',
                                "&:hover": {
                                    backgroundColor: primaryColor
                                }
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </>

    );
}

const Dial = ({ classes, title }) =>
    <Grid container alignItems='center' justify='center'>
        <Grid item>
            <AppsIcon
                color='secondary'
                className={classes.AppsIcon}
            />
        </Grid>
        <Grid item>
            <Typography
                style={{ marginLeft: '5px' }}
                color='secondary'
                variant='h5'
                className={classes.title}
            >
                {title}
            </Typography>
        </Grid>
    </Grid>