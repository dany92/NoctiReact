import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';

import VenueItem from '../../components/VenueItem';
import { fetchVenues, fetchVenuesSuccess, fetchVenuesFailure } from '../../actions/venues';

class VenueList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchVenues();
  }

  render() {
    const { venues, loading, error } = this.props.venuesList;
    return (
      <div>
        { venues.map((venue) => 
            <VenueItem key={venue.id} venue={venue} /> 
        )}
      </div>
    );
  }
}

VenueList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(VenueList);