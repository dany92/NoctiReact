import { 
	FETCH_EVENTS, 
	FETCH_EVENTS_SUCCESS, 
	FETCH_EVENTS_ERROR,
	FETCH_ONE_EVENT,
	FETCH_ONE_EVENT_SUCCESS,
	FETCH_ONE_EVENT_ERROR, 
	CREATE_EVENT,
	CREATE_EVENT_SUCCESS,
	CREATE_EVENT_ERROR,
	UPDATE_EVENT,
	UPDATE_EVENT_SUCCESS,
	UPDATE_EVENT_ERROR,
	DELETE_EVENT,
	DELETE_EVENT_SUCCESS,
	DELETE_EVENT_ERROR
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
	}
};

const events = (state = INIT_STATE, action) => {
	let error;
	let currentEventsList;
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
			return Object.assign({}, state, {currentEvent: Object.assign({}, state.currentEvent, {loading: true})});
		case CREATE_EVENT_SUCCESS:
			const createdEvent = action.payload.data;
			currentEventsList = state.eventsList.events;
			return Object.assign({}, state, {currentEvent: {event: {}, error: null, loading: false}}, 
				{eventsList: {
					events: [...currentEventsList, createdEvent],
					error: null,
					loading: false
				}
			});
		case CREATE_EVENT_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {currentEvent: {events: {}, error: error, loading: false}});
		case UPDATE_EVENT:
			return Object.assign({}, state, {currentEvent: {event: {}, error: null, loading: true}});
		case UPDATE_EVENT_SUCCESS:
			const updatedEvent = action.payload.data;
			currentEventsList = state.eventsList.events;
			return Object.assign({}, state, {currentEvent: 
				{event: {}, error: null, loading: false}}, 
				{eventsList: {
					events: currentEventsList.map(event => {
						if(event.id === updatedEvent.id) return updatedEvent;
						return event;
					}),
					error: null,
					loading: false
				}
			});
		case UPDATE_EVENT_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {currentEvent: {event: {}, error: error, loading: false}});
		case DELETE_EVENT:
			return Object.assign({}, state, {currentEvent: {event: {}, error: null, loading: true}});
		case DELETE_EVENT_SUCCESS:
			const deletedId = action.payload.data.id;
			currentEventsList = state.eventsList.events;
			return Object.assign({}, state, {currentEvent: 
				{event: {}, error: null, loading: false}},
				{eventsList: {
					events: currentEventsList.filter(event => event.id !== deletedId),
					error: null, loading: false
				}
			});
		case DELETE_EVENT_ERROR:
			error = action.payload.data || {message: action.payload.message}
			return Object.assign({}, state, {currentEvent: {event: {}, error: error, loading: false}});
		default:
			return state;
	}
}

export default events;