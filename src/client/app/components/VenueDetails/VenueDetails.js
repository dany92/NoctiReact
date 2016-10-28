import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class VenueDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("param in component", this.props.params);
    return (
      <div>
        <div>
          {this.props.venue.name}
          {this.props.venue.address}
          {this.props.venue.email}
        </div>
      </div>
    );
  }
}

VenueDetails.propTypes = {
  venue: PropTypes.object
};

export default VenueDetails;