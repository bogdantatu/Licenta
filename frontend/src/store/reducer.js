import {combineReducers} from "redux";
import reducer from "./User/reducer";


const root = combineReducers({
    user: reducer,
});

export default root;