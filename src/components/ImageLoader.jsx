import { Grid } from '@mui/material'
import imageLoaderStyles from '../assets/css/js/imageLoaderStyles'

export default function ImageLoader() {
    const classes = imageLoaderStyles();
    return (
        <Grid container>
            <Grid item >
                <img
                    src="https://i.etsystatic.com/7434544/r/il/8c90bc/1864871145/il_1140xN.1864871145_bhwf.jpg"
                    alt="imagen de perfil"
                    className={classes.img}
                />
            </Grid>
        </Grid>
    )
}
