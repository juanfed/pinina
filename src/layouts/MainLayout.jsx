import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';

// Styles
import useStyles from "../assets/css/js/styles";

// List Items
import { ListItems } from '../components/MainPage/ListItems';

// Actions
import { cleanOnAction, deleteOpenAction, saveOpenAction, RutOpenAction, AdminUserOpenAction } from "../redux/actions/MainAction";

// Clsx
import clsx from 'clsx';

// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import { ButtonBase, Grid, Menu, MenuItem, SvgIcon, useMediaQuery } from '@material-ui/core';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton } from '@material-ui/core';

// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonIcon from '@material-ui/icons/Person';

// Components
import RutUpload from './modals/rutUpload';

//icons
// import appLogo from '../assets/icons/appLogo.svg';
import PetsIcon from '@material-ui/icons/Pets';

const MainLayout = (props) => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Media Query Material UI
    const match = useMediaQuery('(min-width:768px)');

    // Styles Instance
    const classes = useStyles();

    // Redux State Extraction
    const { edit, add, clean, rut, adminuser } = useSelector(state => state.main);

    // Local State
    const [open, setOpen] = useState(match);
    const [openMenuUser, setOpenMenuUser] = useState(null);
    const [data, setData] = useState(props);

    // functions for Open Sidebar
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Use Effect for change SideBar open or close
    useEffect(() => {
        setOpen(match)
    }, [match]);

    return (
        <div className={classes.root} id="title">
            <CssBaseline />
            <AppBar position="absolute" color="primary" /* className={ clsx(classes.appBar, open && classes.appBarShift) } style={{ backgroundImage: 'linear-gradient( 90deg, #ebf8e1, #83d0f2)', borderBottomRightRadius: 20 }} */>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {
                        match ? (
                            <Typography
                                variant="h5"
                                color="secondary"
                                noWrap
                                className={classes.title}
                            >
                                {/*  <img src={appLogo} alt="pinina logo" /> */} {data.title}
                            </Typography>

                        ) : (
                            <Typography
                                variant="h6"
                                color="inherit"
                                noWrap
                            // className={classes.title + ' text-info'}
                            >
                                {data.title}
                            </Typography>
                        )
                    }

                    {
                        rut ?
                            <RutUpload /> :
                            <IconButton className="mr-2" onClick={() => dispatch(RutOpenAction())}>
                                <AddCircleIcon style={{ fontSize: 30 }} />
                            </IconButton>
                    }
                    {
                        !adminuser && (
                            <Link href="/admin/AdminUser" activeStyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}>
                                <IconButton className="mr-2" onClick={() => dispatch(AdminUserOpenAction())}>
                                    <PersonIcon style={{ fontSize: 30 }} />
                                </IconButton>
                            </Link>
                        )
                    }
                    {
                        clean && (
                            <IconButton className="mr-2" onClick={() => dispatch(cleanOnAction())}>
                                <i class="fas fa-broom"></i>
                            </IconButton>
                        )
                    }
                    {
                        edit && (
                            <IconButton className="mr-2" onClick={() => dispatch(saveOpenAction())}>
                                <SaveIcon style={{ fontSize: 30 }} />
                            </IconButton>
                        )
                    }
                    {
                        edit && (
                            <IconButton className="mr-2" onClick={() => dispatch(deleteOpenAction())}>
                                <DeleteIcon style={{ fontSize: 30 }} />
                            </IconButton>
                        )
                    }

                    <Menu
                        id="simple-menu"
                        anchorEl={openMenuUser}
                        keepMounted
                        open={Boolean(openMenuUser)}
                        onClose={() => setOpenMenuUser(null)}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem className="no-link">
                            <Link href="/" >Logout</Link>
                        </MenuItem>
                    </Menu>
                </Toolbar >
            </AppBar >
            <Drawer
                variant="permanent"
                classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
                open={open}
            >
                <div className={clsx(classes.toolbarIcon, 'shadow')} style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuOpenIcon />
                    </IconButton>
                    <ButtonBase onClick={handleDrawerClose} className="mr-3">
                    </ButtonBase>
                </div>
                <br />
                <List>
                    <ListItems />
                </List>
                <Divider />
                <MenuItem>
                    <Link href="/clientsandpets/Profile">
                        {open ?
                            (
                                <Grid container spacing={1} style={{ display: 'flex' }}>
                                    <Grid item xl={2}>
                                        <PetsIcon
                                            color='secondary'
                                        />
                                    </Grid>
                                    <Grid item xl={10}>
                                        <Typography
                                            variant='h6'
                                            color='secondary'
                                        >

                                            Mascotas/Clientes
                                </Typography>
                                    </Grid>

                                </Grid>
                            )
                            :
                            (
                                <Grid container justify='center' spacing={1} style={{ display: 'flex' }}>
                                    <Grid item xl={12}>
                                        <PetsIcon
                                            color='secondary'
                                            fontSize='large'
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Link>
                </MenuItem>
            </Drawer>
            <main className={clsx(classes.content, 'bg-white')}>
                <div className="behavior"></div>
                <div className={classes.appBarSpacer} />
                {props.children}
            </main>
        </div >
    )
}

export default MainLayout
