import { makeStyles } from "@material-ui/core";
import Image from "../../img/nuevofondo.jpg";

export const registerStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
       
        
    },
    toRightContainer: {
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
      backgroundAttachment:'fixed',
        
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