import axiosClient from "../../config/AxiosClient";
//
import {
    ADDADMIN_OPEN,
    ADDADMIN_CLOSE,
    ADDPROFILE_OPEN,
    ADDPROFILE_CLOSE,
    CLEAN_CLOSE,
    CLEAN_OFF,
    CLEAN_ON,
    CLEAN_OPEN,
    DELETE_CLOSE,
    DELETE_OPEN,
    EDIT_CLOSE,
    EDIT_OPEN,
    SAVE_CLOSE,
    SAVE_OPEN,
    RUT_ON,
    RUT_CLOSE,
    ADMINUSER_ON,
    ADMINUSER_CLOSE,
    UPLOADRUT_START_SUCCESS,
    UPLOADRUT_START_ERROR,
    UPLOADCCOMERCIO_START_SUCCESS,
    UPLOADCCOMERCIO_START_ERROR,
    UPLOADMMERCANTIL_START_SUCCESS,
    UPLOADMMERCANTIL_START_ERROR,
    CONSULT_BUSINESS_SUCCESS,
    CONSULT_BUSINESS_ERROR,
    SEARCH_USERBUSINESSPROFILE_SUCCESS,
    SEARCH_USERBUSINESSPROFILE_ERROR,
    SEARCH_USERBUSINESS_SUCCESS,
    SEARCH_USERBUSINESS_ERROR,
    GET_COUNTRIES,
    SEARCH_OPEN,
    SEARCH_CLOSE
} from "../types"
import { ADD_CLOSE, ADD_OPEN, SON_CLOSE, SON_OPEN } from "../types"

// Edit Open and Close
export function editOpenAction() {
    return (dispatch) => {
        dispatch(editOpen());
    }
}

const editOpen = () => ({
    type: EDIT_OPEN
});

export function editCloseAction() {
    return (dispatch) => {
        dispatch(editClose());
    }
}

const editClose = () => ({
    type: EDIT_CLOSE
});

// Add Open and Close
export function AdminUserOpenAction() {
    return (dispatch) => {
        dispatch(AdminUserOpen());
    }
}

const AdminUserOpen = () => ({
    type: ADMINUSER_ON
});

export function AdminUserCloseAction() {
    return (dispatch) => {
        dispatch(AdminUserClose());
    }
}

const AdminUserClose = () => ({
    type: ADMINUSER_CLOSE
});

export function RutOpenAction() {
    return (dispatch) => {
        dispatch(RutOpen());
    }
}

const RutOpen = () => ({
    type: RUT_ON
});

export function RutCloseAction() {
    return (dispatch) => {
        dispatch(RutClose());
    }
}

const RutClose = () => ({
    type: RUT_CLOSE
});

export function AddAdminOpenAction() {
    return (dispatch) => {
        dispatch(AddAdminOpen());
    }
}

const AddAdminOpen = () => ({
    type: ADDADMIN_OPEN
});

export function AddAdminCloseAction() {
    return (dispatch) => {
        dispatch(AddAdminClose());
    }
}

const AddAdminClose = () => ({
    type: ADDADMIN_CLOSE
});
//
export function AddProfileOpenAction() {
    return (dispatch) => {
        dispatch(AddProfileOpen());
    }
}

const AddProfileOpen = () => ({
    type: ADDPROFILE_OPEN
});

export function AddProfileCloseAction() {
    return (dispatch) => {
        dispatch(AddProfileClose());
    }
}

const AddProfileClose = () => ({
    type: ADDPROFILE_CLOSE
});

// Save Open and Close
export function saveOpenAction() {
    return (dispatch) => {
        dispatch(saveOpen());
    }
}

const saveOpen = () => ({
    type: SAVE_OPEN
});

export function saveCloseAction() {
    return (dispatch) => {
        dispatch(saveClose());
    }
}

const saveClose = () => ({
    type: SAVE_CLOSE
});

// Delete Open and Close
export function deleteOpenAction() {
    return (dispatch) => {
        dispatch(deleteOpen());
    }
}

const deleteOpen = () => ({
    type: DELETE_OPEN
});

export function deleteCloseAction() {
    return (dispatch) => {
        dispatch(deleteClose());
    }
}

const deleteClose = () => ({
    type: DELETE_CLOSE
});

// Clean Open and Close
export function cleanOpenAction() {
    return (dispatch) => {
        dispatch(cleanOpen());
    }
}

const cleanOpen = () => ({
    type: CLEAN_OPEN
});

export function cleanCloseAction() {
    return (dispatch) => {
        dispatch(cleanClose());
    }
}

const cleanClose = () => ({
    type: CLEAN_CLOSE
});

// Clean On and Off
export function cleanOnAction() {
    return (dispatch) => {
        dispatch(cleanOn());
    }
}

const cleanOn = () => ({
    type: CLEAN_ON
});

export function cleanOffAction() {
    return (dispatch) => {
        dispatch(cleanOff());
    }
}

const cleanOff = () => ({
    type: CLEAN_OFF
});

// Upload PDF's

export function UploadRut(file) {
    return async (dispatch) => {
        try {
            const rut = await axiosClient.post('/empresa/cargarRut', file);
            dispatch(uploadRutSuccess(rut));
        } catch (error) {
            console.log(error)
            dispatch(uploadRutError(error));
        }
    }
}

const uploadRutSuccess = (data) => ({
    type: UPLOADRUT_START_SUCCESS,
    payload: data
});

const uploadRutError = (error) => ({
    type: UPLOADRUT_START_ERROR,
    payload: error
});
//
export function UploadCComercio(file) {
    return async (dispatch) => {
        try {
            const ccomercio = await axiosClient.post('/cargarCertificadoExistenciaRepresentacionLegal', file);
            console.log(ccomercio)
            dispatch(uploadCComercioSuccess(ccomercio));
        } catch (error) {
            console.log(error)
            dispatch(uploadCComercioError(error));
        }
    }
}

const uploadCComercioSuccess = (data) => ({
    type: UPLOADCCOMERCIO_START_SUCCESS,
    payload: data
});

const uploadCComercioError = (error) => ({
    type: UPLOADCCOMERCIO_START_ERROR,
    payload: error
});
//
export function UploadMMercantil(file) {
    return async (dispatch) => {
        try {
            const mmercantil = await axiosClient.post('/archivoMatriculamercantil', file);
            console.log(mmercantil)
            dispatch(uploadMMercantilSuccess(mmercantil));
        } catch (error) {
            console.log(error)
            dispatch(uploadMMercantilError(error));
        }
    }
}

const uploadMMercantilSuccess = (data) => ({
    type: UPLOADMMERCANTIL_START_SUCCESS,
    payload: data
});

const uploadMMercantilError = (error) => ({
    type: UPLOADMMERCANTIL_START_ERROR,
    payload: error
});
//
export function ConsultBusinessAction() {
    return async (dispatch) => {
        try {
            const business = await axiosClient.get('/admin/business');
            // Dispatch
            dispatch(businessSuccess(business))
        } catch (error) {
            dispatch(businessError(error.response.data));
        }
    }
}

const businessSuccess = (data) => ({
    type: CONSULT_BUSINESS_SUCCESS,
    payload: data
});

const businessError = (error) => ({
    type: CONSULT_BUSINESS_ERROR,
    payload: error
});
//
export function SearchUserBusinnessAction() {
    return async (dispatch) => {
        try {
            const searchUserBusiness = await axiosClient.get('/admin/userSearch');
            // Dispatch
            dispatch(serachUserBusinessSuccess(searchUserBusiness))
        } catch (error) {
            dispatch(searchUserBusinessError(error.response.data));
        }
    }
}

const serachUserBusinessSuccess = (data) => ({
    type: SEARCH_USERBUSINESS_SUCCESS,
    payload: data
});

const searchUserBusinessError = (error) => ({
    type: SEARCH_USERBUSINESS_ERROR,
    payload: error
});
//
export function SearchUserBusinnessActionProfile() {
    return async (dispatch) => {
        try {
            const searchUserBusiness = await axiosClient.get('/profile/userSearch');
            // Dispatch
            dispatch(serachUserBusinessProfileSuccess(searchUserBusiness))
        } catch (error) {
            dispatch(searchUserBusinessProfileError(error.response.data));
        }
    }
}

const serachUserBusinessProfileSuccess = (data) => ({
    type: SEARCH_USERBUSINESSPROFILE_SUCCESS,
    payload: data
});

const searchUserBusinessProfileError = (error) => ({
    type: SEARCH_USERBUSINESSPROFILE_ERROR,
    payload: error
});

export const getCountriesAction = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('register/paises');
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data.paises
        });
    } catch (error) {
        return [];
    }
};


// wizard

export function AddOpenAction() {
    return (dispatch) => {
        dispatch(AddOpen());
    }
}

const AddOpen = () => ({
    type: ADD_OPEN
});

export function AddCloseAction() {
    return (dispatch) => {
        dispatch(AddClose());
    }
}

const AddClose = () => ({
    type: ADD_CLOSE
});

export const searchOpenAction = () => dispatch => dispatch({ type: SEARCH_OPEN });

export const searchCloseAction = () => dispatch => dispatch({ type: SEARCH_CLOSE });


// Delete Open and Close

// Clean Open and Close




// Clean On and Off

export function sonOpenAction() {
    return (dispatch) => {
        dispatch(sonOpen());
    }
}


const sonOpen = () => ({
    type: SON_OPEN
});

export function sonCloseAction() {
    return (dispatch) => {
        dispatch(sonClose());
    }
}

const sonClose = () => ({
    type: SON_CLOSE
});