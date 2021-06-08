import { ActionType } from './action'

const STATE = {
    loggedUser: null
}

const userReducer = (state = STATE, action) => {
    switch (action.type) {
        case ActionType.SET_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;