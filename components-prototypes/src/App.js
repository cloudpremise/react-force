import logo from './logo.svg';
import './App.css';

import BoilerplateComponent2 from "./components/BoilerplateComponent2";
import BoilerplateComponent from "./components/BoilerplateComponent";
import * as Reactforce from "./components/Reactforce";

function App() {
  return (
    <div className="App">
      Hello World
      <Reactforce.BoilerplateComponent />
      <Reactforce.BoilerplateComponent2 />
    </div>
  );
}

export default App;
