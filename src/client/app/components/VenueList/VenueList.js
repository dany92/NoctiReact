import React, { Component, PropTypes } from "react";

import VenueItem from '../VenueItem'

class VenueList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.venues.map((venue, index) => <VenueItem key={index} venue={venue} />)}
      </div>
    );
  }
}

VenueList.propTypes = {
  venues: PropTypes.array
};

export default VenueList;