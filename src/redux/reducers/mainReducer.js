import {
    ADDADMIN_CLOSE,
    ADDADMIN_OPEN,
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
    RUT_CLOSE,
    RUT_ON,
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
    SEARCH_USERBUSINESS_SUCCESS,
    SEARCH_USERBUSINESSPROFILE_SUCCESS,
    SEARCH_USERBUSINESSPROFILE_ERROR,
    SEARCH_USERBUSINESS_ERROR,
    GET_COUNTRIES
} from "../types";

const initialState = {
    data: {},
    loading: false,
    error: '',
    edit: false,
    addAdmin: false,
    addProfile: false,
    deleteData: false,
    save: false,
    clean: false,
    cleanSwitch: false,
    rut: false,
    adminuser: false,
    message: {
        code: '',
        msg: ''
    },
    adminEmpresas: [],
    adminUsuariosEmpresas: [],
    profileUsuariosEmpresas: [],
    countries: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_OPEN:
            return {
                ...state,
                edit: true,
                add: false
            }
        case EDIT_CLOSE:
            return {
                ...state,
                edit: false
            }
        case ADDADMIN_OPEN:
            return {
                ...state,
                addAdmin: true,
                edit: false,
                clean: false
            }
        case ADDADMIN_CLOSE:
            return {
                ...state,
                addAdmin: false
            }
        case ADDPROFILE_OPEN:
            return {
                ...state,
                addProfile: true
            }
        case ADDPROFILE_CLOSE:
            return {
                ...state,
                addProfile: false
            }
        case DELETE_OPEN:
            return {
                ...state,
                deleteData: true
            }
        case DELETE_CLOSE:
            return {
                ...state,
                deleteData: false
            }
        case SAVE_OPEN:
            return {
                ...state,
                save: true
            }
        case SAVE_CLOSE:
            return {
                ...state,
                save: false
            }
        case CLEAN_OPEN:
            return {
                ...state,
                clean: true
            }
        case CLEAN_CLOSE:
            return {
                ...state,
                clean: false
            }
        case CLEAN_ON:
            return {
                ...state,
                cleanSwitch: true
            }
        case CLEAN_OFF:
            return {
                ...state,
                cleanSwitch: false
            }
        case RUT_ON:
            return {
                ...state,
                rut: true
            }
        case RUT_CLOSE:
            return {
                ...state,
                rut: false
            }
        case UPLOADRUT_START_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.data.code,
                    msg: action.payload.data.msg
                }
            }
        case UPLOADRUT_START_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case UPLOADCCOMERCIO_START_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.data.code,
                    msg: action.payload.data.msg
                }
            }
        case UPLOADCCOMERCIO_START_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case UPLOADMMERCANTIL_START_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.data.code,
                    msg: action.payload.data.msg
                }
            }
        case UPLOADMMERCANTIL_START_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case ADMINUSER_ON:
            return {
                ...state,
                adminuser: true
            }
        case ADMINUSER_CLOSE:
            return {
                ...state,
                adminuser: false
            }
        case CONSULT_BUSINESS_SUCCESS:
            return {
                ...state,
                adminEmpresas: action.payload.data.adminEmpresas
            }
        case CONSULT_BUSINESS_ERROR:
            return {
                ...state,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case SEARCH_USERBUSINESS_SUCCESS:
            return {
                ...state,
                adminUsuariosEmpresas: action.payload.data.adminUsuariosEmpresas
            }
        case SEARCH_USERBUSINESS_ERROR:
            return {
                ...state,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case SEARCH_USERBUSINESSPROFILE_SUCCESS:
            return {
                ...state,
                profileUsuariosEmpresas: action.payload.data.profileUsuariosEmpresas
            }
        case SEARCH_USERBUSINESSPROFILE_ERROR:
            return {
                ...state,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
}