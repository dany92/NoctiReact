import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createEvent, createEventSuccess, createEventFailure } from '../../actions/events';
import EventForm from '../../components/EventForm';


class EventNewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EventForm handleSubmit={this.props.createEvent} />
    );
  }
}

EventNewContainer.propTypes = {
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => {
      dispatch(createEvent(event))
      .then((res) => !res.error ? 
        dispatch(createEventSuccess(res.payload)) : 
        dispatch(createEventFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventNewContainer);