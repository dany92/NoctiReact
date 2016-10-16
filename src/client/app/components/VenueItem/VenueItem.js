import React, { Component, PropTypes } from "react";

class VenueItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.venue.name}
      </div>
    );
  }
}

VenueItem.propTypes = {
  venue: PropTypes.object
};

export default VenueItem;