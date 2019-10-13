import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        top: "auto",
        bottom: 0,
        backgroundColor: "#151515"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="caption" className={classes.title}>
                        Copyright Lamart.site 2019
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Footer;
