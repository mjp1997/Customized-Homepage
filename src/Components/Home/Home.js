import React, { Component } from 'react';
import '../Components.css';
import Reddit from '../Reddit/Reddit';
import Fitness from '../Fitness/Fitness';
import Youtube from '../Youtube/Youtube';
import Stocks from '../Stocks/Stocks';

class Home extends Component {
	render() {
	  return (
		<div>
			<div className = "row">
				<div className = "col s6"><Reddit></Reddit></div>
				<div className = "col s6"><Stocks></Stocks></div>
			</div>
			<div className = "row">
				<div className = "col s6"><Youtube></Youtube></div>
				<div className = "col s6"><Fitness></Fitness></div>
			</div>
		</div>
	  );
	}
  }
  export default Home;