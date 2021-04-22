import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VitalsCard from "./VitalsCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function VitalsRow() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
                <Grid item xs>
                    <VitalsCard className={classes.paper}>xs</VitalsCard>
                </Grid>
            </Grid>
        </div>
    );
}
