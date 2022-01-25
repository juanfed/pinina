import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Backdrop } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';
//icons
import pininaLogo from '../../assets/img/icons/logopalette2.svg'
import PetsIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StorageIcon from '@material-ui/icons/Storage';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ContactsIcon from '@material-ui/icons/Contacts';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import router, { useRouter } from 'next/router';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'fixed',
        top: theme.spacing(1),
        left: theme.spacing(2),
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
    const classes = useStyles();
    const router = useRouter();
    const actions = [
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
            id: 1
        },
        {
            icon: <GroupIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Clientes
                </Typography>,
            id: 2
        },
        {
            icon: <WorkIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Proveedores
                </Typography>,
            id: 3
        },
        {
            icon: <ReceiptIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Facturación
                </Typography>,
            id: 4
        },
        {
            icon: <StorageIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Inventario
                </Typography>,
            id: 5
        },
        {
            icon: <AccountBalanceWalletIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Contabilidad
                </Typography>,
            id: 6
        },
        {
            icon: <ContactsIcon fontSize='large' />,
            name:
                <Typography variant='h6'>
                    Recursos Humanos
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
    ];

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
                        onClick={() => handleClickMenu(action.id)}
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