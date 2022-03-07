import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import axiosClient from '../../config/AxiosClient';

export default function ListaActividadesDian({ consultData, setConsultData }) {
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
            const response = await axiosClient.get('/t_actividades_dian/DreadG');
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
                const filterData = data.filter(i => i.descripcion === description);
                if (filterData.length !== 0) {
                    setConsultData({
                        ...consultData,
                        actividad_principal: filterData[0].id,
                        actividad_principalDescripcion: description
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
                    actividad_principal: filterData[0].id,
                    actividad_principalDescripcion: filterData[0].descripcion
                });
                setDescription(filterData[0].descripcion)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.actividad_principal?.length !== 0) {
                setValue(consultData.actividad_principal)
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
            getOptionLabel={(option) => option.descripcion
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Actividades dian"
                        variant="outlined"
                    />
            }
        />
    )
}