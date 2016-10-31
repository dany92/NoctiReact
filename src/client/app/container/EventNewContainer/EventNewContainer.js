import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createEvent, createEventSuccess, createEventFailure } from '../../actions/events';

class EventNewContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const example = {
        title: 'Halloween Dark Night',
        description: 'Come dressed up in costumes and have fun',
        start_date: '2016-10-31 23:30',
        end_date: '2016-11-01 4:30',
        businessId: 1
    };
    this.props.createEvent(example);
    browserHistory.push('/events');
  }

  render() {
    return (
      <button type="submit" onClick={this.handleSubmit}>Create new event</button>
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