import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, BrowserRouter, Route, Link } from "react-router-dom";
import Topbar from './component/Topbar';
import Summary from './component/summary/Summary';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Summary />
    </div>
  );
}

export default App;
