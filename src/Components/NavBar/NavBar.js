import React, {Component} from 'react';
import '../Components.css';
import { Link } from 'react-router-dom';

const NavBar = () =>{
	return <nav className = 'nav-wrapper  z-depth-0' >
		<ul>
			<li><Link to ='/Home' className ='linkStyle'>Home</Link></li>
			<li><Link to ='/Projects' className ='linkStyle'>Projects</Link></li>
			<li><Link to ='/AboutMe'  className ='linkStyle'>About Me</Link></li>
		</ul>

	</nav>
}

export default NavBar;