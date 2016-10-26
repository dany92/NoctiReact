'use strict';
import db from './_db';
export default db;

import User from './models/user';
import Venue from './models/venue';
import Event from './models/event';
import Promotion from './models/promotion';
import EventAttendee from './models/event_attendee'

Venue.belongsTo(User);
User.hasMany(Venue);

Venue.hasMany(Event);
Event.belongsTo(Venue);

Promotion.belongsTo(Venue);
Venue.hasMany(Promotion);

Promotion.belongsTo(Event);
Event.hasMany(Promotion);

User.belongsToMany(Event, {through: EventAttendee});
Event.belongsToMany(User, {through: EventAttendee});