import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import '../styles/global.css';

// Store
import store from '../redux/store';

// Notification
import { SnackbarProvider } from 'notistack';
import mainTheme from '../assets/css/js/mainTheme';
import MainAppBar from '../layouts/MainAppBar';

function MyApp({ Component, pageProps }) {
	const theme = mainTheme;
	// origen de la aplicación pinina
	return (
		<>
			<Head>
				<title>Pet Pinina</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<SnackbarProvider maxSnack={3}>
						<Component {...pageProps} />
					</SnackbarProvider>
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default MyApp;
