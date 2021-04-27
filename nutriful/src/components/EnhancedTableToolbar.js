import {fade, lighten, makeStyles} from "@material-ui/core/styles";
import {IconButton, InputBase, Toolbar, Tooltip, Typography} from "@material-ui/core";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";
import React, {useContext} from "react";
import ToolbarStyles from "../styles/ToolbarStyles";
import {DataDispatch} from "../data/Context";


const useToolbarStyles = makeStyles(ToolbarStyles)

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, selected } = props;
    const { state, dispatch } = useContext(DataDispatch)
    console.log(selected)
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Diet
                </Typography>

            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={() => {
                        dispatch({type:"REMOVE_ITEM", data:selected})
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar