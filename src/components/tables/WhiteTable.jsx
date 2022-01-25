import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Grid, Checkbox } from '@material-ui/core';
import { primaryColor, secondaryColor, tableTypographyColor } from '../../assets/css/js/mainTheme';
import { Typography, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentUserSettingsAction } from '../../redux/actions/adminAction';
import { useGridSelector } from '@material-ui/data-grid';
import { SettingsPowerRounded } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        // color: secondaryColor
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    typography: {
        color: tableTypographyColor
    }
});


export default function WhiteTable({ tableData, rows }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{ borderRadius: '20px' }} elevation={5}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {rows.map(i => (
                            <StyledTableCell key={i.id}>
                                <Typography
                                    className={classes.typography}
                                    align='center'
                                    variant='body2'
                                >
                                    {i.title}
                                </Typography>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((i) => (
                        <StyledTableRow key={i.data_0}>
                            <StyledTableCell component="th" scope="row" >
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_1}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_2}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_3}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_4}
                                </Typography>
                            </StyledTableCell>
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
                            {i.adminSwitch ?
                                <StyledTableCell>
                                    <SwitchComponent
                                        initialState={i.t_adm}
                                        userId={i.id_usuario}
                                    />
                                </StyledTableCell>
                                : null}
                            {i.modulesMenu ?
                                <StyledTableCell>
                                    <ModulesMenu />
                                </StyledTableCell>
                                : null}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const SwitchComponent = ({ initialState, userId }) => {
    const [checked, setChecked] = useState(initialState);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { selectedBusinessData } = useSelector(state => state.admin)
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
    }, [])
    return (
        <Grid container justify='center' alignItems='center'>
            <Grid item>
                <Typography
                    className={classes.typography}
                >
                    No
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
                >
                    Si
                </Typography>
            </Grid>
        </Grid>
    )
}

const ModulesMenu = () => {
    const { modules } = useSelector(state => state.admin);
    const [open, setOpen] = useState(false);
    const [selectValue, setSelectValue] = useState([]);
    const [checkBoxData, setcheckBoxData] = useState([]);

    useEffect(() => {
        if (modules.length !== 0) {
            let arrayData = [];
            for (let i = 0; i < modules.length; i++) {
                arrayData.push({ ...modules[i], checkBox: false });
            };
            setSelectValue(arrayData);
        }
    }, [modules])
    const handleCheck = id => {
        let filterData = selectValue.filter(item => item.id === id);
        let filterObj = filterData[0]

        setSelectValue([{ ...selectValue, filterObj }])
    };
    return (
        <Grid container justify='center'>
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
                                    onChange={() => handleCheck(i.id)}
                                />{i.modulo}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}
