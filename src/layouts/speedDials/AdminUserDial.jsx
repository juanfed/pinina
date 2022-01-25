import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Typography } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import EditIcon from '@material-ui/icons/Edit';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'fixed',
        top: theme.spacing(1),
        // right: theme.spacing(2),
    },
    icons: {
        width: 400
    }
}));
export default function AdminUserDial() {
    const classes = useStyles();
    const { userAdmin } = useSelector(state => state.admin)
    /*  const actions = [
         { icon: <PeopleAltIcon />, name: <Typography>Administración de Usuarios</Typography> },
         { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography> },
         { icon: <CloudUploadIcon />, name: <Typography>Subir Archivos</Typography> },
         { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography> },
     ]; */

    const [actions, setActions] = useState([
        { icon: <PeopleAltIcon />, name: <Typography>Administración de Usuarios</Typography> },
        { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography> },
        { icon: <CloudUploadIcon />, name: <Typography>Subir Archivos</Typography> },
        { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography> },
    ])

    const [open, setOpen] = useState(false);
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

    useEffect(() => {
        if (!userAdmin) {
            setActions([
                { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography> },
                { icon: <CloudUploadIcon />, name: <Typography>Subir Archivos</Typography> },
                { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography> },
            ])
        }
    }, [userAdmin]);

    return (
        <>
            <Backdrop open={open} />
            <SpeedDial
                direction='down'
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<AccountCircleIcon color='secondary' openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                        FabProps={{
                            style: {
                                color: secondaryColor,
                                backgroundColor: primaryColor,
                                width: 60,
                                height: 60
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </>
    );
}