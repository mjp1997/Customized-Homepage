import React, {Component} from 'react';
import axios from 'axios'
import '../Components.css';
const KEY = ""; // <- Insert API KEY  
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";
const DISCOVERY_DOCS = "https://www.googleapis.com/discovery.v1/apis/youtube/v3/rest";
const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container'); 

class Youtube extends Component {
	state = {
		subVideos: [],
		url: []
	};

	componentDidMount(){
		axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=OSRS&type=video&key=' + KEY).then(res =>{
			 this.setState({subVideos: res.data.items, url: "https://www.youtube.com/embed/"})
		})
		.catch(error => {
			console.log(error)
		})
	}
	render() {
		const {subVideos} = this.state
		const {url} = this.state
	  return (
		<section>
			<h3 className = "headerCaption">YouTube</h3>
			<div className = 'container'>
			{/* <p>Log In with your Google Account!</p>
			<button className ="btn red" id="authorize-button">Log In</button>
			<button className ="btn red" id="signout-button">Log Out</button>
			<br></br>	
			<div id = "content">
				<form id = "channel-form">
					<div class ="input-field">
						<input type = "text" id = 'channel-input' placeholder="Enter Channel Name"></input>
						<input type = "submit" id = 'channel-input' placeholder="Get Channel Data"></input>
					</div>
				</form>
			</div> */}
		{
		subVideos.map(subVideo =><div key = {subVideo.id + '1'}> <iframe src = {url + subVideo.id.videoId}></iframe></div>)
	    }
		  </div>
		  </section>  
	  );
	}
  }
  export default Youtube;