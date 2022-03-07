import { useState, useEffect } from "react";
import axiosClient from "../../config/AxiosClient";
import { useSnackbar } from "notistack";

import { Dialog, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText } from "@mui/material";

const Codigo_ubicacion_geograficaModal = ({ modalCodigo_ubicacion_geografica, setModalCodigo_ubicacion_geografica, consultData, setConsultData }) => {

    // Snackbar Instance
    const { enqueueSnackbar } = useSnackbar();
    
    //Local State
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const query = async() => {
            try {
                const response = await axiosClient.get('/t_ubicaciones_geograficas/readG');
            
                setData(response.data.msg)
            } catch(err) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
        if (modalCodigo_ubicacion_geografica) {
            query();
        }
    }, [ modalCodigo_ubicacion_geografica ]);

    const handleClick = (id) => {
        setConsultData({
            ...consultData,
            codigo_ubicacion_geografica: id
        });
        setModalCodigo_ubicacion_geografica(false);
    }

return (
    <Dialog open={ modalCodigo_ubicacion_geografica } onClose={ () => setModalCodigo_ubicacion_geografica(false) } maxWidth={ 'md' } fullWidth={ true }>
        <DialogTitle className="text-center">Codigo_ubicacion_geografica</DialogTitle>
        <DialogContent>
            <List>
                { data.length > 0 && (
                    <>
                        { data.map( item => (
                            <>
                                <Divider />
                                <ListItem button key={ Object.values(item)[0] } onClick={ () => handleClick(item.codigo_dane) }>
                                    <ListItemText className="text-center" primary={ Object.values(item)[0] } />
                                    <ListItemText className="text-center" primary={ Object.values(item)[1] } />
                                    <ListItemText className="text-center" primary={ Object.values(item)[2] } />
                                    <ListItemText className="text-center" primary={ Object.values(item)[3] } />
                                    <ListItemText className="text-center" primary={ Object.values(item)[4] } />
                                    <ListItemText className="text-center" primary={ Object.values(item)[5] } />
                                </ListItem>
                            </>
                        )) }
                    </>
                ) }
            </List>
        </DialogContent>
    </Dialog>
)
}

export default Codigo_ubicacion_geograficaModal;