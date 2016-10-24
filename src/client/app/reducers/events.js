import dummyEvents from '../../../../seed/event-seed';

const events = (state = [], action) => {
	switch(action.type){
		case "GET_EVENTS":
			console.log("in reducer", action.payload);
			return state.concat(action.payload.events);
		default:
			return state
	}
}

export default events;