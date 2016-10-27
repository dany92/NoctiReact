import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import VenueList from '../container/VenueList'

class Venue extends Component {
	constructor(props){
		super(props);
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
