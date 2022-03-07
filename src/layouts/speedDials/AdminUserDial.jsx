import makeStyles from '@mui/styles/makeStyles';
import { Backdrop, Typography } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';

import EditIcon from '@mui/icons-material/Edit';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FaceIcon from '@mui/icons-material/Face';
// import ContactsIcon from '@mui/icons-material/Contacts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useSelector } from 'react-redux';
import router from 'next/router';

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
         { icon: <ContactsIcon />, name: <Typography>Subir Archivos</Typography> },
         { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography> },
     ]; */

    const [actions, setActions] = useState([
        { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography>, id: 1 },
        { icon: <ContactsIcon />, name: <Typography>Subir Archivos</Typography>, id: 2 },
        { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography>, id: 3 },
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

    const handleCheck = (id) => {
        if (id === 0) {
            router.push('/adminUser')
        }
    }

    useEffect(() => {
        switch (userAdmin) {
            case 'module_restri':
                setActions([
                    { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography>, id: 1 },
                    { icon: <ContactsIcon />, name: <Typography>Subir Archivos</Typography>, id: 2 },
                    { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography>, id: 3 },
                ])
                break;
            default:
                setActions([
                    { icon: <PeopleAltIcon />, name: <Typography>Administración de Usuarios</Typography>, id: 0 },
                    { icon: <FaceIcon />, name: <Typography>Validación Facial</Typography>, id: 1 },
                    { icon: <ContactsIcon />, name: <Typography>Subir Archivos</Typography>, id: 2 },
                    { icon: <ExitToAppIcon />, name: <Typography>Cerrar Sesión</Typography>, id: 3 },
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
                icon={<ContactsIcon color='secondary' openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleCheck(action.id)}
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