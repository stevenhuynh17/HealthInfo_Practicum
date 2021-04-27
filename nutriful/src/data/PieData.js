
let PieData = (values) => {
    const { carbSum, proteinSum, fatSum } = values
    return [
    {
        "id": "protein",
        "label": "protein",
        "value": proteinSum*4,
        "color": "hsl(139, 70%, 50%)"
    },
    {
        "id": "carbs",
        "label": "carbs",
        "value": carbSum*4,
        "color": "hsl(345, 70%, 50%)"
    },
    {
        "id": "fats",
        "label": "fats",
        "value": fatSum*9,
        "color": "hsl(179, 70%, 50%)"
    },
]}

export default PieData