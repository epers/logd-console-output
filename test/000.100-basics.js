'use strict';

const section = require('section-tests');
const SpecReporter = section.SpecReporter;


section.use(new SpecReporter());


section('Basis', (section) => {
    section.test('Load the code', async() => {
        require('../');
    });

    section.test('Execute the class', async() => {
        const Console = require('../');
        new Console();
    });
});