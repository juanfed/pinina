import makeStyles from '@mui/styles/makeStyles';
import { Backdrop, Typography } from '@mui/material/';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';

import EditIcon from '@mui/icons-material/Edit';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useEffect, useState } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import { saveSelectedBusinessDataAction } from '../../redux/actions/adminAction';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'fixed',
        top: theme.spacing(1),
        // right: theme.spacing(2),
    },
    icons: {
        width: 400
    }
}));
export default function BusinessDial() {
    const classes = useStyles();
    const { business, selectedBussinessData } = useSelector(state => state.admin);
    const dispatch = useDispatch();
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

    const handleClickBusiness = businessData => {
        console.log(businessData)
        dispatch(saveSelectedBusinessDataAction(businessData));
    }

    return (
        <>
            {business &&
                <>
                    <Backdrop open={open} />
                    <SpeedDial
                        direction='down'
                        ariaLabel="SpeedDial openIcon example"
                        className={classes.speedDial}
                        hidden={hidden}
                        icon={<RecentActorsIcon color='secondary' openIcon={<EditIcon />} />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {business.map((i) => (
                            <SpeedDialAction
                                key={i.id}
                                icon={<RecentActorsIcon />}
                                tooltipTitle={<Typography>{i.razon}</Typography>}
                                onClick={() => handleClickBusiness(i)}
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
                </>
            }
        </>
    );
}
