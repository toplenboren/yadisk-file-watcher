const initialState = {
    currentUser: {}
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload};
        case 'LOGOUT_USER':
            return {...state, currentUser: {} };
        case 'PATCH_USER':
            return {...state, currentUser: action.payload};
        default:
            return state;
    }
}