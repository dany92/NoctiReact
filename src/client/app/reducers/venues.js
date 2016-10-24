const venues = (state = [], action) => {
	switch(action.type){
		case "GET_VENUES":
			return state.concat(action.payload.venues)
		default:
			return state
	}
}

export default venues;