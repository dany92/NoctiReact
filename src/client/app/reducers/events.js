const events = (state = [], action) => {
	switch(action.type){
		case "GET_EVENTS":
			return state.concat(action.payload.events)
		default:
			return state
	}
}

export default events;