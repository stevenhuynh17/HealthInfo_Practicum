import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VitalsCard from "./VitalsCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "15px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const fakeData = [
    {name: "Height", value: "161\ncm"},
    {name: "Weight", value: "56\nkg"},
    {name:"Sys Blood Pressure", value: "105.34 mmHg"},
    {name:"Dys Blood Pressure", value: "78.5 mmHg"},
    {name:"LDL", value: "100 mg/dL"},
    {name:"HDL", value: "40 mg/dL"},
    {name:"Total Cholesterol", value: "150 mg/dL"}
]

export default function VitalsRow() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    fakeData.map((val) => {
                        return(
                            <Grid item xs>
                                <VitalsCard className={classes.paper} val={val}>xs</VitalsCard>
                            </Grid>
                            )
                    })
                }
            </Grid>
        </div>
    );
}
