import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { primaryColor, secondaryColor } from '../../assets/css/js/mainTheme';
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: primaryColor,
        color: secondaryColor,
    },
    body: {
        fontSize: 14,
        color: secondaryColor
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
});


export default function MaterialTable({ tableData, rows }) {
    const classes = useStyles();
    console.log(tableData);

    return (
        <TableContainer component={Paper} style={{ borderRadius: '20px' }} elevation={3}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {rows.map(i => (
                            <StyledTableCell key={i.id}>
                                <Typography>
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
                                <Typography>
                                    {i.data_1}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography>
                                    {i.data_2}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography >
                                    {i.data_3}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography>
                                    {i.data_4}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography>
                                    {i.data_5}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography>
                                    {i.data_6}
                                </Typography>
                            </StyledTableCell>
                            {i.data_7 ? <StyledTableCell>{i.data_7}</StyledTableCell> : null}
                            {i.data_8 ? <StyledTableCell>{i.data_8}</StyledTableCell> : null}
                            {i.data_9 ? <StyledTableCell>{i.data_9}</StyledTableCell> : null}
                            {i.data_10 ? <StyledTableCell>{i.data_10}</StyledTableCell> : null}
                            {i.data_11 ? <StyledTableCell>{i.data_11}</StyledTableCell> : null}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
