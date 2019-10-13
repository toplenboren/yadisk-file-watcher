import Data from './Utils/data'

export const fetchData = (path, token) => {
    return async dispatch => {
        dispatch(_requestData());
        try {
            await Data.fetchData(path, token)
                .then(response => dispatch(_fetchData(response.data)));
        }
        catch (e) {
            console.log(e)
        }
    }
};

export const REQUEST_DATA = 'REQUEST_DATA';
const _requestData = () => ({
    type: 'REQUEST_DATA'
});

export const FETCH_DATA = 'FETCH_DATA';
const _fetchData = data => ({
    type: 'FETCH_DATA',
    payload: data
});

export const ERASE_DATA = "ERASE_DATA";
export const _eraseData = () => ({
    type: "ERASE_DATA"
});