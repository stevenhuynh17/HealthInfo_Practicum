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
            return Micronutrients
        } else if(Patient.Age < Age && Patient.Gender === Gender) {
            return Micronutrients
        } else if(Patient.Age > 70 && Patient.Gender === Gender && Age > 70) {
            return Micronutrients
        }
    }
}

export const getProfile = (User) => {
    return getDRV(User)
}

let BulletData = () => {
    let data = []
    let profile = getProfile(Patient)

    for(let nutrient in profile) {
        let range = [0,20,40,60,80,100].map((val) => {
            return profile[nutrient] * (val/100)
        })

        let template = {
            "id": `${nutrient} (${Units[nutrient]})`,
            "ranges": range,
            // "measures": [profile[nutrient]],
            "measures": [0],
            "markers": [profile[nutrient]]
        }
        data.push(template)
    }
    return data
}

export default BulletData