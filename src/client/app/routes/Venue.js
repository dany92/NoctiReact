import React, { Component } from 'react';
import axios from 'axios';

export default class Venue extends Component {
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
		  		{this.state.venues.map((venue, index) => <p key={index}>{venue.name}</p>)}
		  	</div>
		);
	}
}
