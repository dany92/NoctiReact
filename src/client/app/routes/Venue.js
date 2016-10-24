import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchAll } from '../actions/venues';

import VenueList from '../container/VenueList'

class Venue extends Component {
	constructor(props){
		super(props);
		this.state = { 
			venues: [] 
		}
	}
	componentDidMount(){
		this.props.onMount();
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

Venue.propTypes = {
  venues: PropTypes.array
};

let mapStateToProps = (state) => {
  console.log("state from Venue Route component",state);
  return { venues: state.venues }
}

let mapDispatchToProps = (dispatch) => ({
	onMount: () => {
		dispatch(fetchAll())
	} 
})

export default connect(mapStateToProps, mapDispatchToProps)(Venue);
