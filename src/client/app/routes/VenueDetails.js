import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import VenueDetailsContainer from '../container/VenueDetailsContainer';

class VenueDetails extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id } = this.props.params;
		console.log("in routes", id);

		return (
			<VenueDetailsContainer id={id} />
		);
	}
}

export default VenueDetails;