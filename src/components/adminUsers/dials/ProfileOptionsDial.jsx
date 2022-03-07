import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState, useEffect } from 'react';
//icons
import PetsIcon from '@mui/icons-material/Pets';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import AppsIcon from '@mui/icons-material/Apps';
import CancelIcon from '@mui/icons-material/Cancel';
import { secondaryColor } from '../../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteUserAction, setDeleteProfileModuleAction } from '../../../redux/actions/adminAction';

const useStyles = makeStyles((theme) => ({
    speedDial: {

        top: theme.spacing(1),
        left: theme.spacing(2),
    },
    icons: {
        width: 400
    },
    dial: {
        width: 100
    },
    fabIcons: {
        color: secondaryColor
    },
    toolTips: {
        backgroundColor: 'white'
    },
    dialFab: {
        width: 300,
        borderRadius: '25px',
        backgroundColor: '#fff',
        '&:hover': { backgroundColor: '#fff' },
    },
    appIcon: {
        width: 40
    }
}));
export default function ProfileOptionsDial({ setProfileDialog, handleDeleteUser }) {
    const { deleteProfileModule } = useSelector(state => state.admin)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [actions, setActions] = useState([
        {
            icon: <InfoIcon />,
            name:
                <Typography>
                    Información
                </Typography>,
            id: 0
        },
        {
            icon: <AddIcon />,
            name:
                <Typography>
                    Añadir
                </Typography>,
            id: 1
        },
        {
            icon: <DeleteIcon />,
            name:
                <Typography>
                    Eliminar
                </Typography>,
            id: 2
        }
    ]);

    useEffect(() => {
        if (deleteProfileModule) {
            setActions([
                {
                    icon: <InfoIcon />,
                    name:
                        <Typography>
                            Información
                        </Typography>,
                    id: 0
                },
                {
                    icon: <AddIcon />,
                    name:
                        <Typography>
                            Añadir
                        </Typography>,
                    id: 1
                },
                {
                    icon: <CancelIcon />,
                    name:
                        <Typography>
                            Cancelar
                        </Typography>,
                    id: 3
                }
            ])
        } else {
            setActions([
                {
                    icon: <InfoIcon />,
                    name:
                        <Typography>
                            Información
                        </Typography>,
                    id: 0
                },
                {
                    icon: <AddIcon />,
                    name:
                        <Typography>
                            Añadir
                        </Typography>,
                    id: 1
                },
                {
                    icon: <DeleteIcon />,
                    name:
                        <Typography>
                            Eliminar
                        </Typography>,
                    id: 2
                }
            ])
        }
    }, [deleteProfileModule])

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClickMenu = idButton => {
        switch (idButton) {
            case 1:
                setProfileDialog(true);
                handleClose();
                break;
            case 2:
                dispatch(setDeleteProfileModuleAction(true));
                handleClose();
                break;
            case 3:
                dispatch(setDeleteProfileModuleAction(false));
                handleClose();
                break;
            default: handleClose();
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <SpeedDial
                direction='right'
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<Dial classes={classes.appIcon} title='Perfiles' />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{ className: classes.dialFab }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.id}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleClickMenu(action.id)}
                        FabProps={{
                            style: {
                                color: secondaryColor,
                                backgroundColor: '#ffff',
                                width: 50,
                                height: 50
                            }
                        }}
                        tooltipPlacement='bottom'
                    />
                ))}
            </SpeedDial>
        </>
    );
};

const Dial = ({ classes, title }) =>
    <>
        <AppsIcon color='secondary' fontSize='large' />
        <Typography
            style={{ marginLeft: '5px' }}
            color='secondary'
            variant='h5'
        >
            {title}
        </Typography>
    </>