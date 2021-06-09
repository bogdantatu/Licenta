import {combineReducers} from "redux";
import reducer from "./User/reducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const root = combineReducers({
    user: reducer,
});

export default persistReducer(persistConfig, root);