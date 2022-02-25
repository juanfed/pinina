import axiosClient from "../../config/AxiosClient";
import {
    ADMIN_USER_MODULES,
    CLEAN_USER_PROFILE_MODULES_DATA,
    CLOSE_CONFIRM_DELETE_DIALOG,
    CREATE_USER_MODULES,
    DELETE_PROFILE_MODULES,
    DELETE_USER_ID,
    DISPLAY_DELETE_ADMIN_BUTTON,
    DISPLAY_UPDATE_BUTTON_ADMIN,
    FILTERED_USER_MODULES,
    GET_BUSINESS,
    GET_BUSINESS_ADMIN_DATA,
    GET_BUSINESS_STANDARD_DATA,
    GET_MODULES,
    GET_UPDATE_ADMIN_STATE,
    GET_USERS_BUSINESS_BY_ID,
    GET_USERS_BUSINESS_DATA,
    GET_USER_MODULES,
    ON_DELETE_EVENT,
    OPEN_CONFIRM_DELETE_DIALOG,
    OPEN_CONFIRM_DELETE_PROFILE_DIALOG,
    SAVE_CURRENT_MODULES_DATA,
    SAVE_CURRENT_USERDATA_SETTINGS,
    SAVE_FILTERED_USERS_BY_BUSINESS,
    SAVE_SELECTED_BUSINESS_DATA,
    SAVE_SWITCH_ADMIN_STATE_ACTION,
    SAVE_USER_SETTINGS_HISTORY,
    SAVE_USER_TYPE,
    SET_MODULES_PROFILE,
    SET_UPD_ADM_CONFIRMATION,
    UPDATE_ADMIN,
    UPDATE_MODULES,
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
    };
};

export const getUsersBusinessAction = () => async dispatch => {
    try {
        const response = await axiosClient.get('/admin/userBusiness');
        dispatch({
            type: GET_USERS_BUSINESS_DATA,
            payload: response.data.adminUserBusiness
        });
    } catch (error) {
        console.log(error);
    };
};

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

export const setUserAccessAction = userData => async dispatch => {
    try {
        const response = await axiosClient.post('/admin/createUserBusiness', userData);
        dispatch(getUsersBusinessAction());
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

export const displayUpdateButtonAdminAction = state => async dispatch => {
    dispatch({
        type: DISPLAY_UPDATE_BUTTON_ADMIN,
        payload: state
    })
}

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

export const displayDeleteButtonAdminAction = (state) => async dispatch => {
    dispatch({
        type: DISPLAY_DELETE_ADMIN_BUTTON,
        payload: state
    });
};

export const getModulesAction = () => async dispatch => {
    try {
        const response = await axiosClient.get('/admin/modulesSearch');
        console.log(response.data)
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

export const saveCurrentModulesDataAction = modulesData => async dispatch => {
    dispatch({
        type: SAVE_CURRENT_MODULES_DATA,
        payload: modulesData
    })
};

export const createUserModulesAction = modulesData => async () => {
    try {
        const response = await axiosClient.post('/admin/createUserModules', modulesData);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
};
export const setModulesAction = (moduleData, switchAdminState) => async (dispatch) => {
    const filteredModuleStatus = switchAdminState.filter(i => i.id_modulo === moduleData.id_modulo);
    const req = {
        id_usuario: moduleData.id_usuario,
        id_modulo: moduleData.id_modulo,
        id_empresa: moduleData.id_empresa,
        t_adm: filteredModuleStatus[0].t_adm,
        t_restri: !filteredModuleStatus[0].t_adm,
    }
    try {
        const response = await axiosClient.post('/admin/createUserModules', req);
        if (response) {
            dispatch(getUserModulesAction());
        }
        return response.data
    } catch (e) {
        console.log(e)
    }
};
export const setSwitchAdminStateAction = (state) => async dispatch => {
    dispatch({
        type: SAVE_SWITCH_ADMIN_STATE_ACTION,
        payload: state
    });
};
export const removeUserModulesAction = profileId => async dispatch => {
    try {
        const res = await axiosClient.post('/remove/profile', profileId);
        if (res) {
            dispatch(getUserModulesAction());
            return res.data
        }
    } catch (e) {
        console.log(e);
    };
};
export const setDeleteProfileModuleAction = state => async dispatch => {
    dispatch({
        type: DELETE_PROFILE_MODULES,
        payload: state
    })
};

export const confirmDeleteProfileAction = (id) => async dispatch => {
    console.log(id)
    dispatch({
        type: DELETE_USER_ID,
        payload: id
    })
    dispatch({
        type: OPEN_CONFIRM_DELETE_PROFILE_DIALOG,
        payload: true
    })
};

export const setConfirmProfileDialogAction = state => async dispatch => {
    dispatch({
        type: OPEN_CONFIRM_DELETE_PROFILE_DIALOG,
        payload: state
    });
};

export const setUserModulesAction = modulesProfile => async dispatch => {
    dispatch({
        type: SET_MODULES_PROFILE,
        payload: modulesProfile
    });
};

export const cleanUserProfileModulesDataAction = () => async dispatch => {
    dispatch({
        type: CLEAN_USER_PROFILE_MODULES_DATA
    })
}

export const setAdminUserModulesAction = (data) => async dispatch => {
    dispatch({
        type: ADMIN_USER_MODULES,
        payload: data
    });
};

export const saveUpdateAdminDataAction = (data, stateDialog) => async dispatch => {
    dispatch({
        type: UPDATE_ADMIN,
        payload: data
    });
    dispatch({
        type: SET_UPD_ADM_CONFIRMATION,
        payload: stateDialog
    });
};

export const getUpdateAdminStateAction = data => async dispatch => {
    dispatch({
        type: GET_UPDATE_ADMIN_STATE,
        payload: data
    });
};

export const deleteUserProfileAction = userData => async () => {
    try {
        const res = await axiosClient.post('remove/profile_all', userData);
        return res.data
    } catch (e) {

    }
};

export const updateModulesAction = state => dispatch => {
    dispatch({
        type: UPDATE_MODULES,
        payload: state
    })
};

export const loadModulesByUserAction = data => dispatch => {
    dispatch({
        type: GET_MODULES,
        payload: data
    })
}

