import { Router } from 'express';
import db from '../db';

const router = Router();
const Event = db.model('event');

router.get('/', function(req,res,next){
	
	Event.findAll({where: req.query})
	.then(events => res.json(events))
	.catch(next);

})

export default router;