import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import VenueItem from '../../components/VenueItem'

class VenueList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.venues.map((venue, index) => 
            <VenueItem key={index} venue={venue} /> 
        )}
      </div>
    );
  }
}

VenueList.propTypes = {
  venues: PropTypes.array
};

let mapStateToProps = (state) => {
  return { venues: state.venues }
}
export default connect(mapStateToProps)(VenueList);