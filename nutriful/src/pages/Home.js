import React, {useReducer, createContext} from "react";
import Header from "../components/Header";
import VitalsRow from "../components/VitalsRow";
import DataTable from "../components/DataTable";
import MyResponsivePie from "../components/MyResponsivePie";
import MyResponsiveBullet from "../components/MyResponsiveBullet";
import BulletData from "../data/BulletData";
import { DataDispatch, defaultState } from "../data/Context"
import Units from "../data/Units";

function createData(name, calories, fat, carbohydrates, protein) {
    return { name, calories, fat, carbohydrates, protein };
}

const getMacros = (action) => {
    const { data } = action
    const {originalName} = data
    const {nutrients} = data.nutrition
    let result = {}
    let tableData = nutrients.filter((nutrient) => {
        return (
            nutrient.title === "Calories" ||
            nutrient.title === "Fat" ||
            nutrient.title === "Protein" ||
            nutrient.title === "Carbohydrates"
        )
    }).map((nutrient) => {
        let {name, amount} = nutrient
        name = name.toLowerCase()
        result = {...result, [name]:amount}
        return {...result, "name":originalName}
    })

    const {carbohydrates, calories, fat, protein, name} = tableData.pop()
    return createData(name, calories, fat, carbohydrates, protein)
}

const calcPie = (state, newItem) => {
    return state.pieChart.map((macro) => {
        if(macro.id === "protein") {
            macro.value += (newItem.protein * 4)
        } else if(macro.id === "carbs") {
            macro.value += (newItem.carbohydrates * 4)
        } else if(macro.id === "fats") {
            macro.value += (newItem.fat * 9)
        }
        return macro
    })
}

const reducer = (state,action) => {
    if(action.type === "ADD_ITEM") {
        let newItem = getMacros(action)
        const tableResults = [...state.table].concat(newItem)

        let pieData = calcPie(state, newItem)

        const { data } = action
        const {originalName} = data
        const {nutrients} = data.nutrition

        let blah = state.bulletChart.map((value) => {
            nutrients.forEach((nutrient) => {
                let query = `${nutrient.title} (${nutrient.unit})`

                if(value.id === query) {
                    value.measures[0] = value.measures[0] + nutrient.amount

                    if(value.measures[0] >= value.markers[0]) {
                        value.measures[0] = value.markers[0]
                    }
                }
            })
            return value
        })
        return{...state, table: tableResults, pieChart:pieData, bulletChart:blah}
    }

    if(action.type === "REMOVE_ITEM") {
        const remaining = state.table.filter((item) => {
            return item.name !== action.data[0]
        })
        return {...state, table:remaining}
    }

    if(action.type === "UPDATE_PIE") {
        console.log(state, action)
        return {...state}
    }
    return state
}

export default function Home() {
    const [state,dispatch] = useReducer(reducer,defaultState)
    console.log(state)
    return(
        <DataDispatch.Provider className="App" value={{state, dispatch}}>
            <Header />
            <VitalsRow/>
            <DataTable/>
            <div style={{height: "500px"}}>
                <MyResponsivePie data={state.pieChart}/>
            </div>
            <div style={{height: "2400px", width: "90%"}}>
                <MyResponsiveBullet data={state.bulletChart}/>
            </div>
        </DataDispatch.Provider>
    )
}