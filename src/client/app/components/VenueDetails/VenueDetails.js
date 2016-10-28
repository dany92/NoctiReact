import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class VenueDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.props.venue.name}</p>
          <p>{this.props.venue.address}</p>
          <p>{this.props.venue.email}</p>
        </div>
      </div>
    );
  }
}

VenueDetails.propTypes = {
  venue: PropTypes.object
};

export default VenueDetails;