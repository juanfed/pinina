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

const initialState = {
    businessAdminData: {},
    business: [],
    selectedBusinessData: {},
    usersBusiness: [],
    usersbyBusiness: [],
    filteredUsers: [],
    currentUserDataSettings: {},
    userSettingsHistory: [],
    userSearch: [],
    updateAdminButton: false,
    deleteUserId: null,
    deleteUserDialog: false,
    deleteAdminButton: false,
    modules: [],
    userModules: [],
    filteredUserModules: [],
    userProfileModules: [],
    adminUserModules: [],
    userAdmin: '',
    currentModulesData: [],
    createUserModulesRes: {},
    switchAdminState: [
        { id_modulo: '1', t_adm: false },
        { id_modulo: '2', t_adm: false },
        { id_modulo: '3', t_adm: false },
    ],
    deleteProfileModule: false,
    deleteProfileDialog: false,
    updateAdminData: [],
    updateAdmin: {},
    updateAdminConfirmation: false,
    updateModules: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BUSINESS:
            return {
                ...state,
                business: action.payload
            }
        case GET_BUSINESS_ADMIN_DATA:
            return {
                ...state,
                business: action.payload
            }
        case SAVE_SELECTED_BUSINESS_DATA:
            return {
                ...state,
                selectedBusinessData: action.payload
            }
        case GET_USERS_BUSINESS_DATA:
            return {
                ...state,
                usersBusiness: action.payload
            }
        case GET_USERS_BUSINESS_BY_ID:
            return {
                ...state,
                usersbyBusiness: action.payload
            }
        case SAVE_FILTERED_USERS_BY_BUSINESS:
            return {
                ...state,
                filteredUsers: action.payload
            }
        case SAVE_CURRENT_USERDATA_SETTINGS:
            return {
                ...state,
                currentUserDataSettings: action.payload
            }
        case SAVE_USER_SETTINGS_HISTORY:
            return {
                ...state,
                userSettingsHistory: action.payload
            }
        case USER_SEARCH:
            return {
                ...state,
                userSearch: [action.payload]
            }
        case DELETE_USER_ID:
            return {
                ...state,
                deleteUserId: action.payload
            }
        case OPEN_CONFIRM_DELETE_DIALOG:
            return {
                ...state,
                deleteUserDialog: true
            }
        case CLOSE_CONFIRM_DELETE_DIALOG:
            return {
                ...state,
                deleteUserDialog: false
            }
        case DISPLAY_DELETE_ADMIN_BUTTON:
            return {
                ...state,
                deleteAdminButton: action.payload
            }
        case DISPLAY_UPDATE_BUTTON_ADMIN:
            return {
                ...state,
                updateAdminButton: action.payload
            }
        case GET_MODULES:
            return {
                ...state,
                modules: action.payload
            }
        case GET_USER_MODULES:
            return {
                ...state,
                userModules: action.payload
            }
        case FILTERED_USER_MODULES:
            return {
                ...state,
                filteredUserModules: action.payload
            }
        case SAVE_USER_TYPE:
            return {
                ...state,
                userAdmin: action.payload
            }
        case SAVE_CURRENT_MODULES_DATA:
            return {
                ...state,
                currentModulesData: action.payload
            }
        case CREATE_USER_MODULES:
            return {
                ...state,
                createUserModulesRes: action.payload
            }
        case SAVE_SWITCH_ADMIN_STATE_ACTION:
            return {
                ...state,
                switchAdminState: action.payload
            }
        case DELETE_PROFILE_MODULES:
            return {
                ...state,
                deleteProfileModule: action.payload
            }
        case OPEN_CONFIRM_DELETE_PROFILE_DIALOG:
            return {
                ...state,
                deleteProfileDialog: action.payload
            }
        case ADMIN_USER_MODULES:
            return {
                ...state,
                adminUserModules: action.payload
            }
        case SET_MODULES_PROFILE:
            return {
                ...state,
                userProfileModules: action.payload
            }
        case UPDATE_ADMIN:
            return {
                ...state,
                updateAdmin: action.payload
            }
        case GET_UPDATE_ADMIN_STATE:
            return {
                ...state,
                updateAdminData: action.payload
            }
        case SET_UPD_ADM_CONFIRMATION:
            return {
                ...state,
                updateAdminConfirmation: action.payload
            }
        case CLEAN_USER_PROFILE_MODULES_DATA:
            return {
                ...state,
                userProfileModules: []
            }
        case UPDATE_MODULES:
            return {
                ...state,
                updateModules: action.payload
            }
        default: return state;
    }
}
