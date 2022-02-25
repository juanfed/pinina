import { TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useEffect, useState } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

export default function ListaTipoDocumento({ consultData, setConsultData }) {
    const { enqueueSnackbar } = useSnackbar();
    //localState
    const [data, setData] = useState([]);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [checkValue, setCheckValue] = useState(true); //boolean state for validate load Value
    useEffect(() => {
        query();
    }, []);
    const query = async () => {
        try {
            const response = await axiosClient.get('/t_tipo_documento/DreadG');
            setData(response.data.msg);
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
    }

    useEffect(() => {        
        if (description.length !== 0) {
            const filterData = data.filter(i => i.nombre === description);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_identificacion: filterData[0].id,
                    id_tipo_identificacionDescripcion: description
                });
            }
        }
    }, [description]);
            
    useEffect(() => {
        if (value.length !== 0) {
            const filterData = data.filter(i => i.id === value);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_identificacion: filterData[0].id,
                    id_tipo_identificacionDescripcion: filterData[0].nombre
                });
                setDescription(filterData[0].nombre)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.id_tipo_identificacion?.length !== 0) {
                setValue(consultData.id_tipo_identificacion)
                setCheckValue(false);
            }
        }
    }, [consultData, checkValue]);
            

    return (
        <Autocomplete
            fullWidth
            options={data}
            inputValue={description}
            onInputChange={(event, newInputValue) => {
                setDescription(newInputValue)
            }}
            getOptionLabel={(option) => option.nombre
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Tipo documento"
                        variant="outlined"
                    />
            }
        />
    )
}