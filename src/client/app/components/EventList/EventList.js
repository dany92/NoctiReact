import React, { Component, PropTypes } from "react";

import EventItem from '../EventItem';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.events;
  }

  render() {
    return (
      <div>
        { this.props.events.map((event) => 
            <EventItem key={event.id} event={event} /> 
        )}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array
};

export default EventList;