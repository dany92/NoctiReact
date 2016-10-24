import axios from 'axios';
import { dispatch } from 'redux';

const _getAllEvents = (events=[]) => (
	{
		type: "GET_EVENTS", 
		payload: { events }
	});

export const fetchAll = () => {
	console.log("fetching data");
	return (dispatch, getState) => {
		const currentEvents = getState().events;
		if(currentEvents.legnth > 0){
			dispatch(_getAllEvents());
		}else {
			axios.get("/api/events").
			then(res => {
				console.log("dispatch", dispatch);
				dispatch(_getAllEvents(res.data));

			})
		}
	}
}
