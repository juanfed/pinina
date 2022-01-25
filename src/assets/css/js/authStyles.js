import { makeStyles } from "@material-ui/core";

export const authStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    },
    toRightContainer: {
        height: '100vh',
        backgroundImage: 'url(https://i.ibb.co/nC23pjJ/dog-1869167-1920-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    mainContainer: {
        padding: theme.spacing(0, 20, 0, 20)
    },
    paperContainer: {
        padding: theme.spacing(5, 10, 5, 10)
    },
    titleContainer: {
        padding: theme.spacing(2, 0, 2, 0)
    },
    paperStyle: {
        borderRadius: '20px'
    }
}));

export const registerStyles = makeStyles((theme) => ({
    buttonContainer: {
        padding: theme.spacing(0, 10, 0, 10)
    },
    mainContainer: {
        padding: theme.spacing(0, 0, 5, 0)
    }

}));

export const loginStyles = makeStyles((theme) => ({
    buttonContainer: {
        padding: theme.spacing(0, 10, 0, 10)
    }

}));


