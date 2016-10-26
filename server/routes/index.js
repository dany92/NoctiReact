import { Router } from 'express';

import venues from './venue';
import events from './event';

let router = Router();

router.use('/venues', venues);
router.use('/events', events);

router.use(function (req, res) {
    res.status(404).end();
});

export default router;