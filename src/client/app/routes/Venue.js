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
		.then(venues =>{
			this.setState({venues: venues.data});
			console.log(this.state.venues);
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
