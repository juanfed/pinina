import makeStyles from '@mui/styles/makeStyles';
import { primaryColor, secondaryColor } from './mainTheme';

export const adminUserStyles = makeStyles((theme) => ({
	background: {
		// paddingBottom: '500px',
		backgroundColor: '#F6F6F6'
	},
	profileContainer: {
		// padding: theme.spacing(1, 5, 1, 18),
		padding: theme.spacing(2, 10, 1, 10)
	},
	root: {
		padding: theme.spacing(12, 5, 1, 5)
	},
	inputContainer: {
		padding: theme.spacing(1, 20, 1, 20)
	},
	titlePaper: {
		borderRadius: '50px',
		backgroundColor: primaryColor
	},
	adminPaper: {
		borderRadius: '50px'
	},
	dataPaper: {
		borderRadius: '50px'
	},
	paperContainer: {
		borderRadius: '20px'
	},
	header: {
		padding: theme.spacing(0, 20, 0, 20)
	},
	headerPaper: {
		borderRadius: '15px',
		backgroundColor: primaryColor
	},
	paperContent: {
		backgroundColor: '#fff',
		borderRadius: '15px',
	},
	icon: {
		width: 100
	},
	infoContainer: {
		padding: theme.spacing(2, 2, 2, 2)
	},
	paperOptions: {
		borderRadius: '15px',
		backgroundColor: primaryColor
	},
	subtitleContainer: {
		padding: theme.spacing(2, 4, 2, 4)
	},
	logoTable: {
		color: secondaryColor,
		fontSize: '30px',
	},
	//given styles from software contable
	mediaInfo: {
		top: '330px',
		width: '92%',
		height: '100px',
		boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.10)',
		borderRadius: '10px'
	},
	logoInfoId: {
		position: 'relative',
		top: '5px',
		left: '-22%',
		fontSize: '60px'
	},
	logoInfoDir: {
		position: 'relative',
		top: '5px',
		left: '-10%',
		fontSize: '60px'
	},
	logoInfoNit: {
		position: 'relative',
		top: '5px',
		left: '-16%',
		fontSize: '60px'
	},
	tituloInfoDir: {
		position: 'relative',
		bottom: '75px',
		left: '-2%',
		color: '#6A6A6A',
		fontFamily: 'Rubik',
		fontWeight: 400,
		fontSize: '18px',
		textAlign: 'left'
	},
	tituloInfoNit: {
		position: 'relative',
		bottom: '75px',
		left: '-15%',
		color: '#6A6A6A',
		fontFamily: 'Rubik',
		fontWeight: 400,
		fontSize: '18px',
		textAlign: 'left'
	},
	tituloInfoId: {
		position: 'relative',
		bottom: '75px',
		left: '-30%',
		color: '#6A6A6A',
		fontFamily: 'Rubik',
		fontWeight: 400,
		fontSize: '18px',
		textAlign: 'left',
	},
	textInfoNit: {
		position: 'relative',
		top: '-37px',
		left: '-15%',
		fontFamily: 'Ubuntu',
		fontWeight: 600,
		fontSize: '18px',
		textAlign: 'left',
		color: secondaryColor
	},
	textInfoDir: {
		position: 'relative',
		top: '-37px',
		left: '-2%',
		fontFamily: 'Ubuntu',
		fontWeight: 600,
		fontSize: '18px',
		textAlign: 'left',
		color: secondaryColor
	},
	textLayout: {
		fontFamily: 'Segoe UI Emoji',
		fontWeight: 600,
		fontSize: '25px',
		textAlign: 'left'
	},
	textInfoId: {
		position: 'relative',
		top: '-37px',
		left: '-30%',
		fontFamily: 'Ubuntu',
		fontWeight: 600,
		fontSize: '18px',
		textAlign: 'left',
		color: secondaryColor
	},
}));

export default adminUserStyles;
