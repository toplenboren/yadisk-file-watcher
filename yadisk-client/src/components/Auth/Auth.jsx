import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import YDLogo from "./YD.png"
import connect from "react-redux/es/connect/connect";
import {loginUser} from "./../../Store/Actions/AuthActions";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: "50%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 25,
    },
    submit: {
        backgroundColor: "red",
    },
}));

function Auth(props) {
    const classes = useStyles();

    const handleClick = () => {
        props.login();
    };

    const isLoggedIn = () => {
        return props.token !== undefined
    };

    if (isLoggedIn()) {
        return (
            <React.Fragment>
                {<Redirect to="/app"/>}
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <img src={YDLogo} className={classes.avatar} height={256}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                        >
                            Войти через яндекс
                        </Button>
                    </div>
                </Container>
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
    login: () => dispatch(loginUser())
});

export default connect(MapStateToProps, MapDispatchToProps)(Auth);

