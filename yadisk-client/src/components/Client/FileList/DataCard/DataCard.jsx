import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {fetchData} from "../../../../Store/Actions/DataActions";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    card: {
        width: 275,
        height:140,
        padding: 2,
        margin: 10,
        boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.25)"
    },
    title: {
        fontSize: 14,
    },
    button: {
        marginTop: 10,
        marginLeft: "65%"
    }
});

function DataCard(props) {
    const classes = useStyles();

    var redirectButton;
    if(props.type === 'dir'){
        redirectButton = <Button className={classes.button} onClick={ () => props.fetchData(props.path, props.token)}> Перейти </Button>
    }
    else{
        redirectButton = <Typography variant="caption" component="h2"> {props.media_type} </Typography>
    }

    return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color={"textSecondary"} gutterBottom>
                        {props.type}
                    </Typography>
                    <Typography variant="h5" component="h2"> {props.name} </Typography>
                    {redirectButton}
                </CardContent>
            </Card>
    );
}

const MapStateToProps = store => ({
    token: store.AuthReducer.token,
    isFetching: store.DataReducer.isFetching,
    data: store.DataReducer.data
});

const MapDispatchToProps = dispatch => ({
    fetchData: (path, token) => dispatch(fetchData(path, token))
});

export default connect(MapStateToProps, MapDispatchToProps)(DataCard);
