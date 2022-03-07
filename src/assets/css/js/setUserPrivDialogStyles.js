import makeStyles from '@mui/styles/makeStyles';
import { secondaryColor, tableTypographyColor } from './mainTheme';

export const setUserPrivDialogStyles = makeStyles((theme) => ({
	rootContainer: {
		padding: theme.spacing(1, 6, 6, 6)
	},
	title: {
		fontWeight: 'bolder'
	},
	titleContainer: {
		padding: theme.spacing(1, 4, 4, 4)
	},
	closeContainer: {
		padding: theme.spacing(1, 1, 0, 0)
	},
	subtitleContainer: {
		padding: theme.spacing(2, 0, 1, 0)
	},
	inputContainer: {
		padding: theme.spacing(4, 4, 4, 4)
	},
	tableContainer: {
		padding: theme.spacing(4, 0, 4, 0)
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputPaper: {
		borderRadius: '5px',
		borderColor: tableTypographyColor
	},
	icon: {
		marginTop: '2px'
	},
	modulePaper: {
		padding: theme.spacing(1, 0, 1, 0),
		borderRadius: '25px'
	},
	scrollBar: {
		'&::-webkit-scrollbar': {
			width: '0.4em'
		},
		'&::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			outline: '1px solid slategrey'
		}
	},
	button: {
		borderRadius: '20px'
	},
	conventionsContainer: {
		padding: theme.spacing(2, 0, 0, 0)
	},
	addModulesContainer: {
		padding: theme.spacing(6, 0, 4, 0)
	}

}));

export default setUserPrivDialogStyles;
