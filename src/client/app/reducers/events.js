import dummyEvents from '../../../../seed/event-seed';

const events = (state = [], action) => {
	switch(action.type){
		default:
			return state.concat(dummyEvents);
	}
}

export default events;