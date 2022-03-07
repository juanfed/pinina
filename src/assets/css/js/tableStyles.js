import makeStyles from '@mui/styles/makeStyles';
import { primaryColor } from './mainTheme';

export const tableStyles = makeStyles((theme) => ({
	card: {
		textTransform: 'none',
		height: '100px',
		background: '#e0e0e0',
		boxShadow: '21px 21px 43px #8d8d8d, -21px -21px 43px #ffffff',
		'&:hover': {
			backgroundColor:
				'inset 21px 21px 43px #8d8d8d, inset -21px -21px 43px #ffffff'
		}
	},
	titleTable: {
		textTransform: 'none',
		textAlign: 'center',
        padding: theme.spacing(1, 1, 1, 1),
        backgroundColor: primaryColor
	},
    paperContent: {
        width: '180px',
        minHeight: '120px',
        padding: theme.spacing(2, 2, 2, 2),
        textAlign: 'center', 
        // alignItems: 'center'       
    },
    subtitle: {
        color: '#8d8d8d'
    },
	button: {
		textTransform: 'none'
	},
	papel: {
		height:'100%'
	}
}));

export default tableStyles;
