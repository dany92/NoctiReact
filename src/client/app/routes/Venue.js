import React, { Component } from 'react';
import axios from 'axios';

import VenueList from '../components/VenueList'

class Venue extends Component {
	constructor(props){
		super(props);
		this.state = { 
			venues: [] 
		}
	}
	componentDidMount(){
		axios.get('/api/venues')
		.then(res =>{
			// this.setState({venues: res.data});
			console.log("state has not been set", this.state.venues);
			console.log("api returned venues", res.data);
		})
	}

	render() {
		return (
			<div>
		  		<h1> This is Venues page </h1>
		  		<VenueList venues={this.state.venues} />
		  	</div>
		);
	}
}

export default Venue;
