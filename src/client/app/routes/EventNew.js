import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import EventNewContainer from '../container/EventNewContainer';

class EventNew extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<EventNewContainer />
		);
	}
}

export default EventNew;