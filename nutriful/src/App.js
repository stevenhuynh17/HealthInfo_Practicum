import './App.css';
import Header from './components/Header'
import DataTable from './components/DataTable'
import VitalsRow from "./components/VitalsRow";
import MyResponsivePie from "./components/MyResponsivePie";
import MyResponsiveBullet from "./components/MyResponsiveBullet";
import API from "./data/API_Key"
import PieData from "./data/PieData";
import BulletData from "./data/BulletData";
console.log(API)
let URL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${API}&includeNutrition=true`

function App() {
  return (
    <div className="App">
        <Header />
        <VitalsRow/>
        <DataTable/>
        <div style={{height: "300px"}}>
            <MyResponsivePie data={PieData}/>
        </div>
        <div style={{height: "2400px", width: "90%"}}>
            <MyResponsiveBullet data={BulletData}/>
        </div>
    </div>
  );
}

export default App;
