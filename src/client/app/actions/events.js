import axios from 'axios';

const _getAllEvents = (events=[]) => (
	{
		type: "GET_EVENTS", 
		payload: { events }
	});

export const fetchAll = () => {
	console.log("fetching events data");
	return (dispatch, getState) => {
		const currentEvents = getState().events;
		if(currentEvents.length > 0){
			dispatch(_getAllEvents());
		}else {
			axios.get("/api/events").
			then(res => {
				dispatch(_getAllEvents(res.data));
			})
		}
	}
}
