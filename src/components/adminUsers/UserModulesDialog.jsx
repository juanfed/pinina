import { useState, useEffect } from 'react'
import { Dialog, Grid, Typography, Paper, IconButton, Divider } from '@material-ui/core';
import { userModulesDialogStyles } from '../../assets/css/js/userModulesDialogStyles';
import { useDispatch, useSelector } from 'react-redux';
//icons
import DeleteIcon from '@material-ui/icons/Delete';
import WhiteTable from '../tables/WhiteTable';
import { removeUserModulesAction } from '../../redux/actions/adminAction';

export default function UserModulesDialog({ dialog, closeDialog, userId }) {
    const classes = userModulesDialogStyles();
    const dispatch = useDispatch();
    const [modulesData, setModulesData] = useState([]);
    const [restringedModules, setRestringedModules] = useState([])
    const { filteredUserModules, modules } = useSelector(state => state.admin);
    useEffect(() => {
        if (filteredUserModules.length !== 0) {
            const filterModules = filteredUserModules.filter(i => i.id_usuario === userId);
            setModulesData(filterModules);
        }
    }, [filteredUserModules, userId]);

    //tableData
    const rows = [
        { id: 0, title: 'Módulo' },
        { id: 1, title: 'Privilegios' },
        { id: 2, title: 'Agregar' }
    ];
    function searchModules() {
        const unabledModules = [];
        const filter_module_1 = modulesData.filter(i => i.id_modulo === '1');
        if (filter_module_1.length === 0) {
            unabledModules.push('1');
        };
        const filter_module_2 = modulesData.filter(i => i.id_modulo === '2');
        if (filter_module_2.length === 0) {
            unabledModules.push('2');
        };
        const filter_module_3 = modulesData.filter(i => i.id_modulo === '3');
        if (filter_module_3.length === 0) {
            unabledModules.push('3');
        };
        setData(unabledModules);
    };
    useEffect(() => {
        if (modulesData.length !== 0) {
            searchModules()
        } else if (modulesData.length === 0) {
            closeDialog()
        }

    }, [modulesData]);
    function setData(unabledModules) {
        const data = unabledModules.map(i => {
            const filterModule = modules.filter(item => item.id === i);
            if (filterModule) {
                return {
                    data_0: i,
                    data_1: filterModule[0].modulo,
                    adminSwitch: true,
                    assignModulesButton: true,
                    id_usuario: userId
                }
            }
        });
        setRestringedModules(data);
    };
    useEffect(() => {
        console.log(restringedModules);
    }, [restringedModules])
    return (
        <Dialog
            open={dialog}
            onClose={() => closeDialog(false)}
            maxWidth='md'
        >
            <Grid container className={classes.rootContainer}>
                <Grid container justify='center' className={classes.titleContainer}>
                    <Grid item xs={12}>
                        <Typography
                            align='center'
                            variant='h5'
                            color='secondary'
                        >
                            Módulos del Usuario
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container
                    spacing={2} justify='center'
                    className={classes.mainContainer}
                >
                    {modulesData.map(i => (
                        <Grid item xs={3} key={i.id}>
                            <Paper
                                elevation={10}
                                className={classes.paper}
                            >
                                <Grid container
                                    alignItems='center'
                                    justify='center'
                                    className={classes.modulesContainer}
                                >
                                    <Grid item xs={10}>
                                        <Typography
                                            color='secondary'
                                            align='center'
                                        >
                                            {i.modulo}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton
                                            onClick={() => dispatch(removeUserModulesAction({
                                                id: i.id
                                            }))}
                                            size='small'
                                        >
                                            <DeleteIcon
                                                color='secondary'
                                            />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {restringedModules.length !== 0 &&
                    <Grid container
                        spacing={3}
                        justify='center'
                        className={classes.mainContainer}
                    >
                        <Grid item xs={12}>
                            <Typography
                                align='center'
                                variant='h6'
                                color='secondary'
                            >
                                Permisos a asignar
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <WhiteTable
                                tableData={restringedModules}
                                rows={rows}
                            />
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Dialog>
    )
};

