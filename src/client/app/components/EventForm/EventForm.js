import React, { Component, PropTypes } from "react";
import { browserHistory } from 'react-router';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        form: {
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        venueId: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      e.preventDefault();
      console.log("this is taget", this.state.form);
      this.props.handleSubmit(form);
      browserHistory.push('/events');
  }

  onChange(e) {
    console.log("currVal", this.state.form[e.target.name]);
    console.log("tobechanged", e.target.value);
    this.state.form[e.target.name] = e.target.value;
    this.setState({form: this.state.form})
  }

  render() {
    console.log("form init val", this.props.event);
    console.log("state", this.state.form);
    const { title, description, start_date, end_date, venueId } = this.props.event;
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