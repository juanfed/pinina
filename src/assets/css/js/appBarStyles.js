import makeStyles from '@mui/styles/makeStyles';
import { primaryColor } from './mainTheme';

export const appBarStyles = makeStyles((theme) => ({
	drawer: {
		// background: 'linear-gradient(45deg, #EDCC55 20%, #EDCC55 50%)', //tema 1
		background: `linear-gradient(45deg, ${primaryColor} 20%, ${primaryColor} 50%)`, //tema 1
		// position: 'fixed',
		width: '100px',
		minHeight: '100%',
		borderTopRightRadius: '30px',
		borderBottomRightRadius: '30px'
	},
	drawerContent: {
		padding: theme.spacing(2, 2, 2, 2)
	},
	expandedImage: {
		width: '50px',
		height: '50px'
	},
	logoContainer: {
		padding: theme.spacing(2, 2, 2, 2)
	}
}));

export default appBarStyles;
