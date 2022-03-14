import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

export default function ListaTipoV({ consultData, setConsultData }) {
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
            const response = await axiosClient.get('/t_tipo_vacunas/DreadG');
            setData(response.data.msg);
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
    }

    useEffect(() => {        
        if (description.length !== 0) {
            const filterData = data.filter(i => i.tipo_vacunas === description);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_vacunas: filterData[0].id_tipo_vacunas,
                    id_tipo_vacunasDescripcion: description
                });
            }
        }
    }, [description]);
            
    useEffect(() => {
        if (value.length !== 0) {
            const filterData = data.filter(i => i.id_tipo_vacunas === value);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_vacunas: filterData[0].id_tipo_vacunas,
                    id_tipo_vacunasDescripcion: filterData[0].tipo_vacunas
                });
                setDescription(filterData[0].tipo_vacunas)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.id_tipo_vacunas?.length !== 0) {
                setValue(consultData.id_tipo_vacunas)
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
            getOptionLabel={(option) => option.tipo_vacunas
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Tipo vacunas"
                        variant="outlined"
                    />
            }
        />
    )
}