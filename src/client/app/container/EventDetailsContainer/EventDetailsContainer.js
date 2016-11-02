import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import EventDetails from '../../components/EventDetails';
import EventUpdateContainer from '../EventUpdateContainer';
import { fetchOneEvent, fetchOneEventSuccess, fetchOneEventFailure } from '../../actions/events';

class EventDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchOneEvent(this.props.id);
  }

  render() {
    const { event, loading, error } = this.props.currentEvent;
    return (
      <div>
        <EventDetails event={event} />
        <EventUpdateContainer event={event} />
      </div>
    );
  }
}

EventDetailsContainer.propTypes = {
  currentEvent: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return { currentEvent: state.events.currentEvent }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneEvent: (id) => {
      dispatch(fetchOneEvent(id))
      .then((res) => !res.error ? 
        dispatch(fetchOneEventSuccess(res.payload)) : 
        dispatch(fetchOneEventFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer);