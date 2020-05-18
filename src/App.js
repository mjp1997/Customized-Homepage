import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <NavBar></NavBar>
      </div>
    );
  }
}
export default App;
