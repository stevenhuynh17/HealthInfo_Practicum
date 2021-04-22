import './App.css';
import Header from './components/Header'
import DataTable from './components/DataTable'
// import VitalsCard from "./components/VitalsCard";
import VitalsRow from "./components/VitalsRow";

function App() {
  return (
    <div className="App">
        <Header />
        <VitalsRow/>
        <DataTable/>
    </div>
  );
}

export default App;
