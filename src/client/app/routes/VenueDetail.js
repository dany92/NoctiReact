import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

class VenueDetail extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id } = this.props.params;

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
  venue: PropTypes.object
};

let mapStateToProps = (state) => {
  return { venue: state.venues.venueList.venues }
}

export default connect(mapStateToProps)(VenueDetail);
