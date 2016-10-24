import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

class EventDetail extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id } = this.props.params;
		let findEvent = (event) => event.id === Number(id);
		const event = this.props.events.find(findEvent);
		return (
			<div>
		  		<h1> This is EventDetail! </h1>
		  		Event Id: {id}
		  		<ol>
		  			<li>{event.title}</li>
		  			<li>{event.description}</li>
		  			<li>{event.start_date}</li>
		  		</ol>
		  	</div>
		);
	}
}

EventDetail.propTypes = {
  events: PropTypes.array
};

let mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps)(EventDetail);
