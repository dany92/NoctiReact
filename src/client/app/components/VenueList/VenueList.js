import React, { Component, PropTypes } from "react";

import VenueItem from '../VenueItem';

class VenueList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.venues;
  }

  render() {
    return (
      <div>
        { this.props.venues.map((venue) => 
            <VenueItem key={venue.id} venue={venue} /> 
        )}
      </div>
    );
  }
}

VenueList.propTypes = {
  venues: PropTypes.array
};

export default VenueList;