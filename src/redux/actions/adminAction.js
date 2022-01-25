import axios from "axios";
import axiosClient from "../../config/AxiosClient";
import {
    CLOSE_CONFIRM_DELETE_DIALOG,
    DELETE_USER_ID,
    FILTERED_USER_MODULES,
    GET_BUSINESS,
    GET_BUSINESS_ADMIN_DATA,
    GET_BUSINESS_STANDARD_DATA,
    GET_MODULES,
    GET_USERS_BUSINESS_BY_ID,
    GET_USERS_BUSINESS_DATA,
    GET_USER_MODULES,
    ON_DELETE_EVENT,
    OPEN_CONFIRM_DELETE_DIALOG,
    SAVE_CURRENT_USERDATA_SETTINGS,
    SAVE_FILTERED_USERS_BY_BUSINESS,
    SAVE_SELECTED_BUSINESS_DATA,
    SAVE_USER_SETTINGS_HISTORY,
    SAVE_USER_TYPE,
    USER_SEARCH
} from "../types";

export const getBusinessByUserAction = (userId) => async (dispatch) => {
    try {
        const response = await axiosClient.post('/listBusiness', userId);
        dispatch({
            type: GET_BUSINESS,
            payload: response.data.businessUser
        })

    } catch (error) {
        console.log(error)
    }
};

export const getBusinessAdminAction = userId => async dispatch => {
    try {
        const response = await axiosClient.post('/admin/userConex', userId);
        console.log(response.data)
        dispatch({
            type: GET_BUSINESS_ADMIN_DATA,
            payload: response.data.adminUserConex
        })

    } catch (error) {
        console.log(error)
    }
};

export const saveSelectedBusinessDataAction = data => async dispatch => {
    dispatch({
        type: SAVE_SELECTED_BUSINESS_DATA,
        payload: data
    })
}

export const getBusinessStandardAction = userId => async dispatch => {
    try {
        const response = await axiosClient.post('/login/listBusinessRestri', userId);
        dispatch({
            type: GET_BUSINESS_STANDARD_DATA,
            payload: response.data.listBusiness[0]
        })
    } catch (error) {
        console.log(error);
    }
};

export const getUsersBusinessAction = () => async dispatch => {
    try {
        const response = await axiosClient.get('/admin/userBusiness');
        dispatch({
            type: GET_USERS_BUSINESS_DATA,
            payload: response.data.adminUserBusiness
        })
    } catch (error) {
        console.log(error);
    }
}

export const getUsersBusinessByIdAction = (usersData) => async dispatch => {
    try {
        dispatch({
            type: GET_USERS_BUSINESS_BY_ID,
            payload: usersData
        })
    } catch (error) {
        console.log(error);
    }
}

export const saveFilteredUsersByBusinessAction = data => async dispatch => {
    dispatch({
        type: SAVE_FILTERED_USERS_BY_BUSINESS,
        payload: data
    })
};

export const setUserAccessAction = userData => async () => {
    try {
        const response = await axiosClient.post('/admin/createUserBusiness', userData);
        return response.data
    } catch (e) {
        console.log(e);
        return e.response.data
    }
}

export const saveCurrentUserSettingsAction = userData => async dispatch => {
    dispatch({
        type: SAVE_CURRENT_USERDATA_SETTINGS,
        payload: userData
    })
};

export const searchUserAction = data => async dispatch => {
    if (data.correo) {
        try {
            const response = await axiosClient.post('/admin/searchForCorreo', data);
            dispatch({
                type: USER_SEARCH,
                payload: response.data.searchForCorreo
            })
            return response.data
        } catch (e) {
            console.log(e);
            return e.response.data
        }
    } else {
        try {
            const response = await axiosClient.post('/admin/searchForDocument', data);
            dispatch({
                type: USER_SEARCH,
                payload: response.data.searchForDocument
            })
            return response.data
        } catch (e) {
            console.log(e);
            return e.response.data
        }
    }
};

export const removeUserBusinessAction = userId => async () => {
    try {
        const response = await axiosClient.post(`remove/userBusiness/`, userId);
        return response.data
    } catch (e) {
        console.log(e);
        return e.response.data
    };
};

export const saveUserSettingsHistoryAction = (data) => async dispatch => {
    dispatch({
        type: SAVE_USER_SETTINGS_HISTORY,
        payload: data
    })
};

export const confirmDeleteAction = (id) => async dispatch => {
    console.log(id)
    dispatch({
        type: DELETE_USER_ID,
        payload: id
    })
    dispatch({
        type: OPEN_CONFIRM_DELETE_DIALOG
    })
};

export const closeConfirmDeleteDialogAction = (id) => async dispatch => {
    dispatch({
        type: CLOSE_CONFIRM_DELETE_DIALOG
    });
};

export const onDeleteUserAction = (state) => async dispatch => {
    dispatch({
        type: ON_DELETE_EVENT,
        payload: state
    });
};

export const getModulesAction = () => async dispatch => {
    try {
        const response = await axiosClient.get('/admin/modulesSearch');
        dispatch({
            type: GET_MODULES,
            payload: response.data.profileModulosBusqueda
        })
    }
    catch (e) {
        console.log(e);
    }
};

export const getUserModulesAction = () => async dispatch => {
    try {
        const response = await axiosClient.get('/admin/userModules');
        dispatch({
            type: GET_USER_MODULES,
            payload: response.data.adminUserModules
        })
    }
    catch (e) {
        console.log(e);
    }
};

export const saveFilteredUserModulesAction = userData => async dispatch => {
    dispatch({
        type: FILTERED_USER_MODULES,
        payload: userData
    })
};

export const saveUserTypeAction = userData => async dispatch => {
    dispatch({
        type: SAVE_USER_TYPE,
        payload: userData
    })
};

