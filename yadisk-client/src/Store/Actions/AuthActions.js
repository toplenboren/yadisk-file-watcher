const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
});

const logoutUser = () => ({
    type: 'LOGOUT_USER'
});

const patchUser = payload => ({
    type: 'PATCH_USER',
    payload: payload
});