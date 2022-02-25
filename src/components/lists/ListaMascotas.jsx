import { TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useEffect, useState } from 'react';
import axiosClient from '../../config/AxiosClient';

export default function ListaMascotas({ consultData, setConsultData }) {
    //localState
    const [data, setData] = useState([]);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    const [checkValue, setCheckValue] = useState(true); //boolean state for validate load Value
    useEffect(() => {
        query();
    }, []);
    const query = async () => {
        try {
            const response = await axiosClient.get('/t_mascotas/DreadG');
            setData(response.data.msg)
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
    }
    useEffect(() => {
        if (value.length === 0) {
            if (description.length !== 0) {
                const filterData = data.filter(i => i.nombre_mascota === description);
                console.log(filterData)
                if (filterData.length !== 0) {
                    setConsultData({
                        ...consultData,
                        paciente_cita: filterData[0].id_mascotas,
                        paciente_citaDescripcion: description
                    });
                }
            }
        }
    }, [description]);

    useEffect(() => {
        if (value.length !== 0) {
            console.log(value)
            console.log(data)
            const filterData = data.filter(i => i.id_mascotas === value);
            console.log(filterData)
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    paciente_cita: filterData[0].id_mascotas,
                    paciente_citaDescripcion: filterData[0].nombre_mascota
                });
                setDescription(filterData[0].nombre_mascota)
            }
        }
    }, [value, data])

    useEffect(() => {
        if (checkValue) {
            console.log(consultData)
            if (consultData?.paciente_cita?.length !== 0) {
                setValue(consultData.paciente_cita)
                setCheckValue(false);
            }
        }
        console.log(consultData)
    }, [consultData, checkValue]);

    return (
        <Autocomplete
            fullWidth
            options={data}
            inputValue={description}
            onInputChange={(event, newInputValue) => {
                setDescription(newInputValue)
            }}
            getOptionLabel={(option) => option.nombre_mascota
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Mascotas"
                        variant="outlined"
                    />
            }
        />
    )
}