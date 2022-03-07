import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { primaryColor, secondaryColor, tableTypographyColor } from '../../assets/css/js/mainTheme';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
    confirmDeleteAction,
    confirmDeleteProfileAction
} from '../../redux/actions/adminAction';
//icons
import RefreshIcon from '@mui/icons-material/Refresh';

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
                                    <Grid container justifyContent='center'>
                                        <Grid item>
                                            <IconButton
                                                variant='outlined'
                                                color='secondary'
                                                onClick={() => setModulesDialog(true, i.id_usuario)}
                                                size="large">
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
