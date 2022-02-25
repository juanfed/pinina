import { makeStyles } from '@material-ui/core';
import { primaryColor } from './mainTheme';

export const profileStyles = makeStyles((theme) => ({
	background: {
		// padding: theme.spacing(1, 5, 1, 18),
		backgroundColor: '#F6F6F6'
	},
	profileContainer: {
		// padding: theme.spacing(1, 5, 1, 18),
		padding: theme.spacing(2, 10, 1, 10)
	},
	root: {
		padding: theme.spacing(1, 5, 1, 5)
	},
	inputContainer: {
		padding: theme.spacing(1, 20, 1, 20)
	},
	titlePaper: {
		backgroundColor: primaryColor,
		borderRadius: '50px'
	},
	paperContainer: {
		borderRadius: '20px'
	}
}));

export default profileStyles;
