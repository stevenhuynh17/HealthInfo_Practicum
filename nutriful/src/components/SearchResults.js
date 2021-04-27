import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {InputBase,Button} from "@material-ui/core";
import ToolbarStyles from "../styles/ToolbarStyles";
import {makeStyles} from "@material-ui/core/styles";
import API from "../data/API_Key";
import SearchList from "./SearchList";
import { green, purple } from '@material-ui/core/colors';


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
    const [input, setInput] = useState();

    const handleSearch = () => {
        console.log(input)
        let getIngredient_URL = `https://api.spoonacular.com/food/ingredients/search?query=${input}&number=5&sort=calories&sortDirection=desc&apiKey=${API}`
        console.log(getIngredient_URL)
        fetch(getIngredient_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data.results)
            })
            .catch((err) => {
                console.log("ERROR:", err)
            })
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
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Find Food
                </Button>
                <Button variant="contained" color="primary">
                    Suggestion
                </Button>
            </div>
            <SearchList data={data}/>
        </section>

    )
}

export default SearchResults