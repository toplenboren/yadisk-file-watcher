const initialState = {
    token: undefined
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, token: action.payload};
        case 'LOGOUT_USER':
            return {...state, token: undefined };
        default:
            return state;
    }
}