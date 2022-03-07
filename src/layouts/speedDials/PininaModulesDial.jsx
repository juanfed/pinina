import makeStyles from '@mui/styles/makeStyles';
import { Button, Typography, Backdrop } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FaceIcon from '@mui/icons-material/Face';
// import ContactsIcon from '@mui/icons-material/Contacts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
//icons
import pininaLogo from '../../assets/img/icons/logopalette2.svg'
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import StorageIcon from '@mui/icons-material/Storage';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import router, { useRouter } from 'next/router';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useSelector } from 'react-redux';
import { setModulesAction } from '../../redux/actions/adminAction';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'fixed',
        top: theme.spacing(1),
        left: theme.spacing(2)
    },
    icons: {
        width: 400
    },
    pininaLogo: {
        width: 40
    },
    fabIcons: {
        color: secondaryColor
    },
    toolTips: {
        backgroundColor: 'white'
    },
    pininaFab: {
        width: 200,
        borderRadius: '25px',
        backgroundColor: primaryColor
    }
}));
export default function PininaModulesDial() {
    const { filteredUserModules, userModules } = useSelector(state => state.admin);
    const { user } = useSelector(state => state.auth);
    const classes = useStyles();
    const router = useRouter();
    const [actions, setActions] = useState([
        {
            icon: <PetsIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Mascotas/Cliente
                </Typography>,
            id: 0
        },
        {
            icon: <EventNoteIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Citas
                </Typography>,
            id: 4
        },
        {
            icon: <GroupIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Clientes
                </Typography>,
            id: 5
        },
        {
            icon: <WorkIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Proveedores
                </Typography>,
            id: 6
        },
        {
            icon: <ReceiptIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Facturación
                </Typography>,
            id: 7
        },
        {
            icon: <SupervisedUserCircleIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Contratos
                </Typography>,
            id: 8
        },
    ]);

    useEffect(() => {
        if (user.length !== 0) {
            if (userModules.length !== 0) {
                const data = userModules.filter(i => i.id_usuario === user.id);
                const newActions = data.map(i => {
                    return {
                        icon: <ContactsIcon fontSize='large' />,
                        name:
                            <Typography variant='h6'>
                                {i.modulo}
                            </Typography>,
                        id: i.id,
                        href: i.href
                    };
                });
                setActions(newActions);
            }
        }
    }, [user.id, userModules]);

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClickMenu = idButton => {
        switch (idButton) {
            case 0:
                router.push('/petsAndClients');
                break;
            default: handleClose();
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Backdrop open={open} />
            <SpeedDial
                direction='down'
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<PininaLogo classes={classes.pininaLogo} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{ className: classes.pininaFab }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.id}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => router.push(`/main/${action.href}`)}
                        /* onClick={() => router.push(`/main/$C_citOxUh2Create`)} */    
                        FabProps={{
                            style: {
                                color: secondaryColor,
                                backgroundColor: primaryColor,
                                width: 70,
                                height: 70
                            }
                        }}
                        TooltipClasses={{
                            color: secondaryColor
                        }}

                    />
                ))}
            </SpeedDial>
        </>
    );
};

const PininaLogo = ({ classes }) =>
    <Button
        startIcon={<img src={pininaLogo} className={classes} alt='Pinina logo' />}
    >
        <Typography
            color='secondary'
            variant='h5'
        >
            Pet Pinina
        </Typography>
    </Button>