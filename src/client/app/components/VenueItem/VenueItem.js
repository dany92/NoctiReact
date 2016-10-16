import React, { Component, PropTypes } from "react";

class VenueItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.venue.address}
      </div>
    );
  }
}

VenueItem.propTypes = {
  venue: PropTypes.object
};

export default VenueItem;