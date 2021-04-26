import { createContext} from "react";

export const defaultState = {
    user: {},
    table: {},
    searchResults: {},
    pieChart: {},
    bulletChart: {}
}

export const DataDispatch = createContext(defaultState)