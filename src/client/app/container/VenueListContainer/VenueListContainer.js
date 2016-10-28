import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import VenueList from '../../components/VenueList';
import { fetchVenues, fetchVenuesSuccess, fetchVenuesFailure } from '../../actions/venues';

class VenueListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchVenues();
  }

  render() {
    const { venues, loading, error } = this.props.venuesList;
    return (
      <VenueList venues={venues} />
    );
  }
}

VenueListContainer.propTypes = {
  venuesList: PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return { venuesList: state.venues.venuesList }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVenues: () => {
      dispatch(fetchVenues())
      .then((res) => !res.error ? 
        dispatch(fetchVenuesSuccess(res.payload)) : 
        dispatch(fetchVenuesFailure(res.payload))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueListContainer);