import { makeStyles } from '@material-ui/core';
import { primaryColor, secondaryColor, tableTypographyColor } from './mainTheme';

export const userModulesDialogStyles = makeStyles((theme) => ({
	rootContainer: {
		padding: theme.spacing(4, 8, 4, 8)
	},
	title: {
		fontWeight: 'bolder'
	},
	titleContainer: {
		padding: theme.spacing(2, 4, 4, 4)
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
	modulesContainer: {
		padding: theme.spacing(1, 1, 1, 1)
	},
	mainContainer: {
		padding: theme.spacing(2, 8, 2, 8)
	},
	paper: {
		borderRadius: '25px',
		/* backgroundColor: primaryColor */
	}
	// inputInput: {
	// 	padding: theme.spacing(1, 1, 1, 0),
	// 	// vertical padding + font size from searchIcon
	// 	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	// 	transition: theme.transitions.create('width'),
	// 	width: '100%',
	// 	[theme.breakpoints.up('md')]: {
	// 		width: '20ch',
	// 	},
}));

export default userModulesDialogStyles;
