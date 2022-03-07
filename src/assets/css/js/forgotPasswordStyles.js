import makeStyles from '@mui/styles/makeStyles';
import { primaryColor } from './mainTheme';

export const forgotPasswordStyles = makeStyles((theme) => ({
    rootContainer: {
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1, 2, 1, 2),
            minHeight: '80vh'
        },
        padding: theme.spacing(4, 4, 4, 4)
    },
    closeButtonContainer: {
        [theme.breakpoints.down('md')]: {
            // minHeight: '5vh'
        },
    },
    mainContainer: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 4, 0, 4),
        },
        textAlign: 'center',
        // minHeight: '80vh',
        // display: 'flex'
    },
    dialogText: {
        padding: theme.spacing(2, 5, 2, 5),
        textAlign: 'center'
    },
    buttonContainer: {
        padding: theme.spacing(2, 0, 0, 0)
    },
    codeInputs: {
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        borderColor: '#adb5bd',
        border: '2px solid',
        textAlign: 'center',
        fontSize: '20px',
        '&:focus': {
            borderColor: primaryColor,
            outline: 'none'
        },
    },

    button: {
        color: '#fff'
    },
    emailTitle: {
        padding: theme.spacing(0, 0, 8, 0),
    },
    buttonEmail: {
        padding: theme.spacing(8, 0, 0, 0),
    }
}));
