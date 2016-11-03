import React, { Component, PropTypes } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.onClick}>Delete</button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DeleteButton;