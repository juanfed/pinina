import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Grid, Checkbox, Button, IconButton, TableFooter, TablePagination } from '@mui/material';
import { primaryColor, tableTypographyColor } from '../../assets/css/js/mainTheme';
import { Typography, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import {
    confirmDeleteAction,
    confirmDeleteProfileAction,
    createUserModulesAction,
    getUpdateAdminStateAction,
    saveCurrentModulesDataAction,
    saveCurrentUserSettingsAction,
    saveUpdateAdminDataAction,
    setModulesAction,
    setSwitchAdminStateAction,
    setUserAccessAction
} from '../../redux/actions/adminAction';
//icons
import SaveIcon from '@mui/icons-material/Save';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
// Snackbar
import { useSnackbar } from "notistack";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#FFF7C9',
        borderTop: 'solid 1px   #ffeb3b',
        borderBottom: 'solid 1px   #ffeb3b'
    },
    body: {
        fontSize: 14,
        borderTop: 'solid 1px  #ffeb3b',
        borderBottom: 'solid 1px  #ffeb3b',
        /*  borderLeft: 'solid 1px  #ffeb3b' */

    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#FFF7C9',
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    main: {
        border: 'solid 3px  #ffeb3b',
        borderRadius: '20px'
    },
    table: {
        minWidth: 500,
    },
    typography: {
        color: tableTypographyColor,
    }
});

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

//component for actions for pagination table
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
                size="large">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                size="large">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                size="large">
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
                size="large">
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

export default function WhiteTable(props) {
    const {
        tableData,
        rows,
        handleDisplayModules,
        handleMoreInfo,
        handleClick,
        handleEdit,
        handleDelete,
        handleSelect
    } = props;
    const { switchAdminState, selectedBusinessData } = useSelector(state => state.admin);
    const classes = useStyles();
    const dispatch = useDispatch();
    //localdata manage
    const data = tableData;
    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    /* const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage); */

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = e => {
        console.log('hola')
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };
    return <>
        <TableContainer component={Paper} className={classes.main} elevation={5}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {rows.map(i => (
                            <StyledTableCell key={i.id}>
                                <Typography
                                    className={classes.typography}
                                    align='center'
                                    variant='body1'
                                >
                                    {i.title}
                                </Typography>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : data
                    ).map((i) => (
                        <StyledTableRow key={i.data_0} onClick={() => handleClick && handleClick(i.data_0, i.data_3)}>
                            <StyledTableCell component="th" scope="row" >
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_1}
                                </Typography>
                            </StyledTableCell>
                            {i.data_2 &&
                                <StyledTableCell >
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_2}
                                    </Typography>
                                </StyledTableCell>
                            }
                            {i.data_3 &&
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_3}
                                    </Typography>
                                </StyledTableCell>
                            }
                            {i.data_4 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_4}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.modulesMenu ?
                                <StyledTableCell>
                                    <ModulesMenu id={i.data_0} />
                                </StyledTableCell>
                                : null}
                            {i.data_5 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_5}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_6 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_6}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_7 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_7}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_8 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_8}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_9 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_9}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_10 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_10}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.data_11 ?
                                <StyledTableCell>
                                    <Typography
                                        className={classes.typography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_11}
                                    </Typography>
                                </StyledTableCell>
                                : null}
                            {i.removeUser &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => dispatch(confirmDeleteAction(i.data_0))}
                                            >
                                                <Typography align='center' color='secondary' variant='body2'>
                                                    <b>Eliminar</b>
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.edit &&
                                <StyledTableCell>
                                    {/*  <Grid container justify='center'>
                                        <Grid item> */}
                                    <Button
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        color='secondary'
                                        onClick={() => handleEdit(i)}
                                    >
                                        <Typography align='center' color='secondary' variant='body2'>
                                            <b>Editar</b>
                                        </Typography>
                                    </Button>
                                    {/*         </Grid>
                                    </Grid> */}
                                </StyledTableCell>
                            }
                            {i.delete &&
                                <StyledTableCell>
                                    {/*  <Grid container justify='center'>
                                        <Grid item> */}
                                    <Button
                                        fullWidth
                                        variant='outlined'
                                        size='small'
                                        color='secondary'
                                        onClick={() => handleDelete(i.data_0)}
                                    >
                                        <Typography align='center' color='secondary' variant='body2'>
                                            <b>Eliminar</b>
                                        </Typography>
                                    </Button>
                                    {/*         </Grid>
                                    </Grid> */}
                                </StyledTableCell>
                            }
                            {i.removeUserProfile &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => dispatch(confirmDeleteProfileAction(i.id_usuario))}
                                            >
                                                <Typography align='center' color='secondary' variant='body2'>
                                                    <b>Eliminar</b>
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.moreInfo &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => handleMoreInfo(i.id_usuario)}
                                            >
                                                <Typography align='center' color='secondary' variant='body2'>
                                                    Más información
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.select &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => handleSelect(i)}
                                            >
                                                <Typography align='center' color='secondary' variant='body2'>
                                                    Seleccionar
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.adminSwitch &&
                                <StyledTableCell>
                                    <SwitchComponent
                                        initialState={i.t_adm}
                                        userId={i.id_usuario}
                                        moduleId={i.data_0}
                                    />
                                </StyledTableCell>
                            }
                            {i.updateUser &&
                                <StyledTableCell>
                                    <SaveDataComponent userId={i.id_usuario} />
                                </StyledTableCell>
                            }
                            {i.assignButton &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item xs={10}>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                fullWidth
                                                onClick={handleDisplayModules}
                                            >
                                                <Typography
                                                    variant='body2'
                                                    align='center'
                                                >
                                                    Agregar
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.assignModulesButton &&
                                <StyledTableCell>
                                    <Grid container justifyContent='center'>
                                        <Grid item xs={10}>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                fullWidth
                                                onClick={() => dispatch(setModulesAction({
                                                    id_usuario: i.id_usuario,
                                                    id_modulo: i.data_0,
                                                    id_empresa: selectedBusinessData.id_empresa,
                                                }, switchAdminState))}
                                            >
                                                <Typography
                                                    variant='body2'
                                                    align='center'
                                                >
                                                    Asignar Permisos
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Grid container justifyContent='flex-end'>
            <Grid item>
                <TablePagination
                    style={{
                        border: 'none'
                    }}
                    elevation={0}
                    rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
                    colSpan={3}
                    count={tableData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'Filas por página' },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </Grid>
        </Grid>
    </>;
}

//component for adminUsers Module
const SwitchComponent = ({ initialState, userId, moduleId }) => {
    const [checked, setChecked] = useState(initialState);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { selectedBusinessData, switchAdminState, updateAdminData } = useSelector(state => state.admin)
    const handleChange = ({ target }) => {
        setChecked(target.checked);
        dispatch(saveCurrentUserSettingsAction({
            id_usuario: userId,
            t_adm: target.checked,
            t_restri: !target.checked,
            id_empresa: selectedBusinessData.id_empresa,
        }));
    };
    useEffect(() => {
        dispatch(saveCurrentUserSettingsAction({
            id_usuario: userId,
            t_adm: false,
            t_restri: !initialState,
            id_empresa: selectedBusinessData.id_empresa,
        }));
    }, []);
    useEffect(() => {
        const data = switchAdminState.map(i => {
            if (i.id_modulo === moduleId) {
                return {
                    ...i,
                    t_adm: checked
                }
            }
            return i
        })
        dispatch(setSwitchAdminStateAction(data));
        if (updateAdminData.length !== 0) {
            const newData = updateAdminData.map(i => {
                if (i.id_usuario === userId) {
                    return {
                        ...i,
                        t_adm: checked,
                        t_restri: !checked
                    };
                }
                return i;
            });
            dispatch(getUpdateAdminStateAction(newData));
        }
    }, [checked]);
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography
                    className={classes.typography}
                    variant='body2'
                >
                    Restringido
                </Typography>
            </Grid>
            <Grid item>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Typography
                    className={classes.typography}
                    variant='body2'
                >
                    Administrador
                </Typography>
            </Grid>
        </Grid>
    );
};

//component for manage modules in adminUsersmodule
const ModulesMenu = ({ id }) => {
    const { modules, currentUserDataSettings } = useSelector(state => state.admin);
    const [selectValue, setSelectValue] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (modules.length !== 0) {
            const arrayData = [];
            for (let i = 0; i < modules.length; i++) {
                arrayData.push({ ...modules[i], checkBox: false });
            };
            setSelectValue(arrayData);
        }
    }, [modules]);
    const handleCheck = (e, id) => {
        const newData = selectValue.map(i => {
            if (i.id === id) {
                return {
                    ...i,
                    checkBox: e.target.checked
                };
            };
            return i
        });
        setSelectValue(newData);
    };
    useEffect(() => {
        if (selectValue.length !== 0) {
            const saveData = selectValue.map(i => {
                if (i.checkBox === true) {
                    return {
                        id_usuario: id,
                        id_modulo: i.id,
                        t_adm: currentUserDataSettings.t_adm,
                        t_restri: !currentUserDataSettings.t_adm,
                        id_empresa: currentUserDataSettings.id_empresa
                    }
                }
            });
            dispatch(saveCurrentModulesDataAction(saveData));
        };
    }, [selectValue]);

    useEffect(() => {
        if (currentUserDataSettings.length !== 0) {
            if (selectValue.length !== 0) {
                const saveData = selectValue.map(i => {
                    if (i.checkBox === true) {
                        return {
                            id_modulo: i.id,
                            id_usuario: id,
                            t_adm: currentUserDataSettings.t_adm,
                            t_restri: !currentUserDataSettings.t_adm,
                            id_empresa: currentUserDataSettings.id_empresa
                        }
                    }
                });
                dispatch(saveCurrentModulesDataAction(saveData));
            };
        }
    }, [currentUserDataSettings])

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={12}>
                <FormControl
                    size='small'
                    fullWidth
                    color='secondary'
                >
                    <InputLabel>Módulos</InputLabel>
                    <Select
                        multiple
                        value={selectValue}
                    >
                        {selectValue.map(i => (
                            <MenuItem
                                key={i.id}
                                value={i.id}
                            >
                                <Checkbox
                                    checked={i.checkBox}
                                    onChange={(e) => handleCheck(e, i.id)}
                                />{i.modulo}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

//component for update info by users in admin Module
const SaveDataComponent = ({ userId }) => {
    const { updateAdminData } = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const handleSaveUser = () => {
        const filteredData = updateAdminData.filter(i => i.id_usuario === userId);
        dispatch(saveUpdateAdminDataAction(filteredData[0], true));
    }
    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <Button
                    size='small'
                    variant='outlined'
                    color='secondary'
                    startIcon={<SaveIcon />}
                    onClick={handleSaveUser}
                >
                    <Typography>Guardar</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}
