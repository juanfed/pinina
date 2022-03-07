import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react';
import { useSnackbar } from "notistack";
import axiosClient from '../../config/AxiosClient';

export default function ListaUbicaciones({ consultData, setConsultData }) {
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
            const response = await axiosClient.get('/t_ubicaciones_geograficas/DreadG');
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
                        id_pais: filterData[0].id_codigo,
                        id_paisDescripcion: description
                    });
                }
            }
        }
    }, [description]);
            
    useEffect(() => {
        if (value.length !== 0) {
            const filterData = data.filter(i => i.id_codigo === value);
            if (filterData.length !== 0) {
                setConsultData({
                    ...consultData,
                    id_pais: filterData[0].id_codigo,
                    id_paisDescripcion: filterData[0].descripcion
                });
                setDescription(filterData[0].descripcion)
            }
        }
    }, [value, data]);
    
    useEffect(() => {
        if (checkValue) {
            if (consultData?.id_pais?.length !== 0) {
                setValue(consultData.id_pais)
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
                        label="Ubicaciones geograficas"
                        variant="outlined"
                    />
            }
        />
    )
}