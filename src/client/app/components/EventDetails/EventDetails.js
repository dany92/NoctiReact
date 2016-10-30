import React, { Component, PropTypes } from "react";
import { Link } from 'react-router';

class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.props.event.title}</p>
          <p>{this.props.event.start_date}</p>
          <p>{this.props.event.end_date}</p>
        </div>
      </div>
    );
  }
}

EventDetails.propTypes = {
  event: PropTypes.object
};

export default EventDetails;