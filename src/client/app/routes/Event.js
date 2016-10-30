import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import EventListContainer from '../container/EventListContainer';

class Event extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
		  		<h1> This is Events page </h1>
		  		<EventListContainer />
		  	</div>
		);
	}
}

export default Event;
