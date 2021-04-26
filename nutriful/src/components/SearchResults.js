import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {InputBase,Button} from "@material-ui/core";
import ToolbarStyles from "../styles/ToolbarStyles";
import {makeStyles} from "@material-ui/core/styles";
import API from "../data/API_Key";
import SearchList from "./SearchList";

const useSearchStyles = makeStyles(ToolbarStyles)

const fakeData = [
    {id: 19400, name: "banana chips", image: "banana-chips.jpg"},
    {id: 93779, name: "banana liqueur", image: "limoncello.jpg"},
    {id: 19318, name: "banana pudding mix", image: "vanilla-pudding.png"},
    {id: 18019, name: "banana bread", image: "quick-bread.png"},
    {id: 9040, name: "banana", image: "bananas.jpg"},
]



const SearchResults = (props) => {
    const classes = useSearchStyles();
    const [data, setData] = useState({});

    const handleSearch = () => {
        console.log("HELLO")
        let getIngredient_URL = `https://api.spoonacular.com/food/ingredients/search?query=banana&number=5&sort=calories&sortDirection=desc&apiKey=${API}`
        // fetch(getIngredient_URL)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         setData(data.results)
        //     })
        //     .catch((err) => {
        //         console.log("ERROR:", err)
        //     })
    }

    return(
        <section>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Find Ingredients
                </Button>
            </div>
            <SearchList data={fakeData}/>
        </section>

    )
}

export default SearchResults