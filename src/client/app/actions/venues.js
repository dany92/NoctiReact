import axios from 'axios';
import { dispatch } from 'redux';

const _getAllVenues = (venues=[]) => (
	{
		type: "GET_VENUES", 
		payload: { venues }
	});

export const fetchAll = () => {
	console.log("fetching data");
	return (dispatch, getState) => {
		const currentVenues = getState().venues;
		if(currentVenues.length > 0){
			dispatch(_getAllVenues());
		}else {
			axios.get("/api/venues").
			then(res => {
				console.log("dispatch", dispatch);
				dispatch(_getAllVenues(res.data));

			})
		}
	}
}
