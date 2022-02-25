import { LOGIN_START, LOGIN_START_SUCCESS, LOGIN_START_ERROR, CONSULT_COUNTRIES_SUCCESS, CONSULT_COUNTRIES_ERROR, REGISTER_START, REGISTER_START_SUCCESS, REGISTER_START_ERROR, SET_FORGOT_PASSWORD_MODAL } from "../types";
import { ADD_CLOSE, ADD_OPEN, CLEAN_CLOSE, CLEAN_OFF, CLEAN_ON, CLEAN_OPEN, DELETE_CLOSE, DELETE_OPEN, EDIT_CLOSE, EDIT_OPEN, SAVE_CLOSE, SAVE_OPEN, SON_CLOSE, SON_OPEN } from "../types";

const initialState = {
    user: {
        id: '73'
    },
    loading: false,
    message: {
        code: '',
        msg: ''
    },
    ubicaciones_geograficas: [],
    forgotPasswordModal: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case LOGIN_START_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.data.code,
                    msg: action.payload.data.msg
                },
                user: action.payload.data.user
            }
        case LOGIN_START_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case CONSULT_COUNTRIES_SUCCESS:
            return {
                ...state,
                ubicaciones_geograficas: action.payload.data.paises
            }
        case CONSULT_COUNTRIES_ERROR:
            return {
                ...state,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case REGISTER_START_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.data.code,
                    msg: action.payload.data.msg.f_createusuregister
                }
            }
        case REGISTER_START_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    code: action.payload.code,
                    msg: action.payload.msg
                }
            }
        case SET_FORGOT_PASSWORD_MODAL:
            return {
                ...state,
                forgotPasswordModal: action.payload
            }
        default:
            return state;
    }
}