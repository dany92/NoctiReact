import { 
	FETCH_EVENTS, 
	FETCH_EVENTS_SUCCESS, 
	FETCH_EVENTS_ERROR,
	FETCH_ONE_EVENT,
	FETCH_ONE_EVENT_SUCCESS,
	FETCH_ONE_EVENT_ERROR, 
	CREATE_EVENT,
	CREATE_EVENT_SUCCESS,
	CREATE_EVENT_ERROR 
} from '../actions/events';

const INIT_STATE = {
	eventsList: {
		events: [],
		error: null,
		loading: false
	},
	currentEvent: {
		event: {},
		error: null,
		loading: false
	},
	newEvent: {
		event: null,
		error: null,
		loading: false
	}
};

const events = (state = INIT_STATE, action) => {
	let error;
	switch(action.type){
		case FETCH_EVENTS:
			return Object.assign({}, state, {eventsList: {events: [], error: null, loading: true}});
		case FETCH_EVENTS_SUCCESS:
			return Object.assign({}, state, {eventsList: {events: action.payload.data, error: null, loading: false}});
		case FETCH_EVENTS_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {eventsList: {events: [], error: error, loading: false}});
		case FETCH_ONE_EVENT:
			return Object.assign({}, state, {currentEvent: {event: {}, error: null, loading: true}});
		case FETCH_ONE_EVENT_SUCCESS:
			return Object.assign({}, state, {currentEvent: {event: action.payload.data, error: null, loading: false}});
		case FETCH_ONE_EVENT_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {currentEvent: {event: {}, error: error, loading: false}});
		case CREATE_EVENT:
			return Object.assign({}, state, {newEvent: Object.assign({}, state.newEvent, {loading: true})});
		case CREATE_EVENT_SUCCESS:
			return Object.assign({}, state, {newEvent: {event: action.payload.data, error: null, loading: false}});
		case CREATE_EVENT_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {newEvent: {events: null, error: error, loading: false}});
		default:
			return state;
	}
}

export default events;