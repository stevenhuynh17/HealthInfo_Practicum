import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Patient from '../data/Patient.json'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function VitalsCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    console.log(Patient)
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    100
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button size="small">Tips</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

