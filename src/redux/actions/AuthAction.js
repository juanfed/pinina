import axiosClient from "../../config/AxiosClient";
import { LOGIN_START, LOGIN_START_ERROR, LOGIN_START_SUCCESS, REGISTER_START, REGISTER_START_SUCCESS, REGISTER_START_ERROR, CONSULT_COUNTRIES_SUCCESS, CONSULT_COUNTRIES_ERROR, SET_FORGOT_PASSWORD_MODAL } from "../types"

export const loginAction = (userInfo) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const login = await axiosClient.post('/login/loginPinina', userInfo);
        if (login.data.code === 1) {
            // Dispatch
            localStorage.setItem('token', login.data.user.tokenGenerado);
            dispatch(loginStartSuccess(login));
            return login.data
        }
    } catch (error) {
        dispatch(loginStartError(error.response.data));
        return error.response.data
    }

}

const loginStart = () => ({
    type: LOGIN_START
});

const loginStartSuccess = (data) => ({
    type: LOGIN_START_SUCCESS,
    payload: data
});

const loginStartError = (error) => ({
    type: LOGIN_START_ERROR,
    payload: error
});

// Regitro
export function RegisterUser(userInfoR) {
    return async (dispatch) => {
        dispatch(registerStart());
        try {
            const register = await axiosClient.post('/register/create', userInfoR);
            if (register.data.code === 1) {
                // Dispatch
                dispatch(registerStartSuccess(register));
            }
        } catch (error) {
            dispatch(registerStartError(error.response.data));
        }
    }
}

const registerStart = () => ({
    type: REGISTER_START
});

const registerStartSuccess = (data) => ({
    type: REGISTER_START_SUCCESS,
    payload: data
});

const registerStartError = (error) => ({
    type: REGISTER_START_ERROR,
    payload: error
});

// Registro Querys
export function ConsultCountries() {
    return async (dispatch) => {
        try {
            const ubicaciones_geograficas = await axiosClient.get('/register/paises');
            if (ubicaciones_geograficas.data.code === 0) {
                // Dispatch
                dispatch(countriesSuccess(ubicaciones_geograficas))
            }
        } catch (error) {
            dispatch(countriesError(error.response.data));
        }
    }
}

const countriesSuccess = (data) => ({
    type: CONSULT_COUNTRIES_SUCCESS,
    payload: data
});

const countriesError = (error) => ({
    type: CONSULT_COUNTRIES_ERROR,
    payload: error
});

export const genRegCodeAction = (userData) => async () => {
    try {
        const response = await axiosClient.post('/generate-code-register', userData);
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

export const verifyRegCodeAction = (userData) => async () => {
    try {
        const response = await axiosClient.post('/verify-code-register', userData);
        return response.data
    }
    catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

export const setForgotPasswordModal = (state) => dispatch => {
    dispatch({
        type: SET_FORGOT_PASSWORD_MODAL,
        payload: state
    })
};

export const genPassCodeAction = (userData) => async () => {
    try {
        const response = await axiosClient.post('/generate-code-password', userData);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

export const verifyPassCodeAction = (userData) => async () => {
    try {
        const response = await axiosClient.post('/verify-code-password', userData);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

export const updatePassCodeAction = (userData) => async () => {
    try {
        const response = await axiosClient.patch('/update-password', userData);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}