import React, {useReducer, createContext} from "react";
import Header from "../components/Header";
import VitalsRow from "../components/VitalsRow";
import DataTable from "../components/DataTable";
import MyResponsivePie from "../components/MyResponsivePie";
import MyResponsiveBullet from "../components/MyResponsiveBullet";
import BulletData from "../data/BulletData";
import { DataDispatch, defaultState } from "../data/Context"

function createData(name, calories, fat, carbohydrates, protein) {
    return { name, calories, fat, carbohydrates, protein };
}

const reducer = (state,action) => {

    if(action.type === "ADD_ITEM") {
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
        const newItem = createData(name, calories, fat, carbohydrates, protein)
        const tableResults = [...state.table].concat(newItem)
        let pieData = state.pieChart.map((macro) => {
            if(macro.id === "protein") {
                macro.value += (newItem.protein * 4)
            } else if(macro.id === "carbs") {
                macro.value += (newItem.carbohydrates * 4)
            } else if(macro.id === "fats") {
                macro.value += (newItem.fat * 9)
            }
            return macro
        })
        return{...state, table: tableResults, pieChart:pieData}
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
                <MyResponsiveBullet data={BulletData}/>
            </div>
        </DataDispatch.Provider>
    )
}