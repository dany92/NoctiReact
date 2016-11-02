import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateEvent, updateEventSuccess, updateEventFailure } from '../../actions/events';
import EventForm from '../../components/EventForm';


class EventUpdateContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("in update container", this.props.event);
    return (
      <EventForm event={this.props.event} handleSubmit={this.props.updateEvent} />
    );
  }
}

EventUpdateContainer.propTypes = {
  event: PropTypes.object
};

const mapStateToProps = (state) => {
  return { updatedEvent: state.events.updatedEvent }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateEvent: (event) => {
      dispatch(updateEvent(this.props.event.id, event))
      .then((res) => !res.error ? 
        dispatch(updateEventSuccess(res.payload)) : 
        dispatch(updateEventFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer);