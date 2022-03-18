import { createTheme, adaptV4Theme } from '@mui/material/styles';

const mainTheme = createTheme(adaptV4Theme({
	palette: {
		primary: {
			// main: '#F8F29A',
			main: '#FFF15A'
			// main: '#081348',
			// main: '#55E8C2'
		},
		secondary: {
			// main: '#6F502C '
			// main: '#007575',
			main: '#81623C'
		},
		default: {
			main: '#61C05F'
		}
	},
	palette4: {
		primary: {
			main: '#F5ED68'
		},
		secondary: {
			// main: '#081348' 
			main: '#472B13'
		}
	},
	palette5: {
		primary: {
			main: '#C5A886'
		},
		secondary: {
			main: '#31190C'
		}
	}
}));

export const tableTypographyColor = '#6B6B6B';
const primaryColor = mainTheme.palette.primary.main;
const secondaryColor = mainTheme.palette.secondary.main;
export { primaryColor, secondaryColor };
export default mainTheme;
