import { createServer } from 'http';
import db from './db'
import runSeeds from '../seed';

const startApp = (app) => {
	const PORT = 1337;
	db.sync({force: true})
	.then(() => {
		return runSeeds();
	})
	.then(() =>{
		console.log("PostreSQL database connected: noctireact");
		const server = createServer();
		server.on('request', app);
		server.listen(PORT, () => {
			console.log(`server listening on port: ${PORT}`);
		})
	})
};

export default startApp;