import dummyEvents from '../../../../seed/event-seed';

const initialState = {
	events: []
};

const events = (state = initialState.events, action) => {
	switch(action.type){
		case "GET_EVENTS":
			console.log("in reducer", action.payload);
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}

export default events;