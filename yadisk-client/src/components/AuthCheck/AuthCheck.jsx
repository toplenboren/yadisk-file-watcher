import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {loginUser, logoutUser} from "../../Store/Actions/AuthActions";
import connect from "react-redux/es/connect/connect";

class AuthCheck extends Component {

    componentDidMount() {
        var token = /access_token=([^&]+)/.exec(this.props.location.hash)[1];
        this.props.loginUser(token)
    }

    render() {
        return (
            <React.Fragment>
                <Redirect to={"/app"}/>
            </React.Fragment>
        );
    }
}

function MapStateToProps(store) {
    return {
        token: store.AuthReducer.token
    }
}

const MapDispatchToProps = dispatch => ({
    loginUser: (token) => dispatch(loginUser(token))
});

export default connect(MapStateToProps, MapDispatchToProps)(AuthCheck);

