//Get Y.Token function
export const loginUser = (token) => {
    return dispatch => {
        dispatch(_loginUser(token));
    }
};

//Delete Y.Token action
export const logoutUser = () => {
    return dispatch => {
        dispatch(_logoutUser());
    }
};

//Get Y.Token action
const _loginUser = token => ({
    type: 'LOGIN_USER',
    payload: token
});

//Delete Y.Token action
const _logoutUser = () => ({
    type: 'LOGOUT_USER'
});
