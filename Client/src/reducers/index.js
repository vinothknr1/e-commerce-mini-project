import { combineReducers } from "redux";
import { useReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;