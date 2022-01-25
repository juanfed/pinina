import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({

      root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://i.ibb.co/nC23pjJ/dog-1869167-1920-1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      image2: {
        // Seccion de registrar un usuario
        backgroundImage: 'url(https://i.ibb.co/fXdJ8yX/dog-1209154-1920.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      typography: {
        fontFamily: `'Poppins', 'sans-serif'`,
      }

}));

export default loginStyles;