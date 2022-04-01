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
			main: '#8E5207'
		},
		default: {
			main: '#8E5207'
		},
		
		
	},
	palette4: {
		primary: {
			main: '#FFF15A'
		},
		secondary: {
			// main: '#081348' 
			main: '#8E5207'
		}
	},
	palette5: {
		primary: {
			main: '#FFF15A'
		},
		secondary: {
			main: '#8E5207'
		}
	}

	
}));

export const tableTypographyColor = '#6B6B6B';
const primaryColor = mainTheme.palette.primary.main;
const secondaryColor = mainTheme.palette.secondary.main;
export { primaryColor, secondaryColor };
export default mainTheme;
