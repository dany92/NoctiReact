// import Express from 'express';
// import { createServer } from 'http';
// import path from 'path';
// import bodyParser from 'body-parser';

// import db from '../db';
// import Venue from './seed/venue-seed';
// import Event from './seed/event-seed';


// let app = Express();
// let server = createServer();
// let PORT = 1337;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// let npmPath = path.join(__dirname, './node_modules');
// let publicPath = path.join(__dirname, './src/client');

// app.use(Express.static(npmPath));
// app.use(Express.static(publicPath));

// app.use('/api/venues', (req,res,next) => res.send(Venue));

// app.use('/api/events', (req,res,next) =>
// 	res.send(Event));

// app.use('/', function(req,res,next){
// 	res.sendFile(path.join(__dirname,'./src/client/public/index.html'));
// });

// app.use(function (err, req, res, next) {
//     console.error(err, err.stack);
//     res.status(500).send(err);
// });


// let startApp = () => {
// 	db.sync
// }
// server.on('request', app);
// server.listen(PORT, function(){
// 	console.log(`server listening on port: ${PORT}`);
// })