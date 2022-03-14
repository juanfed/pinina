import { blue } from "@mui/material/colors";
import { primaryColor, secondaryColor } from "./mainTheme";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const drawerWidth = 340;
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        fontWeight: 500
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        minWidth: 70,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    image: {
        width: "230",
        height: "70"
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '20%',
        maxHeight: '20%',
    },
    media: {
        height: '100%',
        minHeight: '80vh',
        borderRadius: 30
    },
    grid: {
        flexDirection: 'row',
        flexGrow: 1,
        marginBottom: theme.spacing(2),
    },
    bottom: {
        height: 80,
        marginHorizontal: 'auto',
        textAlign: 'center'
    },
    margin: {
        margin: theme.spacing(1),
    },
    appBarBanner: {
        position: 'relative',
        height: 650,
        backgroundColor: 'rgba(10, 82, 165, 1)',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    titleBanner: {
        marginLeft: theme.spacing(2),
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 'auto',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '95%',
        '& label.Mui-focused': {
            color: 'rgb(10, 82, 165)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(10, 82, 165)',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
        },
    },
    rootList: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    width: {
        width: '95%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    rootNumberDocument: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '80%',
        },
    },
    rootLoader: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    progressLoader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    rootSnackBar: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    formControlLogin: {
        minWidth: 120,
        width: '95%',
        marginTop: 10,
        marginBottom: 30,
        color: '#fff'
    },
    formControl2Login: {
        minWidth: 120,
        width: '95%',
        marginTop: 10,
        marginBottom: 30,
        color: '#fff'
    },
    selectEmptyLogin: {
        marginTop: theme.spacing(2),
        color: '#fff'
    },
    formControlCorrespondece: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '95%',
        marginTop: 20
    },
    rootCloser: {
        height: 60,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        marginHorizontal: 'auto',
        textAlign: 'center'
    },
    speedDialCloser: {
        position: 'absolute',
        bottom: 0,
        right: '42%',
    },
    button: {
        color: '#fff',
        margin: 10,
        backgroundColor: blue[900],
    },
    input: {
        display: 'none'
    },
    rootStepper: {
        width: '100%',
    },
    buttonStepper: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    inputStartMenu: {
        '& label.Mui-focused': {
            color: 'rgb(10, 82, 165)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(10, 82, 165)',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(10, 82, 165)',
            },
        },
    },
    btnInfoOutlined: {
        color: 'rgb(23, 162, 184)',
        border: '1px solid rgb(23, 162, 184)'
    },
    btnInfo: {
        backgroundColor: 'rgb(23, 162, 184)',
        color: '#fff',
        border: 'none',
        '&:hover': {
            color: '#000'
        }
    },
    //newStyle sheet with data tables
    dialogContainer: {
        padding: theme.spacing(5, 10, 5, 10),
    },
    dialogTitle: {
        padding: theme.spacing(2, 5, 2, 5),
    },
    dialogButton: {
        padding: theme.spacing(2, 5, 0, 5),
    },
    mainContainer: {
        padding: theme.spacing(5, 5, 2, 20),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 0, 0, 0),
        },
    },
    sonContainer: {
        padding: theme.spacing(0, 5, 2, 20),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 0, 0, 0),
        },
    },
    noEntries: {
        padding: theme.spacing(5, 5, 5, 5),
    },
    searchContainer: {
        /* padding: theme.spacing(2, 2, 2, 2), */
        backgroundColor: '#fff9c4',
        borderRadius: '10px',
        border: 'solid 3px   #ffeb3b'
    },
    search: {
        padding: theme.spacing(0, 0, 1, 0),
    },
    searchIcon: {
        /* padding: theme.spacing(0, 2), */
        /*     color: secondaryColor,
            height: '100%',
            width: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', */
        color: secondaryColor,
        height: '100%'
    },
    searchIconButton: {
        backgroundColor: '#FFF7C9',
        border: `solid 3px ${primaryColor}`,
        width: '25px',
        height: '25px'
    },
    icon: {
        position: 'absoulte',
        width: '15px',
        height: '15px'
    },
    inputInput: {
        color: secondaryColor,
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default useStyles;