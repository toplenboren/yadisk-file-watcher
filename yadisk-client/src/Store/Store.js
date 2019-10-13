import {combineReducers, createStore, applyMiddleware} from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    AuthReducer,
});

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));