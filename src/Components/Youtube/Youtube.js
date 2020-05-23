import React, {Component} from 'react';
import axios from 'axios'
import '../Components.css';
const KEY = "";
class Youtube extends Component {
	state = {
		persons: [],
	};

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
			console.log(res);
			this.setState({persons: res.data})
		})
	}
	render() {
	  return (
		  <ul>
			  {this.state.persons.map(person => <li>{person.name}</li>)}
		  </ul>
		// <form>
		// 	<div className = "input-field">
		// 		<input type = "text" placeholder = "Search for a channel: " id="channel-input"></input>
		// 	</div>
		// </form>
	  );
	}
  }
  export default Youtube;