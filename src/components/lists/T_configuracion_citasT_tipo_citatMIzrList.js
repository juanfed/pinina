import { TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useEffect, useState } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

export default function ListaTipoCita({ consultData, setConsultData }) {
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
            const response = await axiosClient.get('/t_tipo_cita/DreadG');
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
                const filterData = data.filter(i => i.tipo_cita === description);
                if (filterData.length !== 0) {
                    setConsultData({
                        ...consultData,
                        id_tipo_cita: filterData[0].id_tipo_cita,
                        id_tipo_citaDescripcion: description
                    });
                }
            }
        }
    }, [description]);
            
    useEffect(() => {
        if (value.length !== 0) {
            const filterData = data.filter(i => i.id_tipo_cita === value);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_tipo_cita: filterData[0].id_tipo_cita,
                    id_tipo_citaDescripcion: filterData[0].tipo_cita
                });
                setDescription(filterData[0].tipo_cita)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.id_tipo_cita?.length !== 0) {
                setValue(consultData.id_tipo_cita)
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
            getOptionLabel={(option) => option.tipo_cita
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Tipo cita"
                        variant="outlined"
                    />
            }
        />
    )
}