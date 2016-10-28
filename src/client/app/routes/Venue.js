import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import VenueListContainer from '../container/VenueListContainer';

class Venue extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
		  		<h1> This is Venues page </h1>
		  		<VenueListContainer />
		  	</div>
		);
	}
}

export default Venue;
