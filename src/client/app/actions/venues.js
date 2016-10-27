import axios from 'axios';

export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_VENUES_SUCCESS = 'FETCH_VENUES_SUCCESS';
export const FETCH_VENUES_ERROR = 'FETCH_VENUES_ERROR';

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

