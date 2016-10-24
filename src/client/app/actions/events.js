import axios from 'axios';
import { dispatch } from 'redux';

const _getAllEvents = (events) => (
	{
		type: "GET_EVENTS", 
		payload: { events }
	});

export const fetchAll = () => {
	console.log("fetching data");
	return dispatch => {
		axios.get("/api/events").
		then(res => {
			console.log("dispatch", dispatch);
			dispatch(_getAllEvents(res.data));

		})
	}
}
