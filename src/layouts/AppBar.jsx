import { MenuItem, Paper, Grid, Button, makeStyles } from '@material-ui/core';
import appBarStyles from '../assets/css/js/appBarStyles';
//icons
import PininaLogo from '../assets/img/icons/logopalette1.svg'
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
import { IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
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
    return (
        <>
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
                                    justify='center'
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
                                    justify='center'
                                    spacing={2}
                                    className={classes.drawerContent}
                                >
                                    <Grid item xs={12}>
                                        <img src={PininaLogo} alt="logo" /* className={classes.imgExpanded} */ />
                                    </Grid>
                                    <Grid item>
                                        <IconButton
                                            onClick={() => setOpenDrawer(true)}
                                        >
                                            <MenuIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton
                                            onClick={() => router.push('/petsAndClients')}
                                        >
                                            <PetsIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <EventNoteIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <GroupIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <WorkIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <ReceiptIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <StorageIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <AccountBalanceWalletIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
                                            <ContactsIcon
                                                style={{ width: '100%', height: '100%' }}
                                                fontSize='large'
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton>
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

        </>
    )
}
