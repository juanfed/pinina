import makeStyles from '@mui/styles/makeStyles';
import { secondaryColor, tableTypographyColor } from './mainTheme';

export const confirmDeleteUserDialogStyles = makeStyles((theme) => ({
	rootContainer: {
		padding: theme.spacing(4, 2, 4, 2)
	},
	msgContainer: {
		padding: theme.spacing(2, 0, 2, 0)
	}
}));

export default confirmDeleteUserDialogStyles;
