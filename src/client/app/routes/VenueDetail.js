import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

class VenueDetail extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id } = this.props.params;
		let findVenue = (venue) => venue.id === Number(id);
		const venue = this.props.venues.find(findVenue);
		return (
			<div>
		  		<h1> This is VenueDetail! </h1>
		  		Venue Id: {id}
		  		<ol>
		  			<li>{venue.name}</li>
		  			<li>{venue.address}</li>
		  		</ol>
		  	</div>
		);
	}
}

VenueDetail.propTypes = {
  venues: PropTypes.array
};

let mapStateToProps = (state) => {
  return { venues: state.venues }
}

export default connect(mapStateToProps)(VenueDetail);
