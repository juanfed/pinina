import { useRouter } from 'next/router';
import Image from 'next/image';
import clsx from 'clsx';

// import imageTest from '../../assets/img/ImgPrueba.jpg';

// Material UI Styles 
import useStyles from '../../assets/css/js/styles';

// Material UI Components
import { Grid, Box, Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@mui/material';

import { Skeleton } from '@mui/material';


export default function StartMenu() {

    // Styles Material UI instance 
    const classes = useStyles();

    // History Instance
    const router = useRouter();

    return <>
        <br/>
        <Box m={ 0 } p={ 1 } >
            <Grid container spacing={ 2 } className={ classes.grid }  justifyContent="flex-start" alignItems="center">
                <Grid item xl={ 12 } sm={ 12} md={ 12 } xs={ 12 }>
                    <Card className={ clsx(classes.media, 'shadow') }>
                        <CardActionArea className="shadow-sm">
                            <Grid container display="flex" justifyContent="center" alignItems="center">
                                <Grid item md={ 12 }>
                                </Grid>
                            </Grid>
                            <CardContent>
                                <Grid container display="flex" justifyContent="center" alignItems="center">
                                    <Grid item md={ 12 }>
                                        <Typography gutterBottom variant="h5" component="h2" className="text-info" style={{ textAlign: 'center' }}>
                                            Interpretacion
                                        </Typography>
                                    </Grid>
                                    <Grid item md={ 12 }>
                                        <Typography variant="body2" color="textSecondary" component="p" className="text-center" style={{ textOverflow: 'ellipsis', textAlign: 'justify' }}>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, expedita? Deleniti omnis blanditiis velit esse. Porro tenetur deserunt vel illo?
                                        </Typography>
                                    </Grid>
                                    <Grid item md={ 12 }>
                                    {/* <Image
                                        src='https://www.seguridadpublica.es/wp-content/uploads/2013/02/Testigo-1.jpg'
                                        alt="VainillaTest"
                                        width={500}
                                        height={500}
                                    /> */}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                        <CardContent className="text-center">
                            <h2 className="my-2">Contenido</h2>
                            <p>Información acerca del contenido</p>
                            <Skeleton className="mx-auto mt-2" variant="rectangular" width={ 700 } height={ 250 } />
                        </CardContent>
                        <CardActions>
                            <Grid container display="flex" justifyContent="center" alignItems="flex-end">
                                <Grid item md={ 4 } sm={ 12 } xs={ 12 } className="text-center pt-3">
                                    <Button variant="outlined" className={ classes.btnInfoOutlined }>
                                        Recorte Automatico
                                    </Button>
                                </Grid>
                                <Grid item md={ 4 } sm={ 12 } xs={ 12 }  className="text-center">
                                    <Button variant="outlined" className={ classes.btnInfoOutlined }>
                                        Recorte Manual
                                    </Button>
                                </Grid>
                                <Grid item md={ 4 } sm={ 12 } xs={ 12 }  className="text-center">
                                    <Button variant="outlined" className={ classes.btnInfo }>
                                        Procesar
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </>;
}
