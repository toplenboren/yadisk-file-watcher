import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import {logoutUser} from "./../../Store/Actions/AuthActions";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "red",
        padding: 0
    }
}));

function Header(props) {
    const classes = useStyles();

    const handleClick = () => {
      props.logout()
    };

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Observer.yd
                    </Typography>
                    <Button type="submit" color="inherit" onClick={handleClick}>Выйти</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

const MapStateToProps = store => ({
    token: store.AuthReducer.token
});

const MapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(MapStateToProps, MapDispatchToProps)(Header);
