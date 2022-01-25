import {
    CLOSE_CONFIRM_DELETE_DIALOG,
    DELETE_USER_ID,
    FILTERED_USER_MODULES,
    GET_BUSINESS,
    GET_BUSINESS_ADMIN_DATA,
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
    deleteUserId: null,
    deleteUserDialog: false,
    onDeleteUser: false,
    modules: [],
    userModules: [],
    filteredUserModules: [],
    userAdmin: true
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
        case ON_DELETE_EVENT:
            return {
                ...state,
                onDeleteUser: action.payload
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
        default: return state;
    }
}
