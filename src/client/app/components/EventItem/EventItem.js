import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let detailsUrl = `/events/${this.props.event.id}`;
    return (
      <div>
        <div>
          {this.props.event.title}
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

EventItem.propTypes = {
  event: PropTypes.object
};

export default EventItem;