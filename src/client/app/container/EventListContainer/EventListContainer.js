import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import EventList from '../../components/EventList';
import { fetchEvents, fetchEventsSuccess, fetchEventsFailure } from '../../actions/events';

class EventListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, loading, error } = this.props.eventsList;
    return (
      <EventList events={events} />
    );
  }
}

EventListContainer.propTypes = {
  eventsList: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return { eventsList: state.events.eventsList }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents())
      .then((res) => !res.error ? 
        dispatch(fetchEventsSuccess(res.payload)) : 
        dispatch(fetchEventsFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);