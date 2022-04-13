import { useState, useEffect, createRef } from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
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

    /* 
        const useStyles = makeStyles (() =>({
    success:{backgroundColor:'#694C0B' },
        }));
    
        const classes = useStyles(); */



    // origen de la aplicación pinina
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true);
    }, [])
    return <>
        <Head>
            <title>Pet Pinina</title>
            <link rel='icon' href='/faviconp.ico' />
            <link rel="manifest" href="/manifest.json" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
        </Head>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={3}
                    /*  classes={{
                        variantSuccess: classes.success,
                        
                    }} */>

                        {load &&
                            <Component {...pageProps} />
                        }
                    </SnackbarProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    </>;
}

export default MyApp;
