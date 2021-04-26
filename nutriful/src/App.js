import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Launcher from "./pages/Launcher";

function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Home}/>
          {/*<Route path="/" component={Launcher}/>*/}
      </BrowserRouter>
  );
}

export default App;
