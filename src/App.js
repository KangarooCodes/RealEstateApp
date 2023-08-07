import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup'
import Home from './Home';
import About from './About';
import Support from './ContactAdmin'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/support' component={Support}/>
          <Redirect to='/'/>
        </Switch>
      </header>
    </div>
  );
}

export default App;