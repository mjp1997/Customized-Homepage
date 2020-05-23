import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
	  <Router>
      <div className="App">
		  <NavBar></NavBar>
		  <Switch>
		  <Route path ='/Home' component={Home}></Route>
		  <Route path ='/AboutMe' component={About}></Route>
		  <Route path ='/Projects' component={Projects}></Route>
		  <Route path ='/' exact component={Home}></Route>
		  </Switch>
      </div>
	  </Router>
    );
  }
}
export default App;
