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
			<Reddit></Reddit>
			<Stocks></Stocks>
			<Youtube></Youtube>
			<Fitness></Fitness>

		</div>
	  );
	}
  }
  export default Home;