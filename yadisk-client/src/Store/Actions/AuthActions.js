//Get Y.Token function
export const loginUser = () => {
    return dispatch => {
        dispatch(_loginUser("AgAEA7qi1JtcAAXrSAfWyjuLtkCtiZ6ClAQXChM"));
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
