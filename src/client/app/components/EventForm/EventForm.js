import React, { Component, PropTypes } from "react";

class EventForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} >
          <button type="submit">Create new event</button>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default EventForm;