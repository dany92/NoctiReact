import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export const FETCH_ONE_EVENT = 'FETCH_ONE_EVENT';
export const FETCH_ONE_EVENT_SUCCESS = 'FETCH_ONE_EVENT_SUCCESS';
export const FETCH_ONE_EVENT_ERROR = 'FETCH_ONE_EVENT_ERROR';

export const CREATE_EVENT = 'CREATE_EVENT';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_ERROR = 'UPDATE_EVENT_ERROR';

export const DELETE_EVENT = 'DELETE_EVENT';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_ERROR = 'DELETE_EVENT_ERROR';

export const fetchEvents = () => {
	const request = axios.get("/api/events");
	return {
		type: FETCH_EVENTS,
		payload: request,
	};
}

export const fetchEventsSuccess = (events) => {
	return {
		type: FETCH_EVENTS_SUCCESS,
		payload: events,
	};
}

export const fetchEventsFailure = (error) => {
	return {
		type: FETCH_EVENTS_ERROR,
		payload: error,
	};
}

export const fetchOneEvent = (id) => {
	const request = axios.get(`/api/events/${id}`);
	return {
		type: FETCH_ONE_EVENT,
		payload: request,
	};
}

export const fetchOneEventSuccess = (event) => {
	return {
		type: FETCH_ONE_EVENT_SUCCESS,
		payload: event,
	};
}

export const fetchOneEventFailure = (error) => {
	return {
		type: FETCH_ONE_EVENT_ERROR,
		payload: error,
	};
}

export const createEvent = (event) => {
	const request = axios.post("/api/events", event);
	return {
		type: CREATE_EVENT,
		payload: request,
	};
}

export const createEventSuccess = (newEvent) => {
	return {
		type: CREATE_EVENT_SUCCESS,
		payload: newEvent,
	};
}

export const createEventFailure = (error) => {
	return {
		type: CREATE_EVENT_ERROR,
		payload: error,
	};
}

export const updateEvent = (id, event) => {
	const request = axios.put(`/api/events/${id}`, event);
	return {
		type: UPDATE_EVENT,
		payload: request,
	};
}

export const updateEventSuccess = (updatedEvent) => {
	return {
		type: UPDATE_EVENT_SUCCESS,
		payload: updatedEvent,
	};
}

export const updateEventFailure = (error) => {
	return {
		type: UPDATE_EVENT_ERROR,
		payload: error,
	};
}

export const deleteEvent = (id) => {
	const request = axios.delete(`/api/events/${id}`);
	return {
		type: DELETE_EVENT,
		payload: request,
	};
}

export const deleteEventSuccess = (id) => {
	return {
		type: DELETE_EVENT_SUCCESS,
		payload: {data: { id }},
	};
}

export const deleteEventFailure = (error) => {
	return {
		type: DELETE_EVENT_ERROR,
		payload: error,
	};
}

