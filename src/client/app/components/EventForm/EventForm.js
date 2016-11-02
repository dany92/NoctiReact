import React, { Component, PropTypes } from "react";
import { browserHistory } from 'react-router';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: 'Halloween Dark Night',
        description: 'Come dressed up in costumes and have fun',
        start_date: '2016-10-31 23:30',
        end_date: '2016-11-01 4:30',
        businessId: 1
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      e.preventDefault();
      const { form } = this.state;
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
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="title" value={this.state.form.title} onChange={this.onChange} />
          <input type="text" name="description" value={this.state.form.description} onChange={this.onChange} />
          <input type="text" name="start_date" value={this.state.form.start_date} onChange={this.onChange} />
          <input type="text" name="end_date" value={this.state.form.end_date} onChange={this.onChange} />
          <input type="number" name="businessId" value={this.state.form.businessId} onChange={this.onChange} />
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