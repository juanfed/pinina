import { AppBar, Toolbar, IconButton, Typography, makeStyles, Grid, Box } from '@material-ui/core'
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

//icons
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

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
        minHeight: '70px'

    },
    logo: {
        width: 50,
        height: 50
    }
}));

export default function MainLayout() {
    const classes = useStyles();
    const { selectedBusinessData } = useSelector(state => state.admin)
    return (
        <>
            <AppBar position="fixed" color='white' elevation={10} className={classes.appBar}>

                <Grid container alignItems='center' >
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
                            </Grid>
                        </Grid>
                    </Grid>
                    {selectedBusinessData?.id_empresa ?
                        <Grid item xs={4}>
                            <Grid container spacing={6} justify='center' alignItems='center'>
                                <Grid item xs={6}>
                                    <Grid container spacing={1} justify='center' alignItems='center'>
                                        <Grid item>
                                            <BusinessIcon color='secondary' style={{ height: 40, width: 40 }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography align='center' variant='h6' color='secondary'>
                                                {selectedBusinessData?.razon}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={1} justify='center' alignItems='center'>
                                        <Grid item>
                                            <AssignmentIndIcon color='secondary' style={{ height: 40, width: 40 }} />
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
                            <Grid container spacing={6} justify='center' alignItems='baseline'>
                                <Box />
                            </Grid>
                        </Grid>

                    }
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
            <div className={classes.root}>
                <Box />
            </div>
        </>
    )
};