import makeStyles from '@mui/styles/makeStyles';
import { Backdrop, Typography } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';

//icons
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import EditIcon from '@mui/icons-material/Edit';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FaceIcon from '@mui/icons-material/Face';
import ContactsIcon from '@mui/icons-material/CloudUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router';
import { AddCloseAction, AddOpenAction, cleanOnAction, deleteOpenAction, editCloseAction, editOpenAction, saveOpenAction } from '../../redux/actions/MainAction';

const useStyles = makeStyles((theme) => ({
    /*   speedDial: {
          direction: 'reverse',
          position: 'fixed',
          left: '94%',
          bottom: '40px',
      } */
}));
export default function SonsDial(props) {
    const { setFirstSon, setSecondSon, title } = props;
    const classes = useStyles();

    //redux extraction
    const dispatch = useDispatch();
    const { edit, add, clean } = useSelector(state => state.main);

    const [actions, setActions] = useState([]);
    useEffect(() => {
        setActions(
            [
                { icon: <BubbleChartIcon />, name: <Typography>{`${title[0]}`}</Typography>, id: 0 },
                setSecondSon ? { icon: <BubbleChartIcon />, name: <Typography>{`${title[1]}`}</Typography>, id: 1 } : null,
            ]
        );
    }, [])

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheck = id => {
        switch (id) {
            case 0: setFirstSon(true);
                setCloseAction();
                break;
            case 1: setSecondSon && setSecondSon(true);
                setCloseAction();
                break;
            case 2: setFirstSon(false);
                setSecondSon && setSecondSon(false);
                setInitialActions();
                break;
            default:
        }
    }

    const setInitialActions = () => {
        setActions([
            { icon: <BubbleChartIcon />, name: <Typography>Historias Clínicas</Typography>, id: 0 },
            setSecondSon && { icon: <BubbleChartIcon />, name: <Typography>Fotos de Mascotas</Typography>, id: 1 },
        ]);
    }

    const setCloseAction = () => {
        setActions([
            { icon: <CancelIcon />, name: <Typography>Cerrar submódulo</Typography>, id: 2 },
        ])
    }
    return (
        <>
            {actions.length !== 0 &&
                <div className={classes.root}>
                    <SpeedDial
                        direction='left'
                        ariaLabel="SpeedDial openIcon example"
                        className={classes.speedDial}
                        hidden={hidden}
                        icon={<FolderIcon color='secondary' openIcon={<EditIcon />} />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                            action !== null &&
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={() => handleCheck(action.id)}
                                FabProps={{
                                    style: {
                                        color: secondaryColor,
                                        backgroundColor: primaryColor,
                                        width: 60,
                                        height: 60
                                    }
                                }}
                            />
                        ))}
                    </SpeedDial>
                </div>
            }
        </>

    );
}