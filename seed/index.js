import db from '../server/db';
import venues from './venue';
import events from './event';

const seedPromises = [venues, events];
const seedDB = () => {
	return Promise.all(seedPromises.map(seed => seed.call(this))) 
	.then(() => {
		console.log("seed was successful");
	})
}

export default seedDB;