import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Typography } from '@material-ui/core/';
import SpeedDial from '@material-ui/lab/SpeedDial';

import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import EditIcon from '@material-ui/icons/Edit';
import BusinessIcon from '@material-ui/icons/Business';
import { useEffect, useState } from 'react';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { useDispatch, useSelector } from 'react-redux';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
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
    const { business } = useSelector(state => state.admin);
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
            <Backdrop open={open} />
            <SpeedDial
                direction='down'
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<BusinessIcon color='secondary' openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {business.map((i) => (
                    <SpeedDialAction
                        key={i.id}
                        icon={<BusinessCenterIcon />}
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
    );
}
