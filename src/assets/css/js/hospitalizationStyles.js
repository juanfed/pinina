import makeStyles from '@mui/styles/makeStyles';
import { primaryColor } from './mainTheme';

export const hospitalizationStyles = makeStyles((theme) => ({
    dialogContainer: {
        padding: theme.spacing(2, 10, 2, 10)      
    },
    dialogTitle: {
        textAlign: 'center'
    },
    registryButton: {
        padding: theme.spacing(0, 2, 2, 2)      
    }

}));

export default hospitalizationStyles;
