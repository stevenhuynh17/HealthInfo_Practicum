import React, {useReducer, createContext} from "react";
import Header from "../components/Header";
import VitalsRow from "../components/VitalsRow";
import DataTable from "../components/DataTable";
import MyResponsivePie from "../components/MyResponsivePie";
import MyResponsiveBullet from "../components/MyResponsiveBullet";
import BulletData from "../data/BulletData";
import PieData from "../data/PieData";
import { DataDispatch, defaultState } from "../data/Context"

const reducer = (state,action) => {

}

export default function Home() {
    const [state,dispatch] = useReducer(reducer, defaultState)
    console.log(state)
    return(
        <DataDispatch.Provider className="App" value={dispatch}>
            <Header />
            <VitalsRow/>
            <DataTable/>
            <div style={{height: "500px"}}>
                <MyResponsivePie data={PieData}/>
            </div>
            <div style={{height: "2400px", width: "90%"}}>
                <MyResponsiveBullet data={BulletData}/>
            </div>
        </DataDispatch.Provider>
    )
}