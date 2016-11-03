import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { deleteEvent, deleteEventSuccess, deleteEventFailure } from '../../actions/events';
import DeleteButton from '../../components/DeleteButton';


class DeleteButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DeleteButton handleClick={this.props.deleteEvent} />
    );
  }
}

DeleteButtonContainer.propTypes = {
  id: PropTypes.string
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  const eventId = this.props.id;
  return {
    deleteEvent: () => {
      dispatch(deleteEvent(eventId))
      .then((res) => !res.error ? 
        dispatch(deleteEventSuccess(res.payload)) : 
        dispatch(deleteEventFailure(res.payload))
      )
      .then(() => {
        browserHistory.push('/events')
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButtonContainer);