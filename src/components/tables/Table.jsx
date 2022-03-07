import { Grid, IconButton, Paper, TextField, Typography, Button } from "@mui/material";
//icons
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import tableStyles from "../../assets/css/js/tableStyles";
import { useState } from "react";

export default function Table({ title, description, displayEdit }) {
    const classes = tableStyles();
    const [onEdit, setOnEdit] = useState(false);
    const [displayInput, setDisplayInput] = useState(false);
    const [descriptionTable, setDescriptionTable] = useState(description);
    const [inputMemory, setInputMemory] = useState(description);
    const [inputData, setInputData] = useState('');
    const handleChange = (e) => {
        setInputData(e.target.value);
    };
    const handleEdit = () => {
        setDisplayInput(true);
        setOnEdit(true);
    };
    const handleSave = () => {
        setDescriptionTable(inputData);
        setInputMemory(inputData);
        setOnEdit(false);
        setDisplayInput(false);
    };
    const handleCancel = () => {
        setDescriptionTable(inputMemory);
        setOnEdit(false);
        setDisplayInput(false);
    };
    return <>
        <Grid container spacing={0}>
            <Grid item>
                <Paper
                    color="primary"
                    square
                    elevation={2}
                    className={classes.titleTable}
                >
                    {displayEdit ?
                        (
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Typography
                                        color='secondary'
                                    >
                                        <span>{title}</span>
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    {onEdit ?
                                        (
                                            <Grid container spacing={0}>
                                                <Grid item xs={6} xl={6}>
                                                    <IconButton
                                                        size='small'
                                                        onClick={handleSave}
                                                    >
                                                        <SaveIcon
                                                            fontSize='small'
                                                        />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item xs={6} xl={6}>
                                                    <IconButton
                                                        size='small'
                                                    >
                                                        <CancelIcon
                                                            fontSize='small'
                                                            onClick={handleCancel}
                                                        />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>

                                        )
                                        :
                                        (
                                            <IconButton
                                                size='small'
                                                onClick={handleEdit}
                                            >
                                                <EditIcon
                                                    color='secondary'
                                                    fontSize='small'
                                                />
                                            </IconButton>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        )
                        :
                        (
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item xl={12} lg={12}>
                                    <Typography
                                        color='secondary'
                                    >
                                        <span>{title}</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    }
                </Paper>
                <Paper
                    color="primary"
                    square
                    elevation={2}
                    className={classes.paperContent}
                >
                    {displayInput ?
                        (
                            <TextField
                                color='secondary'
                                name='inputData'
                                value={inputData}
                                onChange={handleChange}
                            />
                        )
                        :
                        (
                            <Typography
                                className={classes.subtitle}
                            >
                                {descriptionTable}
                            </Typography>
                        )
                    }
                </Paper>
            </Grid>
        </Grid>
    </>;
}
