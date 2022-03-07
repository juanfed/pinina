import makeStyles from '@mui/styles/makeStyles';
import { primaryColor } from './mainTheme';

export const checkEmailModalStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: theme.spacing(2, 2, 2, 2)
    },
    dialogText: {
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(2, 8, 0, 8),
        },
        padding: theme.spacing(2, 5, 2, 5),
        textAlign: 'center'
    },
    sendButtonContainer: {
        padding: theme.spacing(2, 5, 0, 5)
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

    resendButton: {
        color: '#fff'
    }
}));
