import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class VenueItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let detailsUrl = `/venues/${this.props.venue.id}`;
    return (
      <div>
        <div>
          {this.props.venue.name}
        </div>
        <button>
          <Link to={detailsUrl}>
            Details
          </Link>
        </button>
      </div>
    );
  }
}

VenueItem.propTypes = {
  venue: PropTypes.object
};

export default VenueItem;