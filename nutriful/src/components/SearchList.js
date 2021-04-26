import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListItemAvatar, Avatar, List, ListItem, Button} from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import API from "../data/API_Key";
import { DataDispatch } from "../data/Context"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SearchList(props) {
    const classes = useStyles();
    const {data} = props
    const [db, setDb] = useState({});
    const dispatch = useContext(DataDispatch)
    console.log(dispatch)

    const handleSelect = (id) => {
        let getInfo_URL = `https://api.spoonacular.com/food/ingredients/${id}/information?amount=1&unit=serving&apiKey=${API}`
        fetch(getInfo_URL)
            .then((res) => res.json())
            .then((info) => {
                console.log(info)
                db.setDb(info)
            })
            .catch((err) => {
                console.log("ERROR:", err)
                //info.nutrition.nutrients
                //info.nutrition.caloricBreakdown
            })

    }
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    data.map((result) => {
                        const {id, name, image} = result
                        return(
                            <ListItem id={id}>
                                <ListItemAvatar>
                                    <Avatar src={image} />
                                </ListItemAvatar>
                                <ListItemText primary={name}/>
                                <Button variant="contained" color="secondary" onClick={()=>handleSelect(id)}>Add</Button>
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    );
}
