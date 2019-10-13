import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: 275,
        height:100,
        padding: 2,
        margin: 10,
        boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.25)"
    },
    title: {
        fontSize: 14,
    },
});

function DataCard(props) {
    const classes = useStyles();
    return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color={"textSecondary"} gutterBottom> {props.type} </Typography>
                    <Typography variant="h5" component="h2"> {props.name} </Typography>
                </CardContent>
            </Card>
    );
}

export default DataCard;
