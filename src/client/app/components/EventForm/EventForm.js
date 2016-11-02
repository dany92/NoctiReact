import React, { Component, PropTypes } from "react";
import { browserHistory } from 'react-router';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      venueId: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event !== this.state) {
      this.setState(nextProps.event);
    }
  }
  
  onSubmit(e) {
      e.preventDefault();
      console.log("this is target", this.state);
      this.props.handleSubmit(this.state);
  }

  onChange(e) {
    console.log("currVal", this.state[e.target.name]);
    console.log("tobechanged", e.target.value);
    this.state[e.target.name] = e.target.value;
    this.setState(this.state)
  }

  render() {
    console.log("form init val", this.props.event);
    console.log("state", this.state);
    const { title, description, start_date, end_date, venueId } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="title" value={title} onChange={this.onChange} />
          <input type="text" name="description" value={description} onChange={this.onChange} />
          <input type="text" name="start_date" value={start_date} onChange={this.onChange} />
          <input type="text" name="end_date" value={end_date} onChange={this.onChange} />
          <input type="number" name="venueId" value={venueId} onChange={this.onChange} />
          <button type="submit">Create new event</button>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  handleSubmit: PropTypes.func,
  event: PropTypes.object
};

export default EventForm;