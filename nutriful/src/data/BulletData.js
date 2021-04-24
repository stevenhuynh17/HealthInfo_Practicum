import DRV from "./DRV.js"
import Units from "./Units"

const Patient = {
    "Age": 23,
    "Gender": "Male"
}

let getDRV = (Patient) => {
    for(let i=0; i<DRV.length; i++) {
        let { Age, Gender, Micronutrients } = DRV[i]

        if(Patient.Age < 8 && Patient.Age < Age) {
            console.log(Gender)
            return Micronutrients
        } else if(Patient.Age < Age && Patient.Gender === Gender) {
            console.log(Gender)
            return Micronutrients
        } else if(Patient.Age > 70 && Patient.Gender === Gender && Age > 70) {
            console.log(Age, Gender)
            return Micronutrients
        }
    }
}

let BulletData = (User) => {
    let data = []

    for(let nutrient in getDRV(User)) {
        let template = {
            "id": nutrient,
            "ranges": [0,20,40,60,80,100],
            "measures": [29],
            "markers": [100]
        }
        data.push(template)
    }
    return data
}

export default BulletData(Patient)