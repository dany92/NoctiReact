import db from '../server/db';
import venues from './venue';

const seedPromises = [venues];
const seedDB = () => {
	return Promise.all(seedPromises.map(seed => seed.call(this))) 
	.then(() => {
		console.log("seed was successful");
	})
}

export default seedDB;