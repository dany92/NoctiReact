import axios from 'axios';

export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_VENUES_SUCCESS = 'FETCH_VENUES_SUCCESS';
export const FETCH_VENUES_ERROR = 'FETCH_VENUES_ERROR';

export const FETCH_ONE_VENUE = 'FETCH_ONE_VENUE';
export const FETCH_ONE_VENUE_SUCCESS = 'FETCH_ONE_VENUE_SUCCESS';
export const FETCH_ONE_VENUE_ERROR = 'FETCH_ONE_VENUE_ERROR';

export const fetchVenues = () => {
	const request = axios.get("/api/venues");
	return {
		type: FETCH_VENUES,
		payload: request,
	};
}

export const fetchVenuesSuccess = (venues) => {
	return {
		type: FETCH_VENUES_SUCCESS,
		payload: venues,
	};
}

export const fetchVenuesFailure = (error) => {
	return {
		type: FETCH_VENUES_ERROR,
		payload: error,
	};
}

export const fetchOneVenue = (id) => {
	const request = axios.get(`/api/venues/${id}`);
	return {
		type: FETCH_ONE_VENUE,
		payload: request,
	};
}

export const fetchOneVenueSuccess = (venue) => {
	return {
		type: FETCH_ONE_VENUE_SUCCESS,
		payload: venue,
	};
}

export const fetchOneVenueFailure = (error) => {
	return {
		type: FETCH_ONE_VENUE_ERROR,
		payload: error,
	};
}

