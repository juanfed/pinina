import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
    auth: authReducer,
    main: mainReducer,
    admin: adminReducer
})