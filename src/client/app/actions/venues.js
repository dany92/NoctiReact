import axios from 'axios';

const _getAllVenues = (venues=[]) => (
	{
		type: "GET_VENUES", 
		payload: { venues }
	});

export const fetchAll = () => {
	console.log("fetching venues data");
	return (dispatch, getState) => {
		const currentVenues = getState().venues;
		if(currentVenues.length > 0){
			dispatch(_getAllVenues());
		}else {
			axios.get("/api/venues").
			then(res => {
				dispatch(_getAllVenues(res.data));
			})
		}
	}
}
