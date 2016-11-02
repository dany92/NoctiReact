import { Router } from 'express';
import db from '../db';

const router = Router();
const Event = db.model('event');

router.get('/', function(req,res,next){
	Event.findAll({where: req.query})
	.then(events => res.json(events))
	.catch(next);
})

router.param('id', function (req, res, next, id) {
	Event.findById(id)
	.then(event => {
		if (event) {
			req.event = event;
			next();
			return null; 
		} else {
			throw HttpError(404);
		}
	})
	.catch(next);
});

router.get('/:id', function(req, res, next){
	Event.findById(req.params.id)
	.then(event => {
		res.json(event);
	})
	.catch(next);
})

router.post('/', function(req, res, next){
	Event.create(req.body)
	.then(createdEvent => res.json(createdEvent))
	.catch(next);
})

router.put('/:id', function(req, res, next){
	req.event.update(req.body)
	.then(updatedEvent => res.json(updatedEvent))
	.catch(next);
})

router.delete('/:id', function(req, res, next){
	req.event.destroy()
	.then(destroyedEvent => res.send('Event Destroyed'))
	.catch(next);
})

export default router;