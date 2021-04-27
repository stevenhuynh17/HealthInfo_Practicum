import { createContext} from "react";
import PieData from "./PieData";
import BulletData from "./BulletData"

const Patient = {
    "Age": 23,
    "Gender": "Male"
}

function createData(name, calories, fat, carbohydrates, protein) {
    return { name, calories, fat, carbohydrates, protein };
}

let rows = [
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Honeycomb', 408, 3.2, 87, 6.5),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Jelly Bean', 375, 0.0, 94, 0.0),
    // createData('KitKat', 518, 26.0, 65, 7.0),
    // createData('Lollipop', 392, 0.2, 98, 0.0),
    // createData('Marshmallow', 318, 0, 81, 2.0),
    // createData('Nougat', 360, 19.0, 9, 37.0),
    // createData('Oreo', 437, 18.0, 63, 4.0),
];

let calcMacros = () => {
    let calorieSum = 0
    let proteinSum = 0
    let fatSum = 0
    let carbSum = 0
    rows.forEach((row) => {
        calorieSum += row.calories
        proteinSum += row.protein
        fatSum += row.fat
        carbSum += row.carbohydrates
    })
    console.log(calorieSum, proteinSum, fatSum, carbSum)
    return { carbSum, proteinSum, fatSum }
}

export const defaultState = {
    user: {},
    table: rows,
    searchResults: {},
    pieChart: PieData(calcMacros()),
    bulletChart: BulletData()
}

export const DataDispatch = createContext(defaultState)