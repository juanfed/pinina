import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import axiosClient from '../../config/AxiosClient';

export default function ListaPropietarios({ consultData, setConsultData }) {
    //localState
    const [data, setData] = useState([]);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    useEffect(() => {
        query();
    }, []);
    const query = async () => {
        try {
            const response = await axiosClient.get('/t_clientes/DreadG');
            console.log(response.data)
            setData(response.data.msg)
        } catch (err) {
            if (err.response) {
                enqueueSnackbar(err.response.data.msg, { variant: 'error' })
            }
        }
    }

    useEffect(() => {
        if (description.length !== 0) {
            if (consultData?.propietario_cita?.length === 0) {
                const filterData = data.filter(i => i.primer_nombre.includes(description));
                if (filterData.length !== 0) {
                    setConsultData({
                        ...consultData,
                        propietario_cita: filterData[0].id_clientes,
                        propietario_citaDescripcion: filterData[0].primer_nombre
                    });
                    setDescription(filterData[0].primer_nombre)
                }
            }
        }
    }, [description]);

    useEffect(() => {
        if (value.length !== 0) {
            console.log(value)
            console.log(data)
            const filterData = data.filter(i => i.id_clientes === value);
            console.log(filterData)
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    paciente_cita: filterData[0].id_clientes,
                    paciente_citaDescripcion: filterData[0].primer_nombre
                });
                setDescription(filterData[0].primer_nombre)
            }
        }
    }, [value, data])

    const [checkValue, setCheckValue] = useState(true);

    useEffect(() => {
        if (checkValue) {
            if (consultData?.propietario_cita?.length !== 0) {
                setValue(consultData.propietario_cita)
                setCheckValue(false);
            }
        }
    }, [consultData, checkValue])

    return (
        <Autocomplete
            fullWidth
            options={data}
            inputValue={description}
            onInputChange={(event, newInputValue) => {
                setDescription(newInputValue)
                console.log(newInputValue)
            }}
            getOptionLabel={(option) => option.primer_nombre
            }
            renderInput={
                (params) =>
                    <TextField {...params}
                        fullWidth
                        size='small'
                        color='secondary'
                        label="Propietario"
                        variant="outlined"
                    />
            }
        />
    )
}