import { 
	FETCH_VENUES, 
	FETCH_VENUES_SUCCESS, 
	FETCH_VENUES_ERROR,
	FETCH_ONE_VENUE,
	FETCH_ONE_VENUE_SUCCESS,
	FETCH_ONE_VENUE_ERROR 
} from '../actions/venues';

const INIT_STATE = {
	venuesList: {
		venues: [],
		error: null,
		loading: false
	},
	currentVenue: {
		venue: {},
		error: null,
		loading: false
	}
};

const venues = (state = INIT_STATE, action) => {
	let error;
	switch(action.type){
		case FETCH_VENUES:
			console.log("in reducer");
			return Object.assign({}, state, {venuesList: {venues: [], error: null, loading: true}});
		case FETCH_VENUES_SUCCESS:
			return Object.assign({}, state, {venuesList: {venues: action.payload.data, error: null, loading: false}});
		case FETCH_VENUES_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {venuesList: {venues: [], error: error, loading: false}});
		case FETCH_ONE_VENUE:
			console.log("fetching one venue");
			return Object.assign({}, state, {currentVenue: {venue: {}, error: null, loading: true}});
		case FETCH_ONE_VENUE_SUCCESS:
			return Object.assign({}, state, {currentVenue: {venue: action.payload.data, error: null, loading: false}});
		case FETCH_ONE_VENUE_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {currentVenue: {venue: {}, error: error, loading: false}});

		default:
			return state;
	}
}

export default venues;