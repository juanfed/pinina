import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { useState } from 'react';
//icons
import PetsIcon from '@material-ui/icons/Pets';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import AppsIcon from '@material-ui/icons/Apps';
import CancelIcon from '@material-ui/icons/Cancel';
import { secondaryColor } from '../../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteUserAction } from '../../../redux/actions/adminAction';

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
    const { onDeleteUser } = useSelector(state => state.admin)
    const classes = useStyles();
    const dispatch = useDispatch();
    const actions = [
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
            icon: onDeleteUser ? <CancelIcon /> : <DeleteIcon />,
            name: onDeleteUser ?
                <Typography>
                    Cancelar
                </Typography>
                :
                <Typography>
                    Eliminar
                </Typography>,
            id: onDeleteUser ? 3 : 2
        }
    ];

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
                dispatch(onDeleteUserAction(true));
                handleClose();
            case 3:
                dispatch(onDeleteUserAction(false));
                handleClose();
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