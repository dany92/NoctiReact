import Express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import startApp from './app';
import routes from './routes'; 

let app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let npmPath = path.join(__dirname, '../node_modules');
let publicPath = path.join(__dirname, '../src/client');

app.use(Express.static(npmPath));
app.use(Express.static(publicPath));

app.use('/api', routes);

app.use('/', function(req,res,next){
	res.sendFile(path.join(__dirname,'../src/client/public/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

startApp(app);