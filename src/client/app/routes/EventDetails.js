import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import EventDetailsContainer from '../container/EventDetailsContainer';

class EventDetails extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id } = this.props.params;
		return (
			<EventDetailsContainer id={id} />
		);
	}
}

export default EventDetails;