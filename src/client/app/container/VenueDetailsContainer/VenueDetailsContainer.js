import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import VenueDetails from '../../components/VenueDetails';
import { fetchOneVenue, fetchOneVenueSuccess, fetchOneVenueFailure } from '../../actions/venues';

class VenueDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchOneVenue(this.props.id);
  }

  render() {
    const { venue, loading, error } = this.props.currentVenue;
    return (
      <VenueDetails venue={venue} />
    );
  }
}

VenueDetailsContainer.propTypes = {
  currentVenue: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return { currentVenue: state.venues.currentVenue }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOneVenue: (id) => {
      dispatch(fetchOneVenue(id))
      .then((res) => !res.error ? 
        dispatch(fetchOneVenueSuccess(res.payload)) : 
        dispatch(fetchOneVenueFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueDetailsContainer);