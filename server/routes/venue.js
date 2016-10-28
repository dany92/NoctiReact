import { Router } from 'express';
import db from '../db';

const router = Router();
const Venue = db.model('venue');

router.get('/', function(req,res,next){
	Venue.findAll({where: req.query, include: [{
    model: db.model('event')}]})
	.then(venues => {
		res.json(venues);
	})
	.catch(next);
})

router.get('/:id', function(req, res, next){
	Venue.findById(req.params.id)
	.then(venue => {
		res.json(venue);
	})
	.catch(next);
})


export default router;