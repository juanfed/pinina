import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import axiosClient from '../../config/AxiosClient';

export default function ListaTipoDocument2({ consultData, setConsultData }) {
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
        if (value.length === 0) {
            if (description.length !== 0) {
                const filterData = data.filter(i => i.nombre === description);
                if (filterData.length !== 0) {
                    setConsultData({
                        ...consultData,
                        id_tipo_documento: filterData[0].id,
                        id_tipo_documentoDescripcion: description
                    });
                }
            }
        }
    }, [description]);
            
    useEffect(() => {
        if (value.length !== 0) {
            const filterData = data.filter(i => i.id === value);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_documento: filterData[0].id,
                    id_tipo_documentoDescripcion: filterData[0].nombre
                });
                setDescription(filterData[0].nombre)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.id_tipo_documento?.length !== 0) {
                setValue(consultData.id_tipo_documento)
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