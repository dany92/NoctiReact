import db from '../server/db';
const Event = db.model('event');


const seedEvent = function () {

    const events = [
         {
            title: 'Ladies Night',
            description: 'The night is for ladies',
            start_date: '2016-03-02 23:30',
            end_date: '2016-03-03 4:30',
            venueId: 1
        },
        {
            title: 'Hot Summer Night',
            description: 'Make your summer night memorable',
            start_date: '2016-08-29 23:30',
            end_date: '2016-08-30 4:30',
            venueId: 1
        },
        {
            title: 'Alpha Di Mixer',
            description: 'Best Frat Party of the Year',
            start_date: '2016-05-11 22:00',
            end_date: '2016-05-12 2:00',
            venueId: 1
        },
        {
            title: 'Valentine Special',
            description: "Couples, have night of fun. Singles, it's about time to meet someone",
            start_date: '2016-02-14 23:00',
            end_date: '2016-02-15 6:00',
            venueId: 2
        },
        {
            title: 'Christmas Event',
            description: 'Party of the Year. Join us on White Christmas',
            start_date: '2016-12-24 20:00',
            end_date: '2016-12-25 4:00',
            venueId: 3
        }
    ];


    const creatingEvents = events.map(function (eventObj) {
        return Event.create(eventObj);
    });

    return Promise.all(creatingEvents);

};

export default seedEvent;