import React from 'react';
import { withStyles, makeStyles, Button, Grid, IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { primaryColor, secondaryColor, tableTypographyColor } from '../../assets/css/js/mainTheme';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
    confirmDeleteAction,
    confirmDeleteProfileAction
} from '../../redux/actions/adminAction';
//icons
import RefreshIcon from '@material-ui/icons/Refresh';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: primaryColor,
        // color: secondaryColor,
    },
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
    },
    lvlAccountTypography: {
        color: secondaryColor,
        fontWeight: 'bolder'
    }
});


export default function AdminTable({ tableData, rows, setModulesDialog }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(tableData);

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
                            <StyledTableCell>
                                <Typography
                                    className={classes.typography}
                                    variant='body2'
                                    align='center'
                                >
                                    {i.data_5}
                                </Typography>
                            </StyledTableCell>
                            {i.data_6 &&
                                < StyledTableCell >
                                    <Typography
                                        className={classes.lvlAccountTypography}
                                        variant='body2'
                                        align='center'
                                    >
                                        {i.data_6}
                                    </Typography>
                                </StyledTableCell>
                            }
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
                                    <Grid container justify='center'>
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
                            {i.removeUserProfile &&
                                <StyledTableCell>
                                    <Grid container justify='center'>
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
                                    <Grid container justify='center'>
                                        <Grid item>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => setModulesDialog(true, i.id_usuario)}
                                            >
                                                <Typography align='center' color='secondary' variant='body2'>
                                                    Más información
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                            {i.updateUser &&
                                <StyledTableCell>
                                    <Grid container justify='center'>
                                        <Grid item>
                                            <IconButton
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => setModulesDialog(true, i.id_usuario)}
                                            >
                                                <RefreshIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            }
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
