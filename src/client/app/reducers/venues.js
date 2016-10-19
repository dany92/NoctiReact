import dummyVenues from '../../../../seed/venue-seed';

const venues = (state = [], action) => {
	switch(action.type){
		default:
			return state.concat(dummyVenues);
	}
}

export default venues;