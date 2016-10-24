import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import EventItem from '../../components/EventItem';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        { this.props.events.map((event, index) => 
            <EventItem key={index} event={event} /> 
        )}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array
};

let mapStateToProps = (state) => {
  console.log("state from EventList component",state);
  return { events: state.events }
}

export default connect(mapStateToProps)(EventList);