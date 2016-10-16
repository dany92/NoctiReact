
let dummy = {
    name: 'Lil Branch',
    address: '22 7th Ave S, New York, NY 10014',
    lat: 40.736040,
    long: -74.001724,
    category: 'bar',
    email: 'whatever@gmail.com',
    phone: '203-234-6633',
    website: 'www.lilbranch.com'
}

const venues = (state = [], action) => {
	switch(action.type){
		default:
			return state.concat([dummy]);
	}
}

export default venues;