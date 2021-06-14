import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch } from 'react-router-dom';
import Topbar from './component/Topbar';
import Summary from './component/summary/Summary';
import  Bill from './component/Bill';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Switch>
        <Route exact path='/' component={Summary}/>
        <Route path='/bill' component={Bill}/> 
      </Switch>
    </div>
  );
}

export default App;
