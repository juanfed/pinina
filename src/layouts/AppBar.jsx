import { MenuItem, Paper, Grid, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import appBarStyles from '../assets/css/js/appBarStyles';
//icons
import PininaLogo from '../assets/img/icons/logopalette1.svg'
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import StorageIcon from '@mui/icons-material/Storage';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { primaryColor } from '../assets/css/js/mainTheme';

export const appBarTransition = makeStyles((theme) => ({
    drawer: {
        background: `linear-gradient(45deg, ${primaryColor} 20%, ${primaryColor} 50%)`, // tema 1
        // background: 'linear-gradient(45deg, #E9DE25 20%, #FFFAA4 80%)', //tema 2
        // background: 'linear-gradient(45deg, #C5A886 20%, #B2875A 50%)', //tema 3
        position: 'fixed',
        width: '100px',
        minHeight: '100%',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
        /*    '&:hover': {
               width: '200px',
               transition: 'width 1s'
           } */
    },
    drawerOpened: {
        background: 'linear-gradient(45deg, #EDCC55 20%, #EDCC55 50%)', // tema 1
        //  background: 'linear-gradient(45deg, #E9DE25 20%, #FFFAA4 80%)', //tema 2
        //  background: 'linear-gradient(45deg, #C5A886 20%, #B2875A 50%)', //tema 3
        position: 'fixed',
        width: '290px',
        minHeight: '100%',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
        /*    '&:hover': {
               width: '200px',
               transition: 'width 1s'
           } */
    },
    logoContainer: {
        padding: theme.spacing(2, 2, 2, 2)
    }
}));

export default function AppBar() {
    const transition = appBarTransition();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [style, setStyle] = useState(transition.drawer);
    const classes = appBarStyles();
    const router = useRouter();
    useEffect(() => {
        if (openDrawer) {
            setStyle(transition.drawerOpened)
        }
    }, [openDrawer]);
    return <>
        {openDrawer ?
            (
                <Grid container>
                    <Grid item>
                        <Paper
                            style={{ zIndex: 2 }}
                            square
                            className={style}
                            elevation={15}
                        >
                            <Grid container
                                justifyContent='center'
                                spacing={2}
                                className={classes.drawerContent}
                            >
                                <Grid container alignItems='center' className={transition.logoContainer}>
                                    <Grid item xs={3} style={{ height: '50px' }}  >
                                        <img src={PininaLogo} alt="logo" />
                                    </Grid>
                                    <Grid item xs={9} style={{ textAlign: 'center' }}>
                                        <Typography
                                            color='secondary'
                                            variant='h4'
                                        >
                                            Pet Pinina
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(false)}
                                        startIcon={<MenuIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Cerrar Menu
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => router.push('/petsAndClients')}
                                        startIcon={<PetsIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Mascotas/Cliente
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<EventNoteIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Citas
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<GroupIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Clientes
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<WorkIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Proveedores
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<ReceiptIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Facturación
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<StorageIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Inventario
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<AccountBalanceWalletIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Contabilidad
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<ContactsIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Recursos Humanos
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item md={12} style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() => setOpenDrawer(true)}
                                        startIcon={<SupervisedUserCircleIcon fontSize='large' color='secondary' />}
                                        size='large'
                                    >
                                        <Typography
                                            variant='h5'
                                            color='secondary'
                                        >
                                            Contratos
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            )
            :
            (
                <Grid container>
                    <Grid item>
                        <Paper
                            style={{ zIndex: 2 }}
                            square
                            className={transition.drawer}
                            elevation={15}
                        >
                            <Grid container
                                justifyContent='center'
                                spacing={2}
                                className={classes.drawerContent}
                            >
                                <Grid item xs={12}>
                                    <img src={PininaLogo} alt="logo" /* className={classes.imgExpanded} */ />
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => setOpenDrawer(true)} size="large">
                                        <MenuIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton onClick={() => router.push('/petsAndClients')} size="large">
                                        <PetsIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <EventNoteIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <GroupIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <WorkIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <ReceiptIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <StorageIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <AccountBalanceWalletIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <ContactsIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <IconButton size="large">
                                        <SupervisedUserCircleIcon
                                            style={{ width: '100%', height: '100%' }}
                                            fontSize='large'
                                            color='secondary'
                                        />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            )
        }

    </>;
}
