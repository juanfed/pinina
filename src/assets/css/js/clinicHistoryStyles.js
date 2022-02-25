import { makeStyles } from '@material-ui/core';

export const clinicHistoryStyles = makeStyles((theme) => ({
	// root: {
	// 	padding: theme.spacing(1, 1, 1, 1)
	// },
	button: {
		textTransform: 'none'
	},
    container: {
        padding: theme.spacing(2, 2, 2, 2)
    },
	newConsultation: {
		padding: theme.spacing(2, 10, 2, 10)
	},
	paper: {
		backgroundColor: '#FEE27A',
		padding: theme.spacing(0, 1, 1, 1),
		width: '1190px'
	}
}));
