import React, { Component, PropTypes } from "react";

import VenueItem from '../VenueItem'

class VenueList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.venues.map((venue, index) => 
            <VenueItem key={index} venue={venue} /> 
        )}
      </div>
    );
  }
}

VenueList.propTypes = {
  venues: PropTypes.array
};

export default VenueList;