import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import YDLogo from "./YD.png"

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

function Auth() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <img src={YDLogo} className={classes.avatar} height={256}/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Войти через яндекс
                </Button>
            </div>
            </Container>
        </React.Fragment>
    );
}

export default Auth;
