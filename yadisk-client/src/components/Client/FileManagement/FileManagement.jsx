import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {fetchData} from "../../../Store/Actions/DataActions";
import connect from "react-redux/es/connect/connect";
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
    }
});

function FileManagement(props) {
    const classes = useStyles();

    return (
        <Button className={classes.button} onClick={ () => props.fetchData("/", props.token)}> В корень </Button>
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

export default connect(MapStateToProps, MapDispatchToProps)(FileManagement);
