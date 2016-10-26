import db from '../server/db';
import chalk from 'chalk';
import venues from './venue';
import events from './event';

const seedPromises = [venues, events];
const seedDB = () => {
	return Promise.all(seedPromises.map(seed => seed.call(this))) 
	.then(() => {
		console.log(chalk.magenta("seed was successful"));
	})
}

export default seedDB;