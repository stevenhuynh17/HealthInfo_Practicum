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



export default function VitalsCard(props) {
    const classes = useStyles();
    const {val} = props

    const {name,value} = val


    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h6" component="h2">
                    {value}
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button size="small">Tips</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

