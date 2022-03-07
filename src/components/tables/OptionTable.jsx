//material UI components
import {
    Grid,
    Menu,
    MenuItem,
    Paper,
    Typography,
    Button
} from "@mui/material";
//useStyles
import tableStyles from "../../assets/css/js/tableStyles";
//icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
//hooks
import { useState } from "react";

export default function OptionTable({ displayEdit, setDisplayEdit }) {
    const classes = tableStyles();
    const [optionsMenu, setOptionsMenu] = useState(null);
    const handleEditMenu = () => {
        setDisplayEdit(true);
        setOptionsMenu(null);
    };
    const handleMenuOpen = ({ currentTarget }) => {
        setOptionsMenu(currentTarget);
    };
    const handleMenuClose = () => {
        setOptionsMenu(null);
    };
    const handleSaveChanges = () => {
        setOptionsMenu(null);
        setDisplayEdit(false)
    }
    return <>
        <Grid container spacing={0}>
            <Grid item>
                <Paper
                    color="primary"
                    square
                    elevation={2}
                    className={classes.titleTable}
                >
                    <Typography
                        color='secondary'
                    >
                        <span>Opciones</span>
                    </Typography>
                </Paper>
                <Paper
                    color="primary"
                    square
                    elevation={2}
                    // className={classes.papel}
                >
                    <Grid container alignItems='center' justifyContent='center' className={classes.paperContent}>
                        <Grid item xs={12}>


                            <Button
                                color='secondary'
                                size='small'
                                variant='outlined'
                                className={classes.button}
                                startIcon={<MoreVertIcon />}
                                onClick={handleMenuOpen}
                            >
                                <Typography
                                    color='secondary'
                                >
                                    Acciones
                                </Typography>
                            </Button>

                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
        </Grid>
        <Menu
            anchorEl={optionsMenu}
            open={Boolean(optionsMenu)}
            onClose={handleMenuClose}
        >
            <MenuItem>
                Adjuntar Exámen
            </MenuItem>
            <MenuItem>
                Ver exámenes
            </MenuItem>
            <MenuItem>
                Ver Fórmula
            </MenuItem>
            {displayEdit ?
                (
                    <MenuItem
                        onClick={handleSaveChanges}
                    >
                        Guardar Cambios
                    </MenuItem>
                )
                :
                (
                    <MenuItem
                        onClick={handleEditMenu}
                    >
                        Editar
                    </MenuItem>
                )
            }

            <MenuItem>
                Eliminar
            </MenuItem>
            <MenuItem>
                Imprimir
            </MenuItem>
        </Menu>
    </>;
}
