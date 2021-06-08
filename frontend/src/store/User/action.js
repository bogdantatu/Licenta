export const ActionType = {
    SET_LOGGED_USER: 'SET_LOGGED_USER'
}

export const setLoggedUser = (user) => ({
    type: ActionType.SET_LOGGED_USER,
    payload: user
})