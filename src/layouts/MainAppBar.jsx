import { AppBar, Toolbar, IconButton, Typography, Grid, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
//icons
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useSelector } from 'react-redux';
import PininaLogo from '../assets/img/icons/logopalette1.svg'
import { saveSelectedBusinessDataAction } from '../redux/actions/adminAction';

//components
import AdminUserDial from './speedDials/AdminUserDial';
import BusinessDial from './speedDials/BusinessDial';
import PininaModulesDial from './speedDials/PininaModulesDial';

//icons
// import BusinessIcon from '@mui/icons-material/Business';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 0, 10, 3)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        padding: theme.spacing(1, 0, 0, 3)
    },
    appBar: {
        padding: theme.spacing(2, 1, 2, 1),
        minHeight: '70px',
       /*  backdropFilter: "blur(3px)",
        backgroundColor: 'rgba(255,255,255,1)'  */

    },
    logo: {
        width: 50,
        height: 50
    }
}));

export default function MainAppBar() {
    const classes = useStyles();
    const { selectedBusinessData } = useSelector(state => state.admin)
    return <>
   
        <AppBar hidden position="fixed" elevation={0} className={classes.appBar}>

            <Grid container alignItems='center' >
                <Grid item xs={4}>
                    <Grid container justifyContent='flex-start'>
                        <Grid item>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                size="large">
                                <PininaModulesDial />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                {selectedBusinessData?.id_empresa ?
                    <Grid item xs={4}>
                        <Grid container spacing={6} justifyContent='center' alignItems='center'>
                            <Grid item xs={6}>
                                <Grid container spacing={1} justifyContent='center' alignItems='center'>
                                    <Grid item>
                                        <ContactsIcon color='secondary' style={{ height: 40, width: 40 }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography align='center' variant='h6' color='secondary'>
                                            {selectedBusinessData?.razon}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={1} justifyContent='center' alignItems='center'>
                                    <Grid item>
                                        <ContactsIcon color='secondary' style={{ height: 40, width: 40 }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography align='center' variant='h6' color='secondary'>
                                            {selectedBusinessData?.nit}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    :
                    <Grid item xs={4}>
                        <Grid container spacing={6} justifyContent='center' alignItems='baseline'>
                            <Box />
                        </Grid>
                    </Grid>

                }
                <Grid item xs={4}>
                    <Grid container justifyContent='flex-end'>
                        <Grid item xs={2}>
                            <BusinessDial />
                        </Grid>
                        <Grid item xs={2}>
                            <AdminUserDial />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </AppBar>
        <div className={classes.root}>
            <Box />
        </div>

        
    </>;
}