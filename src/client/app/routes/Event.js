import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchAll } from '../actions/events';
import EventList from '../container/EventList';

class Event extends Component {
	constructor(props){
		super(props);
		this.state = { 
			events: [] 
		}
	}
	componentDidMount(){
		console.log("fetching data");
		this.props.onMount();
	}

	render() {
		return (
			<div>
		  		<h1> This is Events page </h1>
		  		<EventList />
		  	</div>
		);
	}
}

Event.propTypes = {
  events: PropTypes.array
};

let mapStateToProps = (state) => {
  console.log("state from Event Route component",state);
  return { events: state.events }
}

let mapDispatchToProps = (dispatch) => ({
	onMount: () => {
		dispatch(fetchAll())
	} 
})

export default connect(mapStateToProps, mapDispatchToProps)(Event);
