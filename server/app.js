import { createServer } from 'http';
import db from './db'

const startApp = (app) => {
	const PORT = 1337;
	db.sync({force: true})
	.then(() =>{
		const server = createServer();
		server.on('request', app);
		server.listen(PORT, () => {
			console.log(`server listening on port: ${PORT}`);
		})
	})
};

export default startApp;