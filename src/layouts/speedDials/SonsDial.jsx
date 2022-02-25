import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Typography } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

//icons
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import EditIcon from '@material-ui/icons/Edit';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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