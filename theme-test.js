'use strict';


const Logger = require('./');
const log = new Logger();



log.log({
    values: [
        new Error('this is wrong!'),
        new Map([['key', {
            values: [1,2,3]
        }], [1, 123], ['thisIsSo', 'a cool looger!']]),
        new Set([1,2,3]),
        null,
        undefined,
        {aProperty:{someOtherProperty: ['this is a string', true]}},
        true,
        new Date(),
        () => {return 1;},
        435435,
        Symbol(234234),
        /does this match?/gim,
        new Promise((r) => {r()}),
        new WeakSet(),
        new WeakMap(),
        Buffer.alloc(100, 'a'),
        [{
            id: 34532,
            title: 'Best Party ever!',
            startDate: new Date(),
            endDate: new Date(),
            price: 25.60,
            deleted: null,
            venue: {
                name: 'Joinbox',
                floor: 'HQ',
                address: 'Brückfeldstarsse 16',
                zip: 3012,
                city: 'Bern',
                country: 'Switzerland'
            },
            image: Buffer.alloc(256),
            canceled: false,
            category: 'concert',
            author: undefined,
            genres: [
                'minimal',
                'dubstep',
            ],
        }, {
            id: 34532,
            title: 'Best Party ever!',
            startDate: new Date(),
            endDate: new Date(),
            price: 25.60,
            deleted: null,
            venue: {
                name: 'Joinbox',
                floor: 'HQ',
                address: 'Brückfeldstarsse 16',
                zip: 3012,
                city: 'Bern',
                country: 'Switzerland'
            },
            image: Buffer.alloc(5673),
            canceled: false,
            category: 'concert',
            author: undefined,
            genres: [
                'minimal',
                'dubstep',
            ],
        }]
    ]
});