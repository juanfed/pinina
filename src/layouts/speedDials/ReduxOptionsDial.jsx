import makeStyles from '@mui/styles/makeStyles';
import { Backdrop, Typography, Grid } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';

//icons
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SearchIcon from '@mui/icons-material/Search';

import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FaceIcon from '@mui/icons-material/Face';
import ContactsIcon from '@mui/icons-material/CloudUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        color: '#FFB716'
        
    },
    toolTips: {
        backgroundColor: '#FFB714'
    },


    dialFab: {
       
        borderRadius: '40px !important',
        backgroundColor: '#FFF',
        border: 'solid 3px  #FFB716 !important',
        "&:hover": {
            backgroundColor: '#FFB716'
        }

    },
    appIcon: {
        width: "100px"
    },
    title: {
        height: '100%'
    }
}));
export default function ReduxOptionsDial({ title }) {
    const classes = useStyles();

    //redux extraction
    const dispatch = useDispatch();
    const { edit, add, deleteData } = useSelector(state => state.main);

    const [actions, setActions] = useState([
        { icon: <AddIcon />, name: <Typography>Crear</Typography>, mode: 'create' },
    ])

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
                setAddActions(true);
                dispatch(AddOpenAction());
                break;
            case 'close':
                setAddActions(false);
                break;
            case 'cancel':
                dispatch(editCloseAction());
                dispatch(AddCloseAction());
                dispatch(deleteCloseAction())
                setAddActions(false);
                dispatch(cleanOnAction());
                break;
            case 'save':
                dispatch(saveOpenAction());
                break;
            case 'update':
                dispatch(saveOpenAction());
                dispatch(editOpenAction());
                break;
            case 'delete':
                dispatch(deleteOpenAction());
                break;
            case 'search':
                dispatch(searchOpenAction());
                break;
            default:
        }
    }
    useEffect(() => {
        if (!add || !edit) { }
        setAddActions(false);
    }, [add, edit])

    useEffect(() => {
        if (addActions) {
            setActions([
                { icon: <KeyboardReturnIcon />, name: <Typography>Volver</Typography>, mode: 'cancel' },
                { icon: <SaveIcon />, name: <Typography>Guardar</Typography>, mode: 'save' },
            ])
        } else {
            setActions([
                { icon: <AddIcon />, name: <Typography>Crear</Typography>, mode: 'create' },
                { icon: <EditIcon />, name: <Typography>Actualizar</Typography>, mode: 'update' },
                { icon: <DeleteIcon />, name: <Typography>Eliminar</Typography>, mode: 'delete' },
                { icon: <SearchIcon />, name: <Typography>Buscar</Typography>, mode: 'search' },
            ])
        }
    }, [addActions]);

    useEffect(() => {
        if (edit || deleteData) {
            setActions([
                { icon: <KeyboardReturnIcon />, name: <Typography>Volver</Typography>, mode: 'cancel' }
            ]);
        } else {
            setActions([
                { icon: <AddIcon />, name: <Typography>Crear</Typography>, mode: 'create' },
                { icon: <EditIcon />, name: <Typography>Actualizar</Typography>, mode: 'update' },
                { icon: <DeleteIcon />, name: <Typography>Eliminar</Typography>, mode: 'delete' },
                { icon: <SearchIcon />, name: <Typography>Buscar</Typography>, mode: 'search' },
            ])
        };
    }, [edit, deleteData])


    return (
        <>

        
            <SpeedDial
            
                direction='right'
                ariaLabel="Opciones"
               /*  className={classes.speedDial} */
                hidden={hidden}
                icon={<Dial classes={classes.appIcon} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{ className: classes.dialFab}}
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
                                backgroundColor: '#FFB714',
                                margin:"0.6rem",
                                borderRadius:"50px",
                                width: 50,
                                height: 50,
                                border: 'solid 3px  #FFE400',
                                "&:hover": {
                                    backgroundColor: "#81623C"
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
    <Grid container alignItems='center' justifyContent='center'>
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