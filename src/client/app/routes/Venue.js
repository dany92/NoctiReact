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
			// this.setState({venues: res.data}) 
			// Now you don't need <VenueList venues={this.state.venues} />;
			console.log("no more local state for venues", this.state.venues);
			console.log("api returned venues", res.data);
		})
	}

	render() {
		return (
			<div>
		  		<h1> This is Venues page </h1>
		  		<VenueList />
		  	</div>
		);
	}
}

export default Venue;
