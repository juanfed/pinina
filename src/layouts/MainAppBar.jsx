import { AppBar, Toolbar, IconButton, Typography, makeStyles, Grid } from '@material-ui/core'
//icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';
import PininaLogo from '../assets/img/icons/logopalette1.svg'
import { saveSelectedBusinessDataAction } from '../redux/actions/adminAction';

//components
import AdminUserDial from './speedDials/AdminUserDial';
import BusinessDial from './speedDials/BusinessDial';
import PininaModulesDial from './speedDials/PininaModulesDial';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        padding: theme.spacing(1, 0, 0, 3)
    },
    appBar: {
        padding: theme.spacing(0, 1, 1, 1)
    },
    logo: {
        width: 50,
        height: 50
    },
    mainContainer: {
        // padding: theme.spacing(1, 1, 1, 1)
    }
}));

export default function MainAppBar() {
    const classes = useStyles();
    const { selectedBusinessData } = useSelector(state => state.admin)
    return (
        <AppBar position="fixed" color='white' elevation={10} className={classes.appBar}>

            <Grid container alignItems='center' className={classes.mainContainer}>
                <Grid item xs={4}>
                    <Grid container justify='flex-start'>
                        <Grid item>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <PininaModulesDial />
                            </IconButton>
                            <Typography variant="h5" className={classes.title} color='secondary'>
                                Pet Pinina
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={6} justify='center' alignItems='baseline'>
                        <Grid item>
                            <Typography align='center' variant='h6'>
                                Empresa: {selectedBusinessData?.razon}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align='center' variant='h6'>
                                Nit:{selectedBusinessData?.nit}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify='flex-end'>
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
    )
};