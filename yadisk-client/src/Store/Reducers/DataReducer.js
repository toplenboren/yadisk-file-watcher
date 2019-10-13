const initialState = {
    isFetching: false,
    data: null
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_DATA':
            return {...state, isFetching: true, news: null};
        case 'FETCH_DATA':
            return {...state, isFetching: false, data: action.payload};
        case 'ERASE_DATA':
            return {...state, isFetching: false, data: null};
        default:
            return state;
    }
}