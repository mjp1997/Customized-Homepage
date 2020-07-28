import React, {Component} from 'react';
import '../Components.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
const NavBar = () =>{
	return(
	<div className = "row">
		<div className = "col s12 m12 l12">	 
		<nav className = 'z-depth-0'>
		<a href ="https://www.facebook.com/mitchell.perez.1/"><FaFacebook className = "iconStyleFb"></FaFacebook></a>
		<a href ="https://www.facebook.com/mitchell.perez.1/"><FaLinkedinIn className = "iconStyleFb"></FaLinkedinIn></a>
		<a href ="https://www.facebook.com/mitchell.perez.1/"><FaGithub className = "iconStyleGithub"></FaGithub></a>
		Mitch's Lifeline
		<ul className = "right">
			<li><Link to ='/Home' className ='linkStyle'>Home</Link></li>
			<li><Link to ='/Projects' className ='linkStyle'>Projects</Link></li>
			<li><Link to ='/AboutMe'  className ='linkStyle'>About Me</Link></li>
		</ul>
	</nav>
	</div>
	</div>
	)
}

export default NavBar;